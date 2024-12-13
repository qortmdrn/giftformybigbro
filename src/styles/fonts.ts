import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

export const NotoSans = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const NotoSerif = Noto_Serif_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
