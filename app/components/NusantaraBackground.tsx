export default function NusantaraBackground() {
  return (
    <div className="relative">

      {/* Background Batik Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/batik-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

    </div>
  )
}