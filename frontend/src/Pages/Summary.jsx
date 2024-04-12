import React, { useState } from "react";
import "./css/Summary.scss";
import Button from "@mui/material/Button";
import SideBar from "../components/SideBar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import axios from "axios";
import pdfToText from "react-pdftotext";

const Summary = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

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

  const handleSummarizeClick = async () => {
    try {
      //   const response = await axios.post("/api/oneai/summarize", {
      //     min_length: 50,
      //     max_length: 100,
      //     input: inputText,
      //   });
      console.log("bhai", inputText);
      const response = await axios.post("http://localhost:5000/api/summary", {
        inputText,
      });
      //   const newDraft = response.data.content[0].text;
      setSummary(response.data.content[0].text);
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
          <h1>Summary</h1>
        </div>
        <div className="summary-flex">
          <div className="left-columnsum">
            <form className="text-input">
              <input
                id="inputText"
                type="textarea"
                name="inputText"
                placeholder="Enter Text to Summarize"
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
                onClick={handleSummarizeClick}
              >
                Summarize
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
                onClick={handleSummarizeClick}
              >
                Summarize
              </Button>
            </form>
          </div>
          <div className="right-columnsum">
            {summary && (
              <div>
                <h2>Summary:</h2>
                <p>{summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
