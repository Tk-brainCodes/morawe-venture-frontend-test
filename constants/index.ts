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

const jobList = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UI/UX Designer",
  "Marketing Specialist",
  "Business Analyst",
  "Graphic Designer",
  "HR Manager",
];

const nameList = [
  "Martina",
  "Nils",
  "Ralph",
  "Nina",
  "Lucas",
  "Johanna",
  "Maximilian",
  "Sophie",
  "Lena",
  "David",
];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleArray(nameList);

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
    job: jobList[Math.floor(Math.random() * jobList.length)],
    contact: "Abitur",
    avatar: Profile1,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
  {
    name: "Nils",
    address: "63189, Schmitten im Taunus",
    job: jobList[Math.floor(Math.random() * jobList.length)],
    contact: "Fachabitur",
    avatar: Profile2,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
  {
    name: "Ralph",
    address: "60479, Glashütten im Taunus",
    job: jobList[Math.floor(Math.random() * jobList.length)],
    contact: "Realabschluss",
    avatar: Profile3,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
  {
    name: "Nina",
    address: "60342, Kelkheim am Taunus",
    job: jobList[Math.floor(Math.random() * jobList.length)],
    contact: "Abitur",
    avatar: Profile4,
    description:
      "Ich habe meine Leidenschaft für die Entwicklung von Strategien im Bereich der Flach und Spitzdach, während meiner schulischen praktischen Erfahrungen entwickelt.",
  },
];
