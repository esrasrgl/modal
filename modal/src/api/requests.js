import { API_URL, TOKEN } from "../config/config";
import { toast } from "react-toastify";
import { Texts } from "../text/tr";
import apiRequest from "./rquestHelper";

export const getReportIssueType = async () => {
  try {
    const url = `${API_URL}/getreportissuetype`;
    const headers = { Authorization: `Bearer ${TOKEN}` };

    const data = await apiRequest(url, "GET", null, headers);

    const { ResponseStatus, ResponseMessage, ResponseData } = data;
    const updatedData = ResponseData.map((item) => ({
      ...item,
      DescriptionStatus: false, // for checkBox control
    }));

    console.log("getReportIssueType response: ");
    console.log(`Status: ${ResponseStatus}, Message: ${ResponseMessage}`);
    console.log("Data:", ResponseData);
    console.log("updatedData:", updatedData);

    return updatedData;
  } catch (error) {
    console.log("getReportIssueType error ", error);
    toast.error(Texts.get_error);
    throw new Error(`Failed to fetch report issue type: ${error.message}`);
  }
};

export const BookSectionCropReport = async (data) => {
  try {
    const url = `${API_URL}/createreportquestionrequest`;
    const headers = { Authorization: `Bearer ${TOKEN}` };

    const response = await apiRequest(url, 'POST', data, headers);
    console.log('Post response:', response);

    console.log("BookSectionCropReport: ");
    console.log("Response Status:", response.data.ResponseStatus);
    console.log("Response Message:", response.data.ResponseMessage);
    toast.success(Texts.post_success);
  } catch (error) {
    console.log("BookSectionCropReport error ", error);
    toast.error(Texts.post_error);
  }
};
