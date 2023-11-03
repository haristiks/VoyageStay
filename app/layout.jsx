import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navabr/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

import StoreProvider from "./Redux/StoreProvider";

import getCurrentUser from "@/app/actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Voyage Stay",
  description: "Your Gateway to Exceptional Home stays and Experiences",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <StoreProvider>
      <html lang="en">
        <body className={font.className}>
          <ToasterProvider />
          <RentModal currentUser={currentUser} />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
