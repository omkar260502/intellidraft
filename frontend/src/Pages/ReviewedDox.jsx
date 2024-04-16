import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import "./css/ReviewedDox.scss";
// import Image from "../assets/img/Group 1918.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DownloadIcon from "@mui/icons-material/Download";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import Chatbot from "../components/Chatbot";

const ReviewededDox = () => {
  const location = useLocation();
  const [draft, setDraft] = useState("");
  const response = location.state;
  const editableContentRef = useRef(null);

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
      saveAs(blob, "reviewed_document.docx");
    });
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
          <div className="chatbot-boxreview">
            {/* <img src={Image} alt="jingalala" /> */}
            <Chatbot />
          </div>
        </div>
        <div className="right-column">
          <div
            ref={editableContentRef}
            contentEditable="true"
            className="editable-content"
          >
            <p>
              {draft.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </p>
          </div>
          <div className="buttonsdiv-review">
            <Grid container spacing={1}>
              <Grid item xs={7}>
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

export default ReviewededDox;
