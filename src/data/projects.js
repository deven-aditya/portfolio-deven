import {
    SiReact,
    SiLaravel,
    SiFlutter,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiMysql,
    SiFirebase,
    SiSupabase,
    SiFigma,
    SiXampp,
} from "react-icons/si";

import {
    FaJava,
} from "react-icons/fa6";

import {
    TbLetterC,
    TbBrandAdobeIllustrator,
} from "react-icons/tb";

import sonaImage from "../assets/projects/sona.png";
import sonaLogo from "../assets/projects/sona_logo.png";
import keretaImage from "../assets/projects/kereta.png";
import keretaLogo from "../assets/projects/kereta_logo.png";
import laundryImage from "../assets/projects/laundry.png";
import laundryLogo from "../assets/projects/laundry_logo.png";
import ppspImage from "../assets/projects/ppsp.png";
import ppspLogo from "../assets/projects/ppsp_logo.png";
import literaImage from "../assets/projects/litera.png";
import literaLogo from "../assets/projects/litera_logo.png";

import asdosImage from "../assets/exp/asdos.png";
import tentorImage from "../assets/exp/tentor.png";
import himaImage from "../assets/exp/hima.png";
import inisiasiImage from "../assets/exp/inisiasi.png";

export const skills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },

    { name: "Laravel", icon: SiLaravel },

    { name: "Flutter", icon: SiFlutter },

    { name: "C", icon: TbLetterC },
    { name: "Java", icon: FaJava },

    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },

    { name: "XAMPP", icon: SiXampp },
    { name: "Figma", icon: SiFigma },
    { name: "Adobe Illustrator", icon: TbBrandAdobeIllustrator },
];

export const projects = [
    {
        logo: sonaLogo,
        year: "2026",
        image: sonaImage,
        overview:
            "A hotel booking application where I contributed to implementing authentication features, enabling secure user registration functionality, and creating animations.",
        technologies: [
            "Flutter",
            "Laravel",
            "Supabase",
        ],
        github: "https://github.com/vrnnthaa/1_PBP_SONA.git",
    },
    {
        logo: ppspLogo,
        year: "2026",
        image: ppspImage,
        overview:
            "A financial management system for planning and evaluating school budgets (RKT). Contributed to backend development of the RKT evaluation module.",
        technologies: [
            "React",
            "Laravel",
            "MySQL",
        ],
        website: "https://bodavhs.uajy.web.id",
        github: "https://gitlab.uajy.ac.id/230712518/frontend-keuangan",
    },
    {
        logo: literaLogo,
        year: "2025",
        image: literaImage,
        overview:
            "A digital library system for managing books, borrowing, and returns. Contributed as a full-stack developer by building both frontend and backend features.",
        technologies: [
            "React",
            "Laravel",
            "MySQL",
        ],
        github: "https://github.com/SaskiaPippiRK/Frontend_Perpus_Litera.git",
    },
    {
        logo: laundryLogo,
        year: "2025",
        image: laundryImage,
        overview:
            "A web-based application for managing laundry orders, customers, and transactions. Contributed as a full-stack developer, handling both the frontend and backend development.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
        ],
        github: "https://github.com/deven-aditya/WASHY.git",
    },
    {
        logo: keretaLogo,
        year: "2025",
        image: keretaImage,
        overview:
            "A desktop application for managing railway ticket reservations and passenger data. Contributed to frontend development and MySQL database integration using Java.",
        technologies: [
            "Java",
            "MySQL",
        ],
    }, 
]

export const experiences = [
    {
        image: asdosImage,
        title: "Assistant Lecturer for Data Structures",
        company: "Universitas Atma Jaya Yogyakarta",
        description: "Assisted 4 classes during lab sessions by providing guidance on programming tasks and supported the evaluation and grading of practical assignments.",
        date: "Aug 2025 - Dec 2025",
    },
    {
        image: tentorImage,
        title: "Programming Study Group Mentor",
        company: "Universitas Atma Jaya Yogyakarta",
        description: "Mentored 3 students in understanding programming fundamentals including variables, loops, and functions.",
        date: "Aug 2024 - June 2025",
    },
    {
        image: himaImage,
        title: "Communication and Information Division Coordinator",
        company: "HIMAFORKA",
        description: "Led a team of 10 members in managing social media (Instagram and Youtube) and producing digital content including graphic design materials.",
        date: "Sep 2024 - Sep 2025",
    },
    {
        image: inisiasiImage,
        title: "Multimedia and Documentation Division Coordinator",
        company: "INISIASI FTI UAJY 2025",
        description: "Directed a team of 9 members to execute documentation strategy and multimedia production including posters, reels, and banners for event promotion.",
        date: "Jul 2025 - Sep 2025",
    },
]