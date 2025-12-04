import React from "react";
import styles from "./WorkGrid.module.css";
import tnjImg from "../../assets/OurWorks/tnj.jpeg";
import kanchi from "../../assets/OurWorks/kanchipuram.jpeg"
import karaikudi from "../../assets/OurWorks/karaikudi.jpeg"
import ChidamImg from "../../assets/OurWorks/chidambarm.jpeg"
import DindigalImg from "../../assets/OurWorks/Dindugal.jpeg"
import PotheriImg from "../../assets/OurWorks/Potheri.jpeg"
import DharmaImg from "../../assets/OurWorks/Dharmapuri.jpeg"
import KallakurichiImg from "../../assets/OurWorks/Kallakurichi.jpeg"
import CumbumImg from "../../assets/OurWorks/Cumbum.jpeg"
import VilluhairImg from "../../assets/OurWorks/villu - hair.jpeg"
import ContonImg from "../../assets/OurWorks/conton.jpeg"
import VilluskinImg from "../../assets/OurWorks/villu - skin.jpeg"
import ThrissurnImg from "../../assets/OurWorks/Thrissur.jpeg"
import KottivakkamImg from "../../assets/OurWorks/Kottivakam.jpeg"
import KovilambakkamImg from "../../assets/OurWorks/Kovilambakam.jpeg"
import VelloreImg from "../../assets/OurWorks/Vellore.jpeg"
import CuddaloreImg from "../../assets/OurWorks/cuddalore.jpeg"
import RKSalaiImg from "../../assets/OurWorks/rksalai.jpeg"
import EdumedcbeImg from "../../assets/OurWorks/Edumed Coimbatore.jpeg"
import EdumedchnImg from "../../assets/OurWorks/Edumend Chennai.jpeg"
import NaturalsImg from "../../assets/OurWorks/naturals.jpeg"
import BonitaSalem from "../../assets/OurWorks/bonita salem.jpeg"
import BonitaPudukottai from "../../assets/OurWorks/bonita pudukottai.jpeg"
import MSMS from "../../assets/OurWorks/msms.jpeg"
import Jaswanthini from "../../assets/OurWorks/jas.jpeg"
import Adhi from "../../assets/OurWorks/aadhimind.jpeg"
import Portfolio from "../../assets/OurWorks/ganeshportfolio.jpeg"
import Intelvidhyalaya from "../../assets/OurWorks/intelvidhyalaya.jpeg"
import Timeline from "../../assets/OurWorks/timeline.jpeg"
import littleella from "../../assets/OurWorks/littleella.jpeg"
import Envisol from "../../assets/OurWorks/envisol.jpeg"
import Schoolmate from "../../assets/OurWorks/schoolmate.jpeg"
import AraDiscoveries from "../../assets/OurWorks/ara_discoveries.jpeg"
import AraTech from "../../assets/OurWorks/araTech1.jpeg"
import AraMarketing from "../../assets/OurWorks/araMarketing.jpeg"


