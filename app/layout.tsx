import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArusNusantara",
  description: "Platform edukasi budaya Indonesia dengan modul dan quiz interaktif.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* MAIN CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="relative mt-24 bg-[#F4EFE7] border-t border-[#E5D8C9]">

          {/* BATIK ORNAMENT LINE */}
          <div className="absolute top-0 left-0 w-full h-3 bg-[url('/batik-pattern.png')] bg-repeat opacity-40"></div>

          <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">

            {/* GRID LAYOUT */}
            <div className="grid md:grid-cols-3 gap-10 items-center">

              {/* BRAND */}
              <div>
                <h2 className="text-2xl font-bold text-[#4A2E16]">
                  ArusNusantara
                </h2>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Platform pembelajaran budaya Indonesia yang mengajak generasi
                  muda menjelajahi kekayaan tradisi Nusantara melalui pengalaman
                  belajar yang interaktif dan menyenangkan.
                </p>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="text-center">

                <h3 className="font-semibold text-[#6B3F1F] mb-4">
                  Terhubung dengan Pembuat
                </h3>

                <div className="flex justify-center gap-6">

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/vkyadtm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl bg-white shadow-sm hover:shadow-lg transition hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6 text-[#6B3F1F] group-hover:text-[#C9942A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 5a5 5 0 100 10 5 5 0 000-10zm0 2.2A2.8 2.8 0 119.2 12 2.8 2.8 0 0112 9.2zm5.4-.9a1.2 1.2 0 11-1.2-1.2 1.2 1.2 0 011.2 1.2z"/>
                    </svg>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:vikyaditama23148@gmail.com"
                    className="group p-3 rounded-xl bg-white shadow-sm hover:shadow-lg transition hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6 text-[#6B3F1F] group-hover:text-[#C9942A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 2.24l-7.38 6.46a1 1 0 01-1.24 0L4 8.24V18h16V8.24z"/>
                    </svg>
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl bg-white shadow-sm hover:shadow-lg transition hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6 text-[#6B3F1F] group-hover:text-[#C9942A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5a2.49 2.49 0 11-.01 4.98 2.49 2.49 0 01.01-4.98zM3 9h4v12H3zm7 0h3.8v1.71h.05a4.16 4.16 0 013.74-2.06c4 0 4.74 2.63 4.74 6.05V21h-4v-5.2c0-1.24-.02-2.83-1.72-2.83-1.72 0-1.98 1.34-1.98 2.74V21h-4z"/>
                    </svg>
                  </a>

                  {/* WEBSITE */}
                  <a
                    href="https://vikyaditama23148-rgb.github.io/Profesional-Profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl bg-white shadow-sm hover:shadow-lg transition hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6 text-[#6B3F1F] group-hover:text-[#C9942A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 6h-3.2a15.8 15.8 0 00-1.1-3A8.05 8.05 0 0118.9 8zM12 4c.8 1.2 1.5 2.7 2 4H10c.5-1.3 1.2-2.8 2-4zM4.1 14h3.2a15.8 15.8 0 001.1 3A8.05 8.05 0 014.1 14zM4.1 8A8.05 8.05 0 018.4 5a15.8 15.8 0 00-1.1 3H4.1zm7.9 12c-.8-1.2-1.5-2.7-2-4h4c-.5 1.3-1.2 2.8-2 4zm3.6-3a15.8 15.8 0 001.1-3h3.2a8.05 8.05 0 01-4.3 3z"/>
                    </svg>
                  </a>

                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Viky Aditama
                </p>
              </div>

              {/* EDUCATIONAL MESSAGE */}
              <div className="text-center md:text-right">
                <h3 className="font-semibold text-[#6B3F1F] mb-3">
                  Misi ArusNusantara
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Menghubungkan generasi muda dengan kekayaan budaya Indonesia
                  melalui teknologi pembelajaran digital yang modern.
                </p>
              </div>

            </div>

            {/* COPYRIGHT */}
            <div className="text-center text-xs text-gray-500 mt-12">
              © {new Date().getFullYear()} ArusNusantara — Platform Edukasi Budaya Indonesia
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}