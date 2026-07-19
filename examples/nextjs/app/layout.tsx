import "@navital/nucleus-css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Nucleus CSS + Next.js",
  description: "Styled with Nucleus CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
