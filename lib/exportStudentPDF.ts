import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

type Student = {
  username: string
  password: string
  name: string
  school: string
  class: string
}

export function exportStudentPDF(students: Student[]) {

  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text("Daftar Akun Siswa ArusNusantara", 14, 20)

  const tableData = students.map((s, i) => [
    i + 1,
    s.name,
    s.username,
    s.password,
    s.school,
    s.class
  ])

  autoTable(doc, {
    startY: 30,
    head: [["No", "Nama", "Username", "Password", "Sekolah", "Kelas"]],
    body: tableData
  })

  doc.save("akun-siswa-arusnusantara.pdf")
}