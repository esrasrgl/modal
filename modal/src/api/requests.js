import { API_URL, TOKEN } from "../config/config";
import { toast } from "react-toastify";
import { Texts } from "../text/tr";
import apiRequest from "./rquestHelper";

export const getReportIssueType = () => {
  const url = `${API_URL}/getreportissuetype`;
  const headers = { Authorization: `Bearer ${TOKEN}` };

  return apiRequest(url, "GET", null, headers)
    .then((data) => {
      const { ResponseStatus, ResponseMessage, ResponseData } = data;
      if (ResponseStatus === 1) {
        const updatedData = ResponseData.map((item) => ({
          ...item,
          DescriptionStatus: false, // for checkBox control
        }));

        console.log("getReportIssueType response: ");
        console.log(`Status: ${ResponseStatus}, Message: ${ResponseMessage}`);
        console.log("Data:", ResponseData);
        console.log("updatedData:", updatedData);

        return updatedData;
      } else {
        console.error(
          `API get status code: ${ResponseStatus}, Message: ${ResponseMessage}`
        );
        throw new Error(
          `Unexpected Status: ${ResponseStatus}, Message: ${ResponseMessage}`
        );
      }
    })
    .catch((error) => {
      console.log("getReportIssueType error ", error);
      toast.error(Texts.get_error);
      throw new Error(`Failed to fetch report issue type: ${error.message}`);
    });
};

export const BookSectionCropReport = (data) => {
  const url = `${API_URL}/createreportquestionrequest`;
  const headers = { Authorization: `Bearer ${TOKEN}` };

  return apiRequest(url, "POST", data, headers)
    .then((response) => {
      const { ResponseStatus, ResponseMessage } = response.data;

      if (ResponseStatus === 0) {
        console.log("Post response:", response);
        console.log("BookSectionCropReport: ");
        console.log("Response Status:", ResponseStatus);
        console.log("Response Message:", ResponseMessage);
        toast.success(Texts.post_success);
      } else {
        console.error(
          `API post status code: ${ResponseStatus}, Message: ${ResponseMessage}`
        );
        throw new Error(
          `Unexpected Status: ${ResponseStatus}, Message: ${ResponseMessage}`
        );
      }
    })
    .catch((error) => {
      console.log("BookSectionCropReport error ", error);
      toast.error(Texts.post_error);
    });
};
