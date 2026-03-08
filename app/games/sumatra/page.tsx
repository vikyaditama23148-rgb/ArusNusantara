import WordSearchGame from "../word-search/WordSearchGame"

const words = [
"RENDANG",
"SONGKET",
"ACEH",
"DANAU",
"MELAYU"
]

export default function Page(){
  return <WordSearchGame words={words}/>
}