import { waitFor } from "@testing-library/react";
import axios from "axios";
import { toast } from "react-toastify";
import { getReportIssueType } from "../api/requests";
import "../config/config";
import { Texts } from "../text/tr";
import apiRequest from "../api/rquestHelper";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("axios", () => ({
  get: jest.fn(),
}));

jest.mock("../config/config", () => ({
  API_URL: "https://mocked-url.com",
  TOKEN: { Authorization: "Bearer mock-token" },
}));

jest.mock("../api/rquestHelper");

const mockResponseData = [
  {
    Description: "String",
    Id: 1,
    Name: "String",
  },
];

describe("getReportIssueType function", () => {
  const API_URL = "https://mocked-url.com";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should apiRequest correctly call get data and update state", async () => {
    apiRequest.mockResolvedValue({
      ResponseStatus: 1,
      ResponseMessage: "Succes",
      ResponseData: mockResponseData,
    });

    const result = await getReportIssueType();
    expect(apiRequest).toHaveBeenCalledWith(
      `${API_URL}/getreportissuetype`,
      "GET",
      null,
      { Authorization: "Bearer [object Object]" }
    );

    expect(result).toEqual([
      {
        Description: "String",
        Id: 1,
        Name: "String",
        DescriptionStatus: false,
      },
    ]);
  });

  it("should handle errors correctly in getReportIssueType", async () => {
    const error = new Error("API request failed");
    apiRequest.mockRejectedValueOnce(error);
    await expect(getReportIssueType()).rejects.toThrow(
      `Failed to fetch report issue type: ${error.message}`
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(Texts.get_error);
    });
  });

  test('should throw an error if request fails', async () => {
    const error = new Error('Network error');
    apiRequest.mockRejectedValueOnce(error);
    await expect(getReportIssueType()).rejects.toThrow(`Failed to fetch report issue type: ${error.message}`);
  });
  
});
