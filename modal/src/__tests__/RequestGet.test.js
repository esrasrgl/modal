import React, { useState as useStateMock } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Modal from "../components/Modal/Modal";
import axios from "axios";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("axios");

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

describe("getReportIssueType function", () => {
  const mockSetResponseData = jest.fn();
  const mockSetMessage = jest.fn();
  const mockSetIsLoading = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((initialValue) => {
      if (initialValue === "") return [initialValue, mockSetMessage];
      if (Array.isArray(initialValue))
        return [initialValue, mockSetResponseData];
      if (typeof initialValue === "boolean")
        return [initialValue, mockSetIsLoading];
      return [initialValue, jest.fn()];
    });
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

    render(<Modal />);

    await waitFor(() => {
      expect(mockSetResponseData).toHaveBeenCalledWith([]);
    });

    screen.debug();
    expect(toast.error).toHaveBeenCalledWith(
      "API'den veri alınırken hata oluştu"
    );
  });
});
