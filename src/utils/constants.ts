export const getStaticURL = () =>"https://greensoftware-seven.vercel.app"
export const IMAGES_URL = {
  BACKGROUNG_VIDEO_URL:
    "https://firebasestorage.googleapis.com/v0/b/greensoftware-49e6a.appspot.com/o/video-bg.mp4?alt=media&token=472ce7bd-824a-49d3-8233-c2d5fbf4dadc&_gl=1*13crt7z*_ga*NzM5NTQ4NzYuMTY5MzE5MjE0OA..*_ga_CW55HF8NVT*MTY5ODA1Njg3MS42MC4xLjE2OTgwNTc0MzEuNy4wLjA.",
  GIF_URL:
    "https://firebasestorage.googleapis.com/v0/b/greensoftware-49e6a.appspot.com/o/logo-gif.gif?alt=media&token=2bbdeecb-f129-464a-9e0e-5929b6946424&_gl=1*1vtjsuv*_ga*NzM5NTQ4NzYuMTY5MzE5MjE0OA..*_ga_CW55HF8NVT*MTY5ODA1Njg3MS42MC4xLjE2OTgwNTc1MzIuMzYuMC4w",
  LOGO_URL:
    "https://firebasestorage.googleapis.com/v0/b/greensoftware-49e6a.appspot.com/o/logo.png?alt=media&token=c2853fe5-1ffc-4501-b249-278d07f49db8&_gl=1*rfwneg*_ga*NzM5NTQ4NzYuMTY5MzE5MjE0OA..*_ga_CW55HF8NVT*MTY5ODA1Njg3MS42MC4xLjE2OTgwNTc5NDUuMzEuMC4w",
  BANNER_URL:
    "https://firebasestorage.googleapis.com/v0/b/greensoftware-49e6a.appspot.com/o/building.png?alt=media&token=ac4857fa-e79e-4d60-9409-ad8d833ecf45&_gl=1*11yzsf2*_ga*NzM5NTQ4NzYuMTY5MzE5MjE0OA..*_ga_CW55HF8NVT*MTY5ODA1Njg3MS42MC4xLjE2OTgwNTc1NTYuMTIuMC4w",
};

export const OptionsLanguage = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "VietNam",
    value: "vi",
  },
];
export const FooterData = [
  {
    page: "about",
    title: "title",
    itemFooter: [
      {
        label: "whitePaperEN",
        link: "/coming-soon",
      },
      {
        label: "whitePaperTaiwan",
        link: "/coming-soon",
      },
      {
        label: "contact",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "fAQ",
    title: "title",
    itemFooter: [
      {
        label: "feedback",
        link: "/coming-soon",
      },
      {
        label: "termsAndConditions",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "social",
    title: "title",
    itemFooter: [],
  },
];
export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}
export const DEFAULT_AUTOCLOSE_TOAST = 2000;

export const optionFilterScan = [
  {
    label: "All filter",
    value: "all",
  },
  {
    label: "Address",
    value: "address",
  },
  {
    label: "Tokens",
    value: "tokens",
  },
  {
    label: "Name tags",
    value: "name-tags",
  },
  {
    label: "Labels",
    value: "labels",
  },
  {
    label: "Websites",
    value: "websites",
  },
];

