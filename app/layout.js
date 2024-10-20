import localFont from "next/font/local";
import "@/style/global/globals.scss";

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat-regular",
  weight: "100 900",
});
const montserratBold = localFont({
  src: "./fonts/Montserrat-Bold.ttf",
  variable: "--font-montserrat-bold",
  weight: "100 900",
});

export const metadata = {
  title: "Admin Balai Sidang Unismuh",
  description: "Admin Balai Sidang Unismuh Makassar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserratRegular.variable} ${montserratBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
