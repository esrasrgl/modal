import axios from "axios";
import { BookSectionCropReport } from "../api/requests";

jest.mock("axios");
jest.mock("../config/config.js", () => ({
    API_URL: 'https://mocked-url.com', 
    TOKEN: { Authorization: 'Bearer mock-token' } 
  }));

describe("BookSectionCropReport function", () => {
  const API_URL = "https://mocked-url.com";
  const data = { key: "value" };

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render correctly", async () => {
    const mockResponse = {
      data: {
        ResponseStatus: "Success",
        ResponseMessage: "Data received successfully",
      },
    };
    axios.post.mockResolvedValue(mockResponse);
    await BookSectionCropReport(data);
    expect(axios.post).toHaveBeenCalledWith(`${API_URL}/createreportquestionrequest`, data, {
      headers: {
        Authorization: 'Bearer [object Object]',
      },
    });
  });

  it("should log the response data correctly", async () => {
    const mockResponse = {
      data: {
        ResponseStatus: "Success",
        ResponseMessage: "Data received successfully",
      },
    };

    axios.post.mockResolvedValue(mockResponse);
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
  });

  it("should log an error when the API request fails", async () => {
    const mockError = new Error("API request failed");

    axios.post.mockRejectedValue(mockError);
    await BookSectionCropReport(data);

    expect(console.log).toHaveBeenCalledWith(
      "BookSectionCropReport error ",
      mockError
    );
  });
});