export default function OurWorksSection({ projects = sampleProjects }) {
  const corporate = projects.filter((p) => p.category === "corporate");
  const normal = projects.filter((p) => p.category === "client");
  const araproj = projects.filter((p) => p.category === "Ara");

  return (
    <section className={styles.wrap} id="works" aria-label="Our work">

      {/* ⚠️ KEEPING YOUR ORIGINAL HEADER AS IS */}
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Our works</p>
          <h2 className={styles.title}>Product-first projects we’ve shipped</h2>
        </div>

        <p className={styles.text}>
          From education platforms to internal tools, these projects show how we
          blend engineering, UX and integrations to solve real problems.
        </p>
      </header>

      {/* ================= CORPORATE CLIENTS ================= */}
      {corporate.length > 0 && (
        <>
          <h3 className={styles.subHeading}>Our Corporate Clients</h3>

          <ul className={styles.grid} role="list">
            {corporate.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </ul>
        </>
      )}

      {/* ================= NORMAL CLIENTS ================= */}
      {normal.length > 0 && (
        <>
          <h3 className={styles.subHeading}>Our Valuable Client Projects</h3>

          <ul className={styles.grid} role="list">
            {normal.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </ul>
        </>
      )}

      {/* ================= NORMAL CLIENTS ================= */}
      {araproj.length > 0 && (
        <>
          <h3 className={styles.subHeading}>Ara In-house Projects</h3>

          <ul className={styles.grid} role="list">
            {araproj.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </ul>
        </>
      )}

    </section>
  );
}

/* ---------- REUSABLE CARD COMPONENT ---------- */
function WorkCard({ project }) {
  return (
    <li className={styles.item}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <div
          className={styles.thumb}
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />
        <div className={styles.gradient} />
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            {project.role && <span className={styles.roleBadge}>{project.role}</span>}
          </div>

          {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
          <p className={styles.description}>{project.description}</p>

          {project.tags?.length > 0 && (
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}

          <div className={styles.footerRow}>
            <span className={styles.linkText}>View live site ↗</span>
            <span className={styles.meta}>
              {project.year && <span>{project.year}</span>}
              {project.industry && <span className={styles.dot}>•</span>}
              {project.industry && <span>{project.industry}</span>}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

/* ---------------- SAMPLE UPDATED DATA ---------------- */
const sampleProjects = [
  {
    id: 1,
    title: "GroHair Thanjavur",
    // subtitle: "End-to-end platform for schools",
    // description:
    //   "Attendance, fees, communication dashboards used by admins, teachers and parents.",
    url: "https://adgrohairgloskinthanjavur.com/",
    thumbnail: tnjImg,
    // tags: ["React", "Node", "Design system"],
    role: "Aesthetic Clinic",
    // year: "2024",
    // industry: "EdTech",
    category: "corporate", // 👈 add category
  },
  {
    id: 2,
    title: "Grohair Kanchipuram",
    // subtitle: "Internal analytics platform",
    // description: "Dashboards + alerts + reporting for ops teams.",
    url: "https://adgrohairgloskinkanchipuram.in/",
    thumbnail: kanchi,
    // tags: ["Next.js", "PostgreSQL"],
    role: "Aesthetic Clinic",
    // year: "2023",
    // industry: "SaaS",
    category: "corporate",
  },
  {
    id: 3,
    title: "Grohair Karaikudi",
    // subtitle: "Internal analytics platform",
    // description: "Dashboards + alerts + reporting for ops teams.",
    url: "https://adgrohairkaraikudi.in/",
    thumbnail: karaikudi,
    // tags: ["Next.js", "PostgreSQL"],
    role: "Aesthetic Clinic",
    // year: "2023",
    // industry: "SaaS",
    category: "corporate",
  },
  {
  id: 4,
  title: "GroHair Chidambaram",
  url: "https://adgrohairgloskinchidambaram.in/",
  thumbnail: ChidamImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
  {
  id: 5,
  title: "GroHair Dindugal",
  url: "https://adgrohairgloskindindigul.in/",
  thumbnail: DindigalImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
  {
  id: 6,
  title: "GroHair Potheri",
  url: "https://adgrohairpotheri.in/",
  thumbnail: PotheriImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 7,
  title: "GroHair Dharmapuri",
  url: "https://adgrohairgloskindharmapuri.in/",
  thumbnail: DharmaImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 8,
  title: "GroHair Kallakurichi",
  url: "https://adgrohairgloskinkallakurichi.com/",
  thumbnail: KallakurichiImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 9,
  title: "GroHair Cumbum",
  url: "https://adgrohairgloskincumbum.in/",
  thumbnail: CumbumImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 10,
  title: "GroHair Villupuram",
  url: "https://adgrohairviluppuram.in/",
  thumbnail: VilluhairImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 11,
  title: "GroHair Contonment",
  url: "https://adgrohaircantonment.in/",
  thumbnail: ContonImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 11,
  title: "GloSkin Villupuram",
  url: "https://adgloskinviluppuram.in/",
  thumbnail: VilluskinImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 12,
  title: "Grohair Thrissur",
  url: "https://adgrohairthrissur.in/",
  thumbnail: ThrissurnImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 13,
  title: "Grohair Kottivakkam",
  url: "https://adgrohairkottivakkam.in/",
  thumbnail: KottivakkamImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 14,
  title: "Grohair Kovilambakkam",
  url: "https://adgrohairkovilambakkam.com/",
  thumbnail: KovilambakkamImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 15,
  title: "Grohair Vellore",
  url: "https://adgrohairgloskinvellore.in/",
  thumbnail: VelloreImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 16,
  title: "Grohair Cuddalore",
  url: "https://adgrocuddalore.com/",
  thumbnail: CuddaloreImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 17,
  title: "Grohair RKSalai",
  url: "https://adgrohairrksalai.in/",
  thumbnail: RKSalaiImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 18,
  title: "Edumed Coimbatore",
  url: "https://dredumedcoimbatore.com/",
  thumbnail: EdumedcbeImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 19,
  title: "Edumed Anna Nagar-Chennai",
  url: "https://dredumedchennai.com/",
  thumbnail: EdumedchnImg,
  role: "Aesthetic Clinic",
  category: "corporate",
},
{
  id: 20,
  title: "Naturals",
  url: "http://naturalsthanjavur.com/",
  thumbnail: NaturalsImg,
  role: "Beauty & Salon",
  category: "corporate",
},
{
  id: 21,
  title: "Bonita Salem",
  url: "https://bonitaasalem.in/",
  thumbnail: BonitaSalem,
  role: "Aesthetic clinic",
  category: "corporate",
},
{
  id: 22,
  title: "Bonita Pudukottai",
  url: "https://bonitaapudukkottai.in/",
  thumbnail: BonitaPudukottai,
  role: "Aesthetic clinic",
  category: "corporate",
},
  {
  id: 23,
  title: "MSMS",
  url: "https://msmstj.in/",
  thumbnail: MSMS,
  role: "Education",
  category: "client",
},
  {
  id: 24,
  title: "Dr.Jaswanthini clinic",
  url: "https://drjaswanthini.com/",
  thumbnail: Jaswanthini,
  role: "Aesthetic Clinic",
  category: "client",
},
  {
  id: 25,
  title: "Adhi Mind Wellness center",
  url: "https://adhimindwellnesscentre.com/",
  thumbnail: Adhi,
  role: "Wellness center",
  category: "client",
},
{
  id: 26,
  title: "Portfolio",
  url: "https://gp10.co/",
  thumbnail: Portfolio,
  role: "Portfolio",
  category: "client",
},
{
  id: 27,
  title: "Envisol",
  url: "https://envisolbioplast.com/",
  thumbnail: Envisol,
  role: "Eco-friendly",
  category: "client",
},
{
  id: 29,
  title: "intelvidhyalaya",
  url: "https://intelvidyalaya.in/",
  thumbnail: Intelvidhyalaya,
  role: "Education",
  category: "client",
},
{
  id: 30,
  title: "Timeline Studios",
  url: "https://timelinestudios.in/",
  thumbnail: Timeline,
  role: "Photography",
  category: "client",
},
{
  id: 31,
  title: "Little Ella",
  url: "https://littleella.school/",
  thumbnail: littleella,
  role: "Education",
  category: "client",
},
{
  id: 33,
  title: "Schoolmate",
  url: "http://araschoolmate.com/",
  thumbnail: Schoolmate,
  role: "Ara Software",
  category: "Ara",
},
{
  id: 34,
  title: "Ara Discoveries",
  url: "http://aradiscoveries.com/",
  thumbnail: AraDiscoveries,
  role: "Ara Discoveries",
  category: "Ara",
},
{
  id: 35,
  title: "Ara Tech",
  url: "http://discovertechnologies.co/",
  thumbnail: AraTech,
  role: "Ara Discover Technologies",
  category: "Ara",
},
{
  id: 35,
  title: "Ara Marketing",
  url: "http://discovermarketing.co/",
  thumbnail: AraMarketing,
  role: "Ara Discover Marketing",
  category: "Ara",
},
];
