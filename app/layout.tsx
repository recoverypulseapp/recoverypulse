import "./globals.css";
import Shell from "./Shell";

export const metadata = {
  title: "RecoveryPulse",
  description: "Elite injury recovery & performance tracking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-black text-white min-h-screen">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
