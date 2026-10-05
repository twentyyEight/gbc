import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Grupo Buzos Comerciales",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
