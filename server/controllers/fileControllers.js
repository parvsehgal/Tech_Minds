const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function getAns() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "how to dispose of this type of waste";

  const imageParts = [
    fileToGenerativePart("image1.png", "image/png"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

exports.classifier = async (req, res) => {
  try {
    const file = req.files.waste;
    const PATH =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    file.mv(PATH, (err) => {
      console.log(err);
    });
    res.status(200).json("File uploaded sucessfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("error uploading file");
  }
}
