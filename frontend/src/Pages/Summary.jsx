import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/Summary.scss";
import Button from "@mui/material/Button";
import SideBar from "../components/SideBar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import axios from "axios";
import pdfToText from "react-pdftotext";
import Load from "../assets/img/Rolling@1.25x-1.0s-200px-200px.gif";

const Summary = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const location = useLocation();
  const draftText = location.state?.draftText || "";
  const [inputText, setInputText] = useState(draftText);
  const [summary, setSummary] = useState("Summary Comes here");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const fetchSummary = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post("http://localhost:5000/api/summary", {
          inputText: draftText,
        });
        setSummary(response.data.content[0].text);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (draftText) {
      fetchSummary();
    }
  }, [draftText]);

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
    setIsLoading(true);
    try {
      console.log("bhai", inputText);
      const response = await axios.post("http://localhost:5000/api/summary", {
        inputText,
      });
      setSummary(response.data.content[0].text);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLanguageChange = async (event) => {
    setIsLoading(true);
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    try {
      const response = await axios.post("http://localhost:5000/api/translate", {
        text: summary,
        targetLanguage: selectedLanguage,
      });

      const translatedSummary = response.data.translatedText;
      setSummary(translatedSummary);
    } catch (error) {
      console.error("Error translating summary:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(summary);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
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
              <textarea
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
                <div className="language-dropdown">
                  <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                  <FaVolumeUp
                    className="text-to-speech-icon"
                    onClick={handleTextToSpeech}
                  />
                </div>
                {isLoading ? (
                  <div className="loading-icon-sum">
                    <img src={Load} alt="Loading..." />
                  </div>
                ) : (
                  <div className="summary-main">
                    <h2>Summary:</h2>
                    <p>{summary}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
