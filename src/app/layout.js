import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className="app-shell">
            <Sidebar />
            <main>{children}</main>
          </div>
      </body>
    </html>
  );
}
