import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navabr/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";
import Script from "next/script";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

import StoreProvider from "./Redux/StoreProvider";

import Provider from "./Provider";
import Footer from "./components/footer/Footer";
import SearchModal from "./components/modals/SearchModal";
import NavbarSwitcher from "./components/NavbarSwitcher";
import isAdmin from "./actions/isAdmin";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Voyage Stay",
  description: "Your Gateway to Exceptional Home stays and Experiences",
};

export default async function RootLayout({ children }) {
  const Admin = await isAdmin();

  return (
    <StoreProvider>
      <Provider>
        <html lang="en">
          <body className={font.className}>
            <ToasterProvider />
            <RentModal />
            <SearchModal />
            <LoginModal />
            <RegisterModal />
            {/* <Navbar /> */}
            <NavbarSwitcher Admin={Admin} />
            <div className="pb-10 pt-28">{children}</div>
            <Footer />
          </body>
        </html>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </Provider>
    </StoreProvider>
  );
}
