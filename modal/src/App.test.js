import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    expect(screen.getByText(/Open Modal/i)).toBeInTheDocument();
  });
  it("does not render when show is false", () => {
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
  it("modal open when click button", () => {
    const button = screen.getByText(/Open Modal/i);
    fireEvent.click(button);
    expect(screen.queryByTestId("modal")).toBeInTheDocument();
  });
});
