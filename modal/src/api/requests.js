import axios from "axios";
import { API_URL, TOKEN } from "../config/config";

export const getReportIssueType = async (setResponseData) => {
  try {
    const response = await axios.get(`${API_URL}/getreportissuetype`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const { ResponseStatus, ResponseMessage, ResponseData } = response.data;

    const updatedData = ResponseData.map((item) => ({
      ...item,
      DescriptionStatus: false, // for checkBox control
    }));

    setResponseData(updatedData);

    console.log("getReportIssueType response: ");
    console.log("Status:", ResponseStatus);
    console.log("Message:", ResponseMessage);
    console.log("Data:", ResponseData);
    console.log("updatedData:", updatedData);
  } catch (error) {
    console.log("getReportIssueType error ", error);
  }
};

export const BookSectionCropReport = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/createreportquestionrequest`,
      data,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          //'Content-Type': 'application/json',
        },
      }
    );
    console.log("BookSectionCropReport: ");
    console.log("Response Status:", response.data.ResponseStatus);
    console.log("Response Message:", response.data.ResponseMessage);
  } catch (error) {
    console.log("BookSectionCropReport error ", error);
  }
};
