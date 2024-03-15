const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function wasteQues(ques) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "i have a waste management ques" + ques
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text)
  return text
}

exports.assistenHandler = async(req,res)=>{
  try{
    const {ques} = req.body;
    console.log(ques)
    const answer = await wasteQues(ques)
    res.json({ans:answer})
  }catch(err){
    console.log(err.message)
  }
}
