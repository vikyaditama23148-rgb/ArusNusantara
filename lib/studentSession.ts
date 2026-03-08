export function getStudentSession() {
  const student = localStorage.getItem("student")
  if (!student) return null
  return JSON.parse(student)
}