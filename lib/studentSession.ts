export function getStudentSession(){

  if(typeof window === "undefined") return null

  const data = localStorage.getItem("student")

  if(!data) return null

  try{
    return JSON.parse(data)
  }catch{
    return null
  }

}