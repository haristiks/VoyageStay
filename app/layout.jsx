import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navabr/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";


import StoreProvider from "./Redux/StoreProvider";




import Provider from "./Provider";
import Footer from "./components/footer/Footer";


const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Voyage Stay",
  description: "Your Gateway to Exceptional Home stays and Experiences",
};

export default async function RootLayout({ children }) {

  return (
    <StoreProvider>
      <Provider>
        <html lang="en">
          <body className={font.className}>
            <ToasterProvider />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Navbar />
            <div className="pb-10 pt-28">{children}</div>
            <Footer/>
          </body>
        </html>
      </Provider>
    </StoreProvider>
  );
}
