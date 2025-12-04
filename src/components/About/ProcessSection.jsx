import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassChart,
  faTimeline,
  faPenNib,
  faLaptopCode,
  faShieldHalved,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    icon: faMagnifyingGlassChart,
    title: "Discovery & Analysis",
    text: "We start by understanding your business goals, challenges, and target audience. Through collaborative workshops and data-driven insights, we define project objectives and outline the strategy for impactful digital transformation.",
  },
  {
    icon: faTimeline,
    title: "Strategic Planning",
    text: "Once we have clarity on requirements, our experts craft a clear roadmap that includes project milestones, timelines, and resource allocation — ensuring seamless execution and transparent communication at every stage.",
  },
  {
    icon: faPenNib,
    title: "Design & Prototyping",
    text: "Our creative team designs intuitive, engaging, and accessible interfaces that reflect your brand identity. We produce interactive prototypes to visualize the end experience and refine user journeys before development begins.",
  },
  {
    icon: faLaptopCode,
    title: "Development & Integration",
    text: "Using modern frameworks and scalable architectures, we develop secure and high-performance applications. From front-end design to backend systems, every element is optimized for speed, functionality, and flexibility.",
  },
  {
    icon: faShieldHalved,
    title: "Quality Assurance & Security",
    text: "Before deployment, we conduct thorough testing — from performance and compatibility to penetration and compliance checks. Our goal is to deliver flawless, future-ready solutions that you can trust.",
  },
  {
    icon: faRocket,
    title: "Launch & Continuous Support",
    text: "After a successful launch, we provide ongoing monitoring, maintenance, and optimization. Our partnership doesn’t end at delivery — we continue to evolve your digital ecosystem as your business grows.",
  },
];

export default function ProcessSection() {
  return (
    <section data-aos="fade-up"
 className={styles.section} id="process">
      <div className={styles.container}>
        {/* Left side */}
        <div className={styles.left}>
          <h2 className={styles.title}>Our Process</h2>
          <p className={styles.subtitle}>
            At <strong>Ara Technologies</strong>, we follow a structured,
            transparent process designed to turn ideas into scalable,
            high-impact digital solutions. Each phase is built around
            collaboration, innovation, and measurable outcomes.
          </p>

          <button className={styles.cta}>View Our Work</button>

          <div className={styles.imageBox}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
              alt="Team collaboration at Ara Technologies"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right side */}
        <div className={styles.right}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={s.icon} className={styles.icon} />
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
