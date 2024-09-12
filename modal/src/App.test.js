import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { getReportIssueType } from "./api/requests";

jest.mock('./api/requests', () => ({
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
    expect(screen.getByText(/Open Modal/i)).toBeInTheDocument();
  });
  it("does not render when show is false", () => {
    render(<App />);
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
  it("modal open when click button", async() => {
    getReportIssueType.mockResolvedValueOnce(mockResponseData);
    render(<App />);
    const button = screen.getByText(/Open Modal/i);
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByTestId('modal')).toBeInTheDocument();
    });  });

});
