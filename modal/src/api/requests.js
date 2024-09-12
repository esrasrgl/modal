import axios from "axios";
import { API_URL, TOKEN } from "../config/config";
import { toast } from 'react-toastify';

export const getReportIssueType = async () => {
  try {
    const response = await axios.get(`${API_URL}/getreportissuetype`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const { ResponseStatus, ResponseMessage, ResponseData } = response.data;
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
    throw new Error(`Failed to fetch report issue type: ${error.message}`);
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
    toast.success("Yorum gönderildi!");
  } catch (error) {
    console.log("BookSectionCropReport error ", error);
    toast.error("API'ye veri gönderilirken hata oluştu");
  }
};
