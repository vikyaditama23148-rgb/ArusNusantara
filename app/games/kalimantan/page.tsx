import WordSearchGame from "../word-search/WordSearchGame"

const words = [
"DAYAK",
"MANDau",
"ENGGANG",
"BETANG",
"KAPUAS"
]

export default function Page(){
  return <WordSearchGame words={words}/>
}