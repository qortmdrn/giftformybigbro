import StyledComponentsRegistry from "@/styles/registry";
import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(`https://events.sdg.com/discharge`),
  title: "GOODBYE Donggeun",
  description: "Discharge for WEMADE Service",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "GOODBYE Donggeun",
    description: "Discharge for WEMADE Service",
    images: "/images/og-image.webp",
  },
  icons: {
    icon: `/favicon.ico`,
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
