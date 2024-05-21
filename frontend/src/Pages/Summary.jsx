import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./css/Summary.scss";
import Button from "@mui/material/Button";
import SideBar from "../components/SideBar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import axios from "axios";
import pdfToText from "react-pdftotext";
import Load from "../assets/img/generateDocumentGIF.gif";

let speechSynthesisUtterance = null;
let speechSynthesisState = "stopped";
const languageOptions = {
  Hindi: "hi",
  Bengali: "bn",
  Telugu: "te",
  Marathi: "mr",
  Tamil: "ta",
  Urdu: "ur",
  Gujarati: "gu",
  Kannada: "kn",
  Odia: "or",
  Punjabi: "pa",
  Malayalam: "ml",
  Assamese: "as",
  Maithili: "mai",
  Sindhi: "sd",
  Konkani: "kok",

  English: "en",
  Spanish: "es",
  French: "fr",
  German: "de",
  "Chinese (Simplified)": "zh-Hans",
  Arabic: "ar",
  Portuguese: "pt",
  Russian: "ru",
  Japanese: "ja",
  Italian: "it",
  Korean: "ko",
  Dutch: "nl",
  Turkish: "tr",
  Vietnamese: "vi",
  Polish: "pl",
};

const Summary = () => {
  const summaryRef = useRef("");
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

  useEffect(() => {
    if (summary !== summaryRef.current) {
      summaryRef.current = summary;
      speechSynthesisUtterance = null;
      speechSynthesisState = "stopped";
    }
  }, [summary]);

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

  const handleFactsClick = async () => {
    setIsLoading(true);
    try {
      console.log("bhai", inputText);
      const response = await axios.post(
        "http://localhost:5000/api/factsandfigures",
        {
          inputText,
        }
      );
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
        language: selectedLanguage,
      });
      const translatedSummary = response.data;
      setSummary(translatedSummary);
    } catch (error) {
      console.error("Error translating summary:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextToSpeech = () => {
    if (speechSynthesisState === "playing") {
      // Pause speech synthesis if currently playing
      window.speechSynthesis.pause();
      speechSynthesisState = "paused";
    } else if (speechSynthesisState === "paused") {
      // Resume speech synthesis if currently paused
      window.speechSynthesis.resume();
      speechSynthesisState = "playing";
    } else {
      // Start speech synthesis if stopped
      speechSynthesisUtterance = new SpeechSynthesisUtterance(
        summaryRef.current
      );
      speechSynthesisUtterance.lang = language;
      window.speechSynthesis.speak(speechSynthesisUtterance);
      speechSynthesisState = "playing";
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
              <textarea
                id="inputText"
                type="textarea"
                name="inputText"
                placeholder="Enter Text to Summarize"
                value={inputText}
                onChange={handleTextInputChange}
              />
              <div className="button-row">
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
                  onClick={handleFactsClick}
                >
                  Facts and Figures
                </Button>
              </div>
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
              <div className="button-row">
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
                  onClick={handleFactsClick}
                >
                  Facts and Figures
                </Button>
              </div>
            </form>
          </div>
          <div className="right-columnsum">
            {summary && (
              <div>
                <div className="language-dropdown">
                  <select value={language} onChange={handleLanguageChange}>
                    {Object.entries(languageOptions).map(
                      ([langName, langCode]) => (
                        <option key={langCode} value={langCode}>
                          {langName}
                        </option>
                      )
                    )}
                  </select>
                  <FaVolumeUp
                    className="text-to-speech-icon"
                    onClick={() => handleTextToSpeech(summary, language)}
                  />
                </div>
                {isLoading ? (
                  <div className="loading-icon-sum">
                    <img src={Load} height="230px" alt="Loading..." />
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
