import axios from "axios";
import { BookSectionCropReport } from "../api/requests";
import { toast } from "react-toastify";
import { Texts } from "../text/tr";
import apiRequest from "../api/rquestHelper";
import { waitFor } from "@testing-library/react";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("axios", () => ({
  post: jest.fn(),
}));

jest.mock("../config/config.js", () => ({
  API_URL: "https://mocked-url.com",
  TOKEN: { Authorization: "Bearer mock-token" },
}));

jest.mock("../api/rquestHelper");

describe("BookSectionCropReport function", () => {
  const API_URL = "https://mocked-url.com";
  const data = { key: "value" };

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should apiRequest correctly call the POST data", async () => {
    const mockResponse = {
      ResponseStatus: 1,
      ResponseMessage: "Data received successfully",
    };

    apiRequest.mockResolvedValue(mockResponse);
    await BookSectionCropReport(data);
    expect(apiRequest).toHaveBeenCalledWith(
      `${API_URL}/createreportquestionrequest`,
      "POST",
      data,
      {
        Authorization: "Bearer [object Object]",
      }
    );
  });

  it("should log the response data correctly", async () => {
    const mockResponse = {
      ResponseStatus: 1,
      ResponseMessage: "Data received successfully",
    };

    apiRequest.mockResolvedValue(mockResponse);
    await BookSectionCropReport(data);

    expect(console.log).toHaveBeenCalledWith("BookSectionCropReport: ");
    expect(console.log).toHaveBeenCalledWith(
      "Response Status:",
      mockResponse.ResponseStatus
    );
    expect(console.log).toHaveBeenCalledWith(
      "Response Message:",
      mockResponse.ResponseMessage
    );
    expect(toast.success).toHaveBeenCalledWith(Texts.post_success);
  });

  it('should handle error when response status is not successful', async () => {
    apiRequest.mockResolvedValue({
      ResponseStatus: 2,
      ResponseMessage: 'Error occurred',
    });
    
    await expect(BookSectionCropReport(data)).rejects.toThrow('Failed to post issue type request: 2 Error occurred');
    
    expect(apiRequest).toHaveBeenCalledWith(
      `${API_URL}/createreportquestionrequest`,
      "POST",
      data,
      {
        Authorization: "Bearer [object Object]",
      }
    );
  });

  it("should handle errors correctly in BookSectionCropReport", async () => {
    const mockError = new Error("API request failed");
    apiRequest.mockRejectedValue(mockError);
    await expect(BookSectionCropReport(data)).rejects.toThrow('Failed to post issue type request: undefined API request failed');

    expect(console.log).toHaveBeenCalledWith(
      "BookSectionCropReport error ",
      mockError
    );
    expect(toast.error).toHaveBeenCalledWith(Texts.post_error);
  });
});
