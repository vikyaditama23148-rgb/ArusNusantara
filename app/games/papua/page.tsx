import WordSearchGame from "../word-search/WordSearchGame"

const words = [
"CENDERAWASIH",
"ASMAT",
"HONAI",
"NOKEN",
"BIAK"
]

export default function Page(){
  return <WordSearchGame words={words}/>
}