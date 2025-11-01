import kmbdImg from "/assets/kmbdd.png"
import himtiImg from "/assets/himti.png"
import aslabImg from "/assets/aslab.jpg"
import mentorImg from "/assets/mentor.jpg"
import tpImg from "/assets/tp.jpg"

import canvaIcon from "/assets/tools/canva.png";
import canvaHoverIcon from "/assets/tools/canva-hover.png";
import cIcon from "/assets/tools/c.png";
import cHoverIcon from "/assets/tools/c-hover.png";
import mysqlIcon from "/assets/tools/mysql.png";
import mysqlHoverIcon from "/assets/tools/mysql-hover.png";
import htmlIcon from "/assets/tools/html.png";
import htmlHoverIcon from "/assets/tools/html-hover.png";
import cssIcon from "/assets/tools/css.png";
import cssHoverIcon from "/assets/tools/css-hover.png";
import jsIcon from "/assets/tools/js.png";
import jsHoverIcon from "/assets/tools/js-hover.png";
import pythonIcon from "/assets/tools/python.png";
import pythonHoverIcon from "/assets/tools/python-hover.png";
import javaIcon from "/assets/tools/java.png";
import javaHoverIcon from "/assets/tools/java-hover.png";

import waImg from "/assets/contact-buttons/whatsapp.png"
import waHover from "/assets/contact-buttons/whatsapp-hover.png"
import githubImg from "/assets/contact-buttons/github.png"
import githubHover from "/assets/contact-buttons/github-hover.png"
import linkedinImg from "/assets/contact-buttons/linkedin.png"
import linkedinHover from "/assets/contact-buttons/linkedin-hover.png"
import emailImg from "/assets/contact-buttons/email.png"
import emailHover from "/assets/contact-buttons/email-hoverr.png"

export const aboutData = {
  name: "Selvia Marsya",
  description:
    "Hello! My name is Selvia Marsya, a Computer Science student at BINUS University with a strong interest in technology, design, and collaboration. Through my projects, i hope to convey most clearly what i can contribute to projects and partners ^ o ^ ~~",
  education: [
    {
      school: "Penabur Harapan Indah",
      year:"(2020-2023)",
      detail: "Science major",
    },
    {
      school: "University of Bina Nusantara",
      year:"(2023 - Now)",
      detail: "Bachelor Degree of Computer Science • 3.53 (Up to 6 semester)",
    },
  ],
  organizations: [
    {
      title: "Activist, Supervisor",
      org: "KMBD (Feb 2023 - Now)",
      img: kmbdImg,
      detail: "Active in Buddhist student community, organizing events and promoting cultural awareness.",
    },
    {
      title: "Activist",
      org: "HIMTI (Feb 2023 - Feb 2025)",
      img: himtiImg,
      detail: "Participated in informatics student association activities and technical workshops.",
    },
  ],
  workExperience: [
    {
      title: "Computer Laboratory Assistant",
      org: "Binus University (Aug 2024 - Now)",
      img: aslabImg,
      detail: "Currently assist students in lab sessions, create exam questions, supervise tests, and help improve their understanding of programming and system concepts.",
    },
      {
      title: "Scholarship Mentoring",
      org: "Binus University (Sept 2024 - January 2025)",
      img: mentorImg,
      detail: "Guided mentees through structured study sessions to help them improve their academic performance.",
    },
      {
      title: "Promotion Team",
      org: "Binus University (March 2025 - Now)",
      img: tpImg,
      detail: "A student ambassador to promote BINUS programs to high school students through delivered presentation and followed up with prospective student",
    },
  ],
  softwareSkills: [
    { name: "Canva", icon: canvaIcon, hoverIcon: canvaHoverIcon },
    { name: "C", icon: cIcon, hoverIcon: cHoverIcon },
    { name: "MySQL", icon: mysqlIcon, hoverIcon: mysqlHoverIcon },
    { name: "HTML", icon: htmlIcon, hoverIcon: htmlHoverIcon },
    { name: "CSS", icon: cssIcon, hoverIcon: cssHoverIcon },
    { name: "JavaScript", icon: jsIcon, hoverIcon: jsHoverIcon },
    { name: "Python", icon: pythonIcon, hoverIcon: pythonHoverIcon },
    { name: "Java", icon: javaIcon, hoverIcon: javaHoverIcon },
  ],
  contact: [
    {
      icon: waImg,
      hoverIcon: waHover,
      text: "+62 812 9615 5369",
      link: "https://wa.me/6281296155369",
    },
    {
      icon: emailImg,
      hoverIcon: emailHover,
      text: "selviam2017@gmail.com",
      link: "mailto:selviam2017@gmail.com",
    },
    {
      icon: githubImg,
      hoverIcon: githubHover,
      text: "selvia-marsya",
      link: "https://github.com/Selviamrsya",
    },
    {
      icon: linkedinImg,
      hoverIcon: linkedinHover,
      text: "selvia-marsya",
      link: "https://www.linkedin.com/in/selvia-marsya-9a2b692b6/",
    },

  ],
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
};
