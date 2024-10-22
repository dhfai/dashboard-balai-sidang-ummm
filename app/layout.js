import localFont from "next/font/local";
import "@/style/global/globals.scss";
import styles from "@/style/module/layout.module.scss";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.main}>
                <Navbar />
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}
