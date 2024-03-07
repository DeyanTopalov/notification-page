import { plusJakartaSans } from "./ui/fonts";
import "@styles/globals.css";

export const metadata = {
  title: "Notification Page",
  description: "Frontend Mentor challenge to build a Notification Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${plusJakartaSans.className}max-w-[90rem] px-4 md:px-6 text-center antialiased`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
