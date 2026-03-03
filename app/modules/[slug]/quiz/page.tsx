"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

type Quiz = {
  id: string
  question: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
}

export default function QuizPage() {

  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [moduleId,setModuleId] = useState<string | null>(null)
  const [quizzes,setQuizzes] = useState<Quiz[]>([])
  const [current,setCurrent] = useState(0)
  const [score,setScore] = useState(0)
  const [selected,setSelected] = useState<string | null>(null)

  const [playerName,setPlayerName] = useState("")
  const [started,setStarted] = useState(false)

  const [timeLeft,setTimeLeft] = useState(15)
  const correctSound = typeof Audio !== "undefined" ? new Audio("/sounds/correct.mp3") : null
  const wrongSound = typeof Audio !== "undefined" ? new Audio("/sounds/wrong.mp3") : null

  useEffect(()=>{
    initModule()
  },[])

  useEffect(()=>{

    if(!started) return

    if(timeLeft === 0){
      nextQuestion()
      return
    }

    const timer = setTimeout(()=>{
      setTimeLeft(timeLeft-1)
    },1000)

    return ()=>clearTimeout(timer)

  },[timeLeft,started])

  async function initModule(){

    const {data:module} = await supabase
      .from("modules")
      .select("id")
      .eq("slug",slug)
      .single()

    if(!module) return

    setModuleId(module.id)

    const {data} = await supabase
      .from("quizzes")
      .select("*")
      .eq("module_id",module.id)

    setQuizzes(data || [])
  }

  async function saveScore(){

    if(!moduleId) return

    const { error } = await supabase
      .from("leaderboard")
      .insert({
        player_name: playerName || "Pemain",
        module_id: moduleId,
        score: score,
        total_question: quizzes.length
      })

    if(error){
      console.error("Insert leaderboard error:", error)
    }

  }

  function handleAnswer(answer:string){

  if(selected) return

  setSelected(answer)

  const isCorrect =
    answer === quizzes[current].correct_answer.toUpperCase()

  if(isCorrect){
    setScore(prev=>prev+1)

    if(correctSound){
      correctSound.currentTime = 0
      correctSound.play()
    }

  } else {

    if(wrongSound){
      wrongSound.currentTime = 0
      wrongSound.play()
    }

  }

  setTimeout(()=>{
    nextQuestion()
  },900)

}

  async function nextQuestion(){

    if(current+1 < quizzes.length){

      setCurrent(prev=>prev+1)
      setSelected(null)
      setTimeLeft(15)

    }else{

      await saveScore()

      router.push(`/global-leaderboard?player/=${encodeURIComponent(playerName)}`)

    }
  }

  if(!started){

    return(

      <div className="min-h-screen flex items-center justify-center bg-[#F9F3E8]">

        <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-md w-full">

          <h1 className="text-2xl font-bold mb-4 text-[#4A2E16]">
            Quiz Budaya Nusantara
          </h1>

          <input
            type="text"
            placeholder="Masukkan Nama Anda"
            value={playerName}
            onChange={(e)=>setPlayerName(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full mb-4 text-gray-800"
          />

          <button
            onClick={()=>{

              if(!playerName.trim()){
                alert("Silakan masukkan nama terlebih dahulu")
                return
              }

              setStarted(true)

            }}
            className="px-6 py-3 bg-[#C9942A] text-white rounded-lg hover:scale-105 transition"
          >
            Mulai Quiz
          </button>

        </div>

      </div>
    )
  }

  if(quizzes.length === 0){

    return(
      <div className="min-h-screen flex items-center justify-center">
        Memuat soal...
      </div>
    )
  }

  const quiz = quizzes[current]

  const progress = ((current+1)/quizzes.length)*100

  return(

    <div className="min-h-screen bg-[#F9F3E8] flex items-center justify-center px-6">

      <div className="bg-white max-w-xl w-full p-10 rounded-2xl shadow-xl">

        <div className="flex justify-between items-center mb-6">

          <h1 className="font-bold text-[#4A2E16]">
            Quiz Budaya Nusantara
          </h1>

          <div className="text-red-600 font-bold">
            ⏱ {timeLeft}s
          </div>

        </div>

        <div className="mb-6">

          <div className="w-full bg-gray-200 rounded-full h-2">

            <div
              className="bg-gradient-to-r from-[#C9942A] to-[#B5451B] h-2 rounded-full"
              style={{width:`${progress}%`}}
            />

          </div>

        </div>

        <h2 className="text-xl font-semibold text-[#4A2E16] mb-6">
          {quiz.question}
        </h2>

        <div className="space-y-4">

          {["A","B","C","D"].map(letter=>{

            const option =
              quiz[`option_${letter.toLowerCase()}` as keyof Quiz] as string

            const isCorrect =
              letter === quiz.correct_answer.toUpperCase()

            const isSelected =
              selected === letter

            let style =
              "border border-gray-300 bg-white text-gray-800 hover:bg-[#FFF7E7] hover:border-[#C9942A]"

            if(selected){

              if(isCorrect){
                style="border-green-500 bg-green-100 text-green-900 font-semibold"
              }

              else if(isSelected){
                style="border-red-500 bg-red-100 text-red-900 font-semibold"
              }

              else{
                style="border-gray-200 bg-gray-100 text-gray-700"
              }

            }

            return(

              <button
                key={letter}
                onClick={()=>handleAnswer(letter)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition ${style}`}
              >

                <div className="w-8 h-8 rounded-full bg-[#F4EFE7] flex items-center justify-center font-bold text-[#6B3F1F]">
                  {letter}
                </div>

                <span className="flex-1 text-left">
                  {option}
                </span>

              </button>

            )

          })}

        </div>

        <div className="mt-6 text-center text-sm text-gray-700">
          Soal {current+1} dari {quizzes.length}
        </div>

      </div>

    </div>
  )
}