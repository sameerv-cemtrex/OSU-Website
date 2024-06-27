import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "./fonts/Aeonik/Aeonik-Air.ttf",
      style: "normal",
      weight: "100",
    },
    {
      path: "./fonts/Aeonik/Aeonik-AirItalic.ttf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./fonts/Aeonik/Aeonik-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/Aeonik/Aeonik-LightItalic.ttf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./fonts/Aeonik/Aeonik-Thin.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./fonts/Aeonik/Aeonik-ThinItalic.ttf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./fonts/Aeonik/Aeonik-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Aeonik/Aeonik-RegularItalic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./fonts/Aeonik/Aeonik-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/Aeonik/Aeonik-MediumItalic.ttf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./fonts/Aeonik/Aeonik-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/Aeonik/Aeonik-BoldItalic.ttf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./fonts/Aeonik/Aeonik-Black.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./fonts/Aeonik/Aeonik-BlackItalic.ttf",
      style: "italic",
      weight: "800",
    },
  ],
  display: "swap",
  variable: "--aeonik",
});

export const grozenMedical = localFont({
  src: [
    {
      path: "./fonts/Grozen_Medical/GROZEN-MEDICAL-Light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/Grozen_Medical/GROZEN-MEDICAL-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Grozen_Medical/GROZEN-MEDICAL-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/Grozen_Medical/GROZEN-MEDICAL-SemiBold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/Grozen_Medical/GROZEN-MEDICAL-Bold.otf",
      style: "normal",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--grozen-medical",
});
