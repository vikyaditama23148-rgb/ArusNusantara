import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  try {

    const { prompt } = await req.json()

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    })

    const result = await model.generateContent(prompt)

    const text = result.response.text()

    return Response.json({ text })

  } catch (error) {

    console.error("AI Error:", error)

    return Response.json({
      text: "AI gagal menjawab"
    })
  }
}