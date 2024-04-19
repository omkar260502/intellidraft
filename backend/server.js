require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { Anthropic } = require("@anthropic-ai/sdk");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;

const apiKey = process.env.ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
  apiKey,
});

// API endpoint for search queries
app.post("/api/messages", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const { searchQuery } = req.body;
    if (!searchQuery) {
      return res.status(400).json({ error: "Search query is required" });
    }
    // const msg = await anthropic.messages.create({
    //   model: "claude-3-opus-20240229",
    //   max_tokens: 4000,
    //   temperature: 0,
    //   messages: [
    //     {
    //       role: "user",
    //       content: [
    //         {
    //           type: "text",
    //           text: `Generate a legal agreement for ${searchQuery} according to Indian Judiciary System and remove other text like the note and Here's a sample and if the legal document can't be made return cant make draft for this`,
    //         },
    //       ],
    //     },
    //   ],
    // });
    const msg = {
      id: "msg_01H3ZUmn3UBcf4wcrjnLipiw",
      type: "message",
      role: "assistant",
      content: [
        {
          type: "text",
          text: 'HOUSE SALE AGREEMENT\n\nThis Agreement for Sale ("Agreement") is executed on this [insert date] day of [insert month], [insert year] at [insert place]\n\nBETWEEN\n\n[Insert name of the Seller], residing at [insert address], hereinafter referred to as the "Seller" (which expression shall, unless repugnant to the context or meaning thereof, be deemed to include his/her heirs, executors, administrators, and assigns) of the FIRST PART;\n\nAND\n\n[Insert name of the Buyer], residing at [insert address], hereinafter referred to as the "Buyer" (which expression shall, unless repugnant to the context or meaning thereof, be deemed to include his/her heirs, executors, administrators, and assigns) of the SECOND PART.\n\nWHEREAS:\n\n1. The Seller is the sole and absolute owner of the immovable property situated at [insert address of the property], more particularly described in the Schedule hereunder written (hereinafter referred to as the "Property").\n\n2. The Seller has agreed to sell, and the Buyer has agreed to purchase the Property on the terms and conditions set forth herein.\n\nNOW, THEREFORE, in consideration of the mutual covenants and promises herein contained, the parties hereto agree as follows:\n\n1. Sale of Property: The Seller hereby agrees to sell, transfer, and convey the Property to the Buyer, and the Buyer agrees to purchase the Property from the Seller, free from all encumbrances, charges, liens, and claims.\n\n2. Consideration: The total consideration for the sale of the Property shall be Rs. [insert amount] (Rupees [insert amount in words] only), which shall be paid by the Buyer to the Seller as follows:\n   a. Rs. [insert amount] (Rupees [insert amount in words] only) as earnest money upon the execution of this Agreement; and\n   b. The balance amount of Rs. [insert amount] (Rupees [insert amount in words] only) on or before the execution of the Sale Deed.\n\n3. Execution of Sale Deed: The Seller shall execute and register the Sale Deed in favor of the Buyer within [insert number] days from the date of receipt of the full consideration.\n\n4. Possession: The Seller shall hand over the peaceful, vacant, and physical possession of the Property to the Buyer at the time of the execution of the Sale Deed.\n\n5. Representations and Warranties: The Seller hereby represents and warrants that:\n   a. The Seller has clear and marketable title to the Property;\n   b. The Property is free from all encumbrances, charges, liens, and claims;\n   c. There are no pending legal proceedings or disputes with respect to the Property; and\n   d. The Seller has the right and authority to enter into this Agreement and sell the Property.\n\n6. Indemnification: The Seller shall indemnify and keep indemnified the Buyer against all losses, damages, costs, and expenses incurred by the Buyer due to any defect in the title of the Property or breach of any representations and warranties by the Seller.\n\n7. Governing Law and Jurisdiction: This Agreement shall be governed by and construed in accordance with the laws of India, and any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts at [insert place].\n\nSCHEDULE OF PROPERTY\n[Insert detailed description of the Property]\n\nIN WITNESS WHEREOF, the parties hereto have set their hands and seals on the day, month, and year first above written.\n\nSigned, sealed, and delivered by:\n\n[Insert name of the Seller]\n(Seller)\n\nIn the presence of:\n1. [Insert name and address of witness]\n2. [Insert name and address of witness]\n\nSigned, sealed, and delivered by:\n\n[Insert name of the Buyer]\n(Buyer)\n\nIn the presence of:\n1. [Insert name and address of witness]\n2. [Insert name and address of witness]',
        },
      ],
      model: "claude-3-opus-20240229",
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: {
        input_tokens: 39,
        output_tokens: 911,
      },
    };
    // console.log(msg); // Log the response from Anthropic SDK
    res.json(msg); // Send the response back to the client
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//chatbot api
app.post("/api/chat", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const { searchQuery } = req.body;
    if (!searchQuery) {
      return res.status(400).json({ error: "Search query is required" });
    }
    // const msg = await anthropic.messages.create({
    //   model: "claude-3-opus-20240229",
    //   max_tokens: 4000,
    //   temperature: 0,
    //   messages: [
    //     {
    //       role: "user",
    //       content: [
    //         {
    //           type: "text",
    //           text: `"${searchQuery}" for this message act like legal advisor based in Indian Judiciary`,
    //         },
    //       ],
    //     },
    //   ],
    // });
    const msg = {
      id: "msg_013f3gwGqrDe2ZcmEkqBSGhQ",
      type: "message",
      role: "assistant",
      content: [{ type: "text", text: "Hello! How can I assist you today?" }],
      model: "claude-3-opus-20240229",
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: { input_tokens: 8, output_tokens: 12 },
    };
    // console.log(msg.content[0].text); // Log the response from Anthropic SDK
    res.json(msg); // Send the response back to the client
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Summarize API
app.post("/api/summary", async (req, res) => {
  // console.log(req.body);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const { inputText } = req.body;
    // console.log(inputText);
    if (!inputText) {
      return res.status(400).json({ error: "Search query is required" });
    }
    // const msg = await anthropic.messages.create({
    //   model: "claude-3-opus-20240229",
    //   max_tokens: 4000,
    //   temperature: 0,
    //   messages: [
    //     {
    //       role: "user",
    //       content: [
    //         {
    //           type: "text",
    //           text: `"${inputText}" Summarize this Document`,
    //         },
    //       ],
    //     },
    //   ],
    // });/
    const msg = {
      id: "msg_01H3ZUmn3UBcf4wcrjnLipiw",
      type: "message",
      role: "assistant",
      content: [
        {
          type: "text",
          text: "This is Summarized Text",
        },
      ],
      model: "claude-3-opus-20240229",
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: {
        input_tokens: 39,
        output_tokens: 911,
      },
    };
    // console.log(msg.content[0].text); // Log the response from Anthropic SDK
    res.json(msg); // Send the response back to the client
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/oneai/summarize", async (req, res) => {
  console.log(req.body);
  try {
    const { min_length, max_length, input } = req.body;

    // Validate input parameters
    if (!min_length || !max_length || !input) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const data = {
      input,
      steps: [{ skill: "summarize" }],
    };

    const response = await axios.post(
      "https://api.oneai.com/api/v0/pipeline",
      data
    );

    const summary = response.data.output;

    res.json({ summary });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  try {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {
        q: text,
        target: targetLanguage,
        key: GOOGLE_TRANSLATION_API,
      }
    );

    const translatedText = response.data.data.translations[0].translatedText;
    res.json({ translatedText });
  } catch (error) {
    console.error("Error translating text:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});

// review API
app.post("/api/review", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const { inputText } = req.body;
    if (!inputText) {
      return res.status(400).json({ error: "Search query is required" });
    }
    // const msg = await anthropic.messages.create({
    //   model: "claude-3-opus-20240229",
    //   max_tokens: 4000,
    //   temperature: 0,
    //   messages: [
    //     {
    //       role: "user",
    //       content: [
    //         {
    //           type: "text",
    //           text: `"${inputText}" Convert this text in to legal langauge as per Indian Judiciary System and do right formating Dont add any extra term like note and tips. I want to print it as it is`,
    //         },
    //       ],
    //     },
    //   ],
    // });
    const msg = {
      id: "msg_01H3ZUmn3UBcf4wcrjnLipiw",
      type: "message",
      role: "assistant",
      content: [
        {
          type: "text",
          text: 'HOUSE SALE AGREEMENT\n\nThis Agreement for Sale ("Agreement") is executed on this [insert date] day of [insert month], [insert year] at [insert place]\n\nBETWEEN\n\n[Insert name of the Seller], residing at [insert address], hereinafter referred to as the "Seller" (which expression shall, unless repugnant to the context or meaning thereof, be deemed to include his/her heirs, executors, administrators, and assigns) of the FIRST PART;\n\nAND\n\n[Insert name of the Buyer], residing at [insert address], hereinafter referred to as the "Buyer" (which expression shall, unless repugnant to the context or meaning thereof, be deemed to include his/her heirs, executors, administrators, and assigns) of the SECOND PART.\n\nWHEREAS:\n\n1. The Seller is the sole and absolute owner of the immovable property situated at [insert address of the property], more particularly described in the Schedule hereunder written (hereinafter referred to as the "Property").\n\n2. The Seller has agreed to sell, and the Buyer has agreed to purchase the Property on the terms and conditions set forth herein.\n\nNOW, THEREFORE, in consideration of the mutual covenants and promises herein contained, the parties hereto agree as follows:\n\n1. Sale of Property: The Seller hereby agrees to sell, transfer, and convey the Property to the Buyer, and the Buyer agrees to purchase the Property from the Seller, free from all encumbrances, charges, liens, and claims.\n\n2. Consideration: The total consideration for the sale of the Property shall be Rs. [insert amount] (Rupees [insert amount in words] only), which shall be paid by the Buyer to the Seller as follows:\n   a. Rs. [insert amount] (Rupees [insert amount in words] only) as earnest money upon the execution of this Agreement; and\n   b. The balance amount of Rs. [insert amount] (Rupees [insert amount in words] only) on or before the execution of the Sale Deed.\n\n3. Execution of Sale Deed: The Seller shall execute and register the Sale Deed in favor of the Buyer within [insert number] days from the date of receipt of the full consideration.\n\n4. Possession: The Seller shall hand over the peaceful, vacant, and physical possession of the Property to the Buyer at the time of the execution of the Sale Deed.\n\n5. Representations and Warranties: The Seller hereby represents and warrants that:\n   a. The Seller has clear and marketable title to the Property;\n   b. The Property is free from all encumbrances, charges, liens, and claims;\n   c. There are no pending legal proceedings or disputes with respect to the Property; and\n   d. The Seller has the right and authority to enter into this Agreement and sell the Property.\n\n6. Indemnification: The Seller shall indemnify and keep indemnified the Buyer against all losses, damages, costs, and expenses incurred by the Buyer due to any defect in the title of the Property or breach of any representations and warranties by the Seller.\n\n7. Governing Law and Jurisdiction: This Agreement shall be governed by and construed in accordance with the laws of India, and any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts at [insert place].\n\nSCHEDULE OF PROPERTY\n[Insert detailed description of the Property]\n\nIN WITNESS WHEREOF, the parties hereto have set their hands and seals on the day, month, and year first above written.\n\nSigned, sealed, and delivered by:\n\n[Insert name of the Seller]\n(Seller)\n\nIn the presence of:\n1. [Insert name and address of witness]\n2. [Insert name and address of witness]\n\nSigned, sealed, and delivered by:\n\n[Insert name of the Buyer]\n(Buyer)\n\nIn the presence of:\n1. [Insert name and address of witness]\n2. [Insert name and address of witness]',
        },
      ],
      model: "claude-3-opus-20240229",
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: {
        input_tokens: 39,
        output_tokens: 911,
      },
    };
    // console.log(msg); // Log the response from Anthropic SDK
    res.json(msg); // Send the response back to the client
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
