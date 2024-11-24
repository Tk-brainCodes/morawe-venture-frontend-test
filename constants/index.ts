import {
  Dashboard,
  ResumeIcon,
  JobIcon,
  CompanyIcon,
  Padlock,
  Profile1,
  Profile2,
  Profile3,
  Profile4,
} from "@/assets";

export const SideBarItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
  },
  {
    title: "Lebenslauf erstellen",
    path: "",
    icon: ResumeIcon,
  },
  {
    title: "Unternehmen",
    path: "unternehmen",
    icon: CompanyIcon,
    dropdownItems: [
      {
        id: 0,
        title: "Suche",
        path: "",
      },
      {
        id: 1,
        title: "Favoriten",
        path: "",
      },
      {
        id: 2,
        title: "Bewerbungen",
        path: "",
      },
    ],
  },
  {
    title: "Stellenanzeigen",
    path: "",
    icon: JobIcon,
  },
  {
    title: "Mein Profil",
    path: "",
    icon: Padlock,
  },
];

export const cardDataProps = [
  {
    name: "Martina",
    address: "60462, Königstein im Taunus",
    job: "Handwerk",
    contact: "Abitur",
    avatar: Profile1,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
  {
    name: "Nils",
    address: "63189, Schmitten im Taunus",
    job: "Handwerk",
    contact: "Fachabitur",
    avatar: Profile2,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
  {
    name: "Ralph",
    address: "60479, Glashütten im Taunus",
    job: "Handwerk",
    contact: "Realabschluss",
    avatar: Profile3,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
  {
    name: "Nina",
    address: "60342, Kelkheim am Taunus",
    job: "Handwerk",
    contact: "Abitur",
    avatar: Profile4,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
];
