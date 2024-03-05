import profilepicture from "../img/me.jpeg";
/*WEB*/
import htmlicon from "../icons/web/htmlicon.svg";
import cssicon from "../icons/web/cssicon.svg";
import javascripticon from "../icons/web/javascripticon.svg";
import reacticon from "../icons/web/reacticon.svg";
import typescripticon from "../icons/web/typescripticon.svg";
import nextjsicon from "../icons/web/nextjsicon.svg";
import nextjsiconwhite from "../icons/web/nextjsiconwhite.svg";
import nodejsicon from "../icons/web/nodejsicon.svg";
import tailwindcssicon from "../icons/web/tailwindicon.svg";
import mongodbicon from "../icons/web/mongodbicon.svg";
import vuejsicon from "../icons/web/vueicon.svg";
import expressicon from "../icons/web/expressicon.svg";
import expressiconwhite from "../icons/web/expressiconwhite.svg";
import php from "../icons/web/php.svg";
import mysql from "../icons/web/mysql.svg";
import laravel from "../icons/web/laravel.svg";
/*Design */
import figmaicon from "../icons/design/figmaicon.svg";
import canvaicon from "../icons/design/canvaicon.svg";
/*CMS */
import wordpressicon from "../icons/cms/wordpressicon.svg";
import shopifyicon from "../icons/cms/shopifyicon.svg";
/*OnBoard */
import csharpicon from "../icons/embarque/csharp.svg";
import cicon from "../icons/embarque/c.svg";
import cppicon from "../icons/embarque/cpp.svg";
import python from "../icons/embarque/python.svg";
/*Other */
import git from "../icons/other/git.svg";
import docker from "../icons/other/docker.svg";
/* WorkAT */
import solmani from "../icons/workat/solmani_logo.png"

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail, FiCodepen } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import CV from "../../components/CV";

export const headerIntroData = {
  title: {
    fr: "Hey, je m'appelle Nathan",
    en: "Hi, I'm Nathan",
  },
  subtitle: "Fullstack Developer ",
  description: {
    fr: " J'ai découvert l'informatique lors d'un stage à l'âge de 15 ans et j'ai tout de suite aimé la créativité et la liberté que permet le développement informatique. Après 4 ans à l'ETML, où j'ai obtenu un CFC en informatique et une maturité professionnelle, je suis actuellement en train de faire mon bachelor en sécurité informatique à la HEIG-VD.",
    en: "I discovered IT on a work placement when I was 15 and I immediately loved the creativity and freedom that IT development allows. After 4 years at the ETML, from which I graduated with a CFC in computer science and a professional degree, I'm currently doing my bachelor's degree in computer security at the HEIG-VD.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contcez-moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  /*{
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  }*/

] as const;

export const liveTickerData = {
  content: {
    fr: "D'autre projets sur Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "PHP",
        hash: "#php",
        icon: php,
        color: "#777bb3",
      },
      {
        title: "Mysql",
        hash: "#Mysql",
        icon: mysql,
        color: "#f8971c",
      },
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: laravel,
        color: "#ff2c1f",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataOther = [
  {
    skillsTitle: "Other",
    skills: [
      { title: "Git", hash: "#git", icon: git, color: "#ed503a" },
      { title: "Docker", hash: "#Docker", icon: docker, color: "#0096e6" },
    ],
  },
] as const;

export const skillsDataEmbarque = [
  {
    skillsTitle: "OnBoard",
    skills: [
      { title: "C", hash: "#C", icon: cicon, color: "#659ad3" },
      { title: "C++", hash: "#C++", icon: cppicon, color: "#00599C" },
      { title: "C#", hash: "#C#", icon: csharpicon, color: "#995195" },
      { title: "Python", hash: "#Python", icon: python, color: "#fccf2f" },

    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
    ],
  },
] as const;

export const navLinks = [
  { fr: "Home", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "Plus sur moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "Imprint", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { fr: "Privacy", en: "Privacy", hash: "#privacy", data: <Privacy /> },
  { fr: "CV", en: "CV", hash: "#CV", data: <CV /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:nathan@fullann.ch",
  text: "nathan@fullann.ch",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/nathan-f%C3%BCllemann-641b32232/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Fullann",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:nathan@fullann.ch",
    icon: FiMail,
    altimgname: "mail",
  },
  {
    link: "https://codepen.io/Fullann",
    icon: FiCodepen,
    altimgname: "codepen",
  },
] as const;

export const quotesData = [
  {
    fr: `"Chaque ligne de code est une opportunité d'apprentissage, chaque bug est une leçon, et chaque nouvelle technologie est une porte ouverte vers l'avenir."`,
    en: `"Every line of code is an opportunity for learning, every bug is a lesson, and every new technology is a door open to the future."`,
    author: "Steve Jobs",
  },
  {
    fr: `"Le web est comme une toile et le code est la peinture. Crée ton chef-d'œuvre."`,
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const recomendationData = {
  title: "Recommandations",
  title_EN: "Recomendations",
  description: "Ce qu'on a dit de moi",
  description_EN: "What they said about me",
  recomendation_FR: [
    {
      title: "Angelica Rosso",
      subtitle: "Directrice Recherche et Developpement",
      description:
        "Organisé, concencieux, ponctuel et professionnel, Monsieur Füllemann, nous a fait une bonne impression. Il s'est aquitté des tâches confiées à notre entière satisfaction.",
      icon: solmani
      ,
    },
  ],
  recomendation_EN: [
    {
      title: "Angelica Rosso",
      subtitle: "Director of Research and Development",
      description:
        "Organised, conscientious, punctual and professional, Mr Füllemann made a good impression on us. He carried out the tasks entrusted to him to our complete satisfaction.",
      icon: solmani
      ,
    },
  ],
} as const;
export const aboutMeData = {
  title: "A propos de moi",
  title_EN: "About me",
  description: "Quelque ligne sur moi",
  description_EN: "A few code snippets about me",
  paragraphs_FR: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: FiCodepen
      ,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: FiCodepen,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: FiCodepen,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: FiCodepen,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: FiCodepen,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: FiCodepen,
    },
  ],
};

export const contactData = {
  title: {
    fr: "Contactez-moi",
    en: "Contact",
  },
  description: {
    fr: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    fr: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    fr: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
