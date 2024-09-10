import React, { useState as useStateMock } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Modal from "../components/Modal/Modal";

jest.mock("axios");
jest.mock("../Svg/CloseModalSvg.js", () => () => <div>CloseModalSvg Mock</div>);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const mockResponseData = [
  {
    Description: "String",
    Id: 1,
    Name: "String",
  },
];

describe("modal test ", () => {
  let mockOnClose;
  let utils;
  let mockSetResponseData;
  let mockSetMessage;
  beforeEach(() => {
    mockSetResponseData = jest.fn();
    mockSetMessage = jest.fn();
    mockSetIsLoading = jest.fn();

    React.useState
      .mockImplementationOnce((init) => [init, mockSetMessage]) // useState (message)
      .mockImplementationOnce((init) => [init, mockSetResponseData]) // useState (responseData)
      .mockImplementationOnce((init) => [init, mockSetIsLoading]); // useState (isLoadiing)

    mockOnClose = jest.fn();
    utils = render(
      <Modal onClose={mockOnClose} responseData={mockResponseData} />
    );
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should close when click onClose ", () => {
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("modal"));
    expect(mockOnClose).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("modal-content"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should close when click X ", () => {
    const XBtn = screen.getByText("CloseModalSvg Mock");
    fireEvent.click(XBtn);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test("handle submit fn for api post", () => {
    const submitBtn = screen.getByText(/Gönder/i);
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    fireEvent.click(submitBtn);
    expect(consoleSpy).toHaveBeenCalledWith("handleSubmit data", {
      AdminPanelPage: 0,
      BookSectionCropId: 1,
      Issues: expect.any(Array),
      Message: "",
    });
  });
});

describe("api get test", () => {
  const mockSetResponseData = jest.fn();
  const mockSetMessage = jest.fn();
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, mockSetMessage]);
    useStateMock.mockImplementation((init) => [init, mockSetResponseData]);
    useStateMock.mockImplementationOnce((init) => [init, mockSetIsLoading]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should axios get data and updates state", async () => {
    axios.get.mockResolvedValue({
      data: {
        ResponseStatus: 1,
        ResponseMessage: "Succes",
        ResponseData: mockResponseData,
      },
    });

    render(<Modal />);
    await waitFor(() => {
      expect(mockSetResponseData).toHaveBeenCalledWith([
        {
          Description: "String",
          Id: 1,
          Name: "String",
          DescriptionStatus: false,
        },
      ]);
    });
  });

  it("handles errors from the api call", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));
    const error = new Error("API request failed");
    axios.get.mockRejectedValueOnce(error);
    await waitFor(() => {
      expect(mockSetResponseData).not.toHaveBeenCalled();
    });
  });
});
