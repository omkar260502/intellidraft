import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import "./css/GeneratedDox.scss";
// import Image from "../assets/img/Group 1918.png";
import Load from "../assets/img/Rolling@1.25x-1.0s-200px-200px.gif";
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
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const [draft, setDraft] = useState(""); // State for the generated text
  const [isLoading, setIsLoading] = useState(false);
  const response = location.state;
  const editableContentRef = useRef(null);
  const query = location.pathname.substring(10); // Set default value to an empty string

  useEffect(() => {
    console.log("bhaibhai", query);
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    if (response && response.content && response.content[0]) {
      setDraft(response.content[0].text);
    }
  }, [response]);

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
      // console.log("bhai", searchQuery);
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
            <Chatbot />
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
                >
                  Facts & Figures
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
                <img src={Load} alt="Loading..." />
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
