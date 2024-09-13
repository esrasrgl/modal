import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import { getReportIssueType } from "./api/requests";
import { Texts } from "./text/tr";

jest.mock("./api/requests", () => ({
  getReportIssueType: jest.fn(),
}));
const mockResponseData = [
  { Id: 1, DescriptionStatus: true },
  { Id: 2, DescriptionStatus: false },
];
describe("App Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(Texts.open_modal)).toBeInTheDocument();
  });

  it("does not render when show is false", () => {
    render(<App />);
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("modal open when click button", async () => {
    getReportIssueType.mockResolvedValueOnce(mockResponseData);
    render(<App />);
    const button = screen.getByText(Texts.open_modal);
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByTestId("modal")).toBeInTheDocument();
    });
  });

  it("should handle error correctly and stop loading when getReportIssueType fails", async () => {
    const mockError = new Error("API error");
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    getReportIssueType.mockRejectedValueOnce(mockError);
    render(<App />);
    const button = screen.getByText(Texts.open_modal);
    fireEvent.click(button);

    await waitFor(() => {
      expect(getReportIssueType).toHaveBeenCalledTimes(1); // API çağrısı yapıldı
      expect(consoleSpy).toHaveBeenCalledWith('fetchData error:', mockError); // Hata loglandı
    });
  });
});
