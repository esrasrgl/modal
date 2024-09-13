import axios from "axios";
import apiRequest from "../api/rquestHelper";

jest.mock("axios");

describe("apiRequest helper", () => {
  const mock_url = "https://example.com";

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should make a successful GET request", async () => {
    const mockResponse = { data: { message: "Success" } };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await apiRequest(mock_url, "GET");

    expect(result).toEqual(mockResponse.data);
    expect(axios).toHaveBeenCalledWith({
      url: mock_url,
      method: "GET",
      headers: {},
    });
  });

  it("should make a successful POST request", async () => {
    const mockResponse = { data: { id: 1, status: "created" } };
    const postData = { name: "Test" };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await apiRequest(mock_url, "POST", postData);

    expect(result).toEqual(mockResponse.data);
    expect(axios).toHaveBeenCalledWith({
      url: mock_url,
      method: "POST",
      data: postData,
      headers: {},
    });
  });

  it("should throw an error for a failed request", async () => {
    const mockError = new Error("Network Error");
    axios.mockRejectedValueOnce(mockError);

    await expect(apiRequest(mock_url, "GET")).rejects.toThrow(
      "Failed to fetch data: Network Error"
    );
  });
});
