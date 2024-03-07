import { plusJakartaSans } from "./ui/fonts";
import "@styles/globals.css";

export const metadata = {
  title: "Notification Page",
  description: "Frontend Mentor challenge to build a Notification Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-clr-gray-100 grid h-svh w-svw place-items-center overflow-hidden md:h-screen md:w-full">
        <main
          className={`${plusJakartaSans.className}max-w-[90rem] px-4 text-center text-base antialiased md:px-6`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
