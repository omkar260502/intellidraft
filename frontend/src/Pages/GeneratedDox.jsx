import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import "./css/GeneratedDox.scss";
// import Image from "../assets/img/Group 1918.png";
import Load from "../assets/img/generateDocumentGIF.gif";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DownloadIcon from "@mui/icons-material/Download";
import CachedIcon from "@mui/icons-material/Cached";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import axios from "axios";
import Chatbot from "../components/Chatbot";

const GeneratedDox = () => {
  // const [searchQueryy, setsearchQueryy] = useState("");
  const location = useLocation();
  const [draft, setDraft] = useState(""); // State for the generated text
  const [isLoading, setIsLoading] = useState(false);
  const searchQuery = location.state;
  const editableContentRef = useRef(null);
  // const query = location.pathname.substring(10);
  const chatbotRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await axios.post("http://localhost:5000/api/messages", {
          searchQuery,
        });
        if (resp.data && resp.data.content && resp.data.content.length > 0) {
          setDraft(resp.data.content[0].text);
        } else {
          console.error("Response data or content is empty:", resp.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery, location.state]);

  // useEffect(() => {
  //   setsearchQueryy(query);
  // }, [query]);

  // useEffect(() => {
  //   if (response && response.content && response.content[0]) {
  //     setDraft(response.content[0].text);
  //   }
  // }, [response]);

  const handleDownload = () => {
    const editedDraft = editableContentRef.current.textContent;
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph({ children: [new TextRun(editedDraft)] })],
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "generated_document.docx");
    });
  };

  const handleRegenerate = async () => {
    setIsLoading(true); // Start loading
    try {
      // console.log("bhai", searchQueryy);
      const response = await axios.post("http://localhost:5000/api/messages", {
        searchQuery,
      });
      const newDraft = response.data.content[0].text;
      setDraft(newDraft); // Update the draft
    } catch (error) {
      console.error("Error fetching data:", error);
      // Display error message to the user
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleSummarize = async () => {
    const editedDraft = editableContentRef.current.textContent;
    navigate("/summary", { state: { draftText: editedDraft } });
  };

  const handleFactsAndFigures = () => {
    const editedDraft = editableContentRef.current.textContent;
    if (chatbotRef.current) {
      chatbotRef.current.setUserInput(
        `Can you provide the facts and figures from the following text? \n\n${editedDraft}`
      );
      chatbotRef.current.handleSubmit();
    }
  };

  const handleCost = () => {
    if (chatbotRef.current) {
      chatbotRef.current.setUserInput(
        `How much cost does it take to make ${searchQuery} full process in indian judiciary`
      );
      chatbotRef.current.handleSubmit();
    }
  };

  return (
    <div className="main-container">
      <div className="sidebar-generatedDox">
        <SideBar />
      </div>
      <div className="main-generateddox">
        <div className="left-column">
          <div className="heading-rectangle">
            <h3>IntelliDraft</h3>
            <h4>• Your Legal Assistant</h4>
          </div>
          <div className="chatbot-box">
            {/* <img src={Image} alt="jingalala" /> */}
            <Chatbot ref={chatbotRef} />
          </div>
          <div className="buttonsdiv-generate">
            <Grid container spacing={2}>
              {/* First Column */}
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AutoAwesomeIcon />}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    borderRadius: 3,
                    backgroundColor: "#2F94FC",
                    "&:hover": {
                      backgroundColor: "#226AB1",
                    },
                  }}
                  onClick={handleFactsAndFigures}
                >
                  Facts & Figures
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={handleSummarize}
                  variant="contained"
                  color="primary"
                  startIcon={<AutoAwesomeIcon />}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    borderRadius: 3,
                    backgroundColor: "#2F94FC",
                    "&:hover": {
                      backgroundColor: "#226AB1",
                    },
                  }}
                >
                  Summarize
                </Button>
              </Grid>
              {/* Second Column */}
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AutoAwesomeIcon />}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    borderRadius: 3,
                    backgroundColor: "#2F94FC",
                    "&:hover": {
                      backgroundColor: "#226AB1",
                    },
                  }}
                  onClick={handleCost}
                >
                  Calculate Estimated Cost
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AutoAwesomeIcon />}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    borderRadius: 3,
                    backgroundColor: "#2F94FC",
                    "&:hover": {
                      backgroundColor: "#226AB1",
                    },
                  }}
                >
                  Print
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="right-column">
          <div
            ref={editableContentRef}
            contentEditable="true"
            className="editable-content"
          >
            {isLoading ? (
              <div className="loading-icon">
                <img src={Load} height="230px" alt="Loading..." />
              </div>
            ) : (
              <p>
                {draft.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </p>
            )}
          </div>
          <div className="buttonsdiv-draft">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CachedIcon />}
                  fullWidth
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "#2F94FC",
                    "&:hover": {
                      backgroundColor: "#226AB1",
                    },
                  }}
                  onClick={handleRegenerate}
                >
                  Re-Generate
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                  fullWidth
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "#2F94FC",
                    "&:hover": {
                      backgroundColor: "#226AB1",
                    },
                  }}
                  onClick={handleDownload}
                >
                  Download
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedDox;
