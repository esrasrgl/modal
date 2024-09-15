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
        throw {
          status: ResponseStatus,
          message: ResponseMessage
        };
      }
    })
    .catch((error) => {
      console.log("getReportIssueType error ", error);
      toast.error(Texts.get_error);
      throw new Error(`Failed to fetch report issue type: ${error.status} ${error.message}`);
    });
};

export const BookSectionCropReport = (data) => {
  const url = `${API_URL}/createreportquestionrequest`;
  const headers = { Authorization: `Bearer ${TOKEN}` };

  return apiRequest(url, "POST", data, headers)
    .then((res) => {

      const { ResponseStatus, ResponseMessage } = res;

      if (ResponseStatus === 1) {
        console.log("Post response.res:", res);
        console.log("BookSectionCropReport: ");
        console.log("Response Status:", ResponseStatus);
        console.log("Response Message:", ResponseMessage);
        toast.success(Texts.post_success);
      } else {
        throw {
          status: ResponseStatus,
          message: ResponseMessage
        };
      }
    })
    .catch((error) => {
      console.log("BookSectionCropReport error ", error);
      toast.error(Texts.post_error);
      //toast.error(error.message);
      throw new Error(`Failed to post issue type request: ${error.status} ${error.message}`);
    });
};
