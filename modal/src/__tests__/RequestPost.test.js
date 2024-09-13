import axios from "axios";
import { BookSectionCropReport } from "../api/requests";
import { toast } from "react-toastify";
import { Texts } from "../text/tr";
import apiRequest from "../api/rquestHelper";

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

jest.mock( "../api/rquestHelper");

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
      data: {
        ResponseStatus: "Success",
        ResponseMessage: "Data received successfully",
      },
    };
    apiRequest.mockResolvedValue(mockResponse);
    await BookSectionCropReport(data);
    expect(apiRequest).toHaveBeenCalledWith(
      `${API_URL}/createreportquestionrequest`,'POST',
      data,
      {
        Authorization: "Bearer [object Object]",
      }
    );
  });

  it("should log the response data correctly", async () => {
    const mockResponse = {
      data: {
        ResponseStatus: "Success",
        ResponseMessage: "Data received successfully",
      },
    };

   apiRequest.mockResolvedValue(mockResponse);
    await BookSectionCropReport(data);

    expect(console.log).toHaveBeenCalledWith("BookSectionCropReport: ");
    expect(console.log).toHaveBeenCalledWith(
      "Response Status:",
      mockResponse.data.ResponseStatus
    );
    expect(console.log).toHaveBeenCalledWith(
      "Response Message:",
      mockResponse.data.ResponseMessage
    );
    expect(toast.success).toHaveBeenCalledWith(Texts.post_success);
  });

  it("should log an error when the API request fails", async () => {
    const mockError = new Error("API request failed");

    apiRequest.mockRejectedValue(mockError);
    await BookSectionCropReport(data);

    expect(console.log).toHaveBeenCalledWith(
      "BookSectionCropReport error ",
      mockError
    );
    expect(toast.error).toHaveBeenCalledWith(Texts.post_error);
  });
});
