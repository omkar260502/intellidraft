import React, { useState } from "react";
import "./css/Review.scss";
import Button from "@mui/material/Button";
import SideBar from "../components/SideBar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import axios from "axios";
import pdfToText from "react-pdftotext";
import Imgg from "../assets/img/Group 1918.png";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // Check if the uploaded file is a PDF
      if (file.type === "application/pdf") {
        setFileUploaded(true);
        pdfToText(file)
          .then((text) => {
            setInputText(text);
          })
          .catch((error) => {
            console.error("Failed to extract text from PDF:", error);
            setFileUploaded(false);
          });
      } else {
        console.error("Uploaded file is not a PDF");
        setFileUploaded(false);
      }
    } else {
      setFileUploaded(false);
      setInputText("");
    }
  };

  const handleTextInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleReviewClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/review", {
        inputText,
      });
      navigate(`/review/revieweddoc`, {
        state: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="main-containersum">
      <div className="sidebar-summary">
        <SideBar />
      </div>
      <div className="main-summary">
        <div className="summary-heading">
          <h1>Review Document</h1>
        </div>
        <div className="summary-flex">
          <div className="left-columnsum">
            <form className="text-input">
              <textarea
                id="inputText"
                type="textarea"
                name="inputText"
                placeholder="Enter Text to be Reviewed"
                value={inputText}
                onChange={handleTextInputChange}
              />
              <Button
                className="summarize-button"
                variant="contained"
                color="primary"
                sx={{
                  width: "25%",
                  justifyContent: "center",
                  backgroundColor: "#2F94FC",
                  "&:hover": {
                    backgroundColor: "#226AB1",
                  },
                }}
                onClick={handleReviewClick}
              >
                Review
              </Button>
            </form>
            <h3>OR</h3>
            <form className="file-input">
              <div className="file-upload-container">
                <label htmlFor="upload-file">
                  {fileUploaded ? (
                    <>
                      <div className="upload-icon">
                        <MdFileDownloadDone />
                      </div>
                      <div className="upload-text">File Uploaded</div>
                    </>
                  ) : (
                    <>
                      <div className="upload-icon">
                        <FaCloudUploadAlt />
                      </div>
                      <div className="upload-text">Browse Files to Upload</div>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="upload-file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                />
              </div>
              <Button
                className="summarize-button"
                variant="contained"
                color="primary"
                sx={{
                  width: "25%",
                  justifyContent: "center",
                  backgroundColor: "#2F94FC",
                  "&:hover": {
                    backgroundColor: "#226AB1",
                  },
                }}
                onClick={handleReviewClick}
              >
                Review
              </Button>
            </form>
          </div>
          <div className="right-columnrev">
            <img src={Imgg} alt="imae" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
