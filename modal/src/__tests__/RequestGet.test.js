import { waitFor } from "@testing-library/react";
import axios from "axios";
import { toast } from "react-toastify";
import { getReportIssueType } from "../api/requests";
import "../config/config";
import { Texts } from "../text/tr";

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

  it("should axios get data and updates state", async () => {
    axios.get.mockResolvedValue({
      data: {
        ResponseStatus: 1,
        ResponseMessage: "Succes",
        ResponseData: mockResponseData,
      },
    });

    const result = await getReportIssueType();

    expect(axios.get).toHaveBeenCalledWith(`${API_URL}/getreportissuetype`, {
      headers: {
        Authorization: "Bearer [object Object]",
      },
    });

    expect(result).toEqual([
      {
        Description: "String",
        Id: 1,
        Name: "String",
        DescriptionStatus: false,
      },
    ]);
  });

  it("handles errors from the api call", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));
    const error = new Error("API request failed");
    axios.get.mockRejectedValueOnce(error);
    await expect(getReportIssueType()).rejects.toThrow(
      `Failed to fetch report issue type: ${error.message}`
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(Texts.get_error);
    });
  });
});
