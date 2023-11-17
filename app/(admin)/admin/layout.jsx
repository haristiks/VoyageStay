// import { Nunito } from "next/font/google";
// import "../../globals.css";

// const font = Nunito({
//   subsets: ["latin"],
// });

export default function Layout({ children }) {
  return (
    // <html lang="en">
    //   <body className={font.className}>
        <main>{children}</main>
    //   </body>
    // </html>
  );
}
