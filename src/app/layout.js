import { Sidebar } from "@/components/layout/Sidebar";
import {MainContainer} from "@/components/layout/MainContainer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
         {/* Contenedor de la app */}
          <div className="root-container grid grid-cols-3 gap-4">
          {/* Contenedor del Sidebar */}
          <div className="sidebar-container col-span-1">
            <Sidebar />
          </div>

           {/* Contenedor del main */}
          <div className="main-container  col-span-2">
            <MainContainer >
            <main>{children}</main>
            </MainContainer>
          </div>
          </div>
      </body>
    </html>
  );
}
