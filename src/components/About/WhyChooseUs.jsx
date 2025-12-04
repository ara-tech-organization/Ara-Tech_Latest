import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersGear,
  faRocket,
  faHeart,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhyChooseUs.module.css";

const features = [
  {
    icon: faUsersGear,
    title: "Experienced Tech Professionals",
    text: "A skilled team of experts delivering innovative, reliable, and scalable technology solutions tailored to your needs.",
  },
  {
    icon: faRocket,
    title: "Innovation-Driven Mindset",
    text: "Fueled by creativity and forward-thinking, we embrace change to deliver cutting-edge solutions that accelerate business growth.",
  },
  {
    icon: faHeart,
    title: "Customer-Centric Culture",
    text: "Putting customers at the heart of every decision to deliver meaningful experiences and build lasting relationships.",
  },
  {
    icon: faTrophy,
    title: "Proven Track Record",
    text: "Consistently delivering successful projects backed by measurable results, trust, and long-term client partnerships.",
  },
];

export default function WhyChooseUs() {
  return (
    <section data-aos="fade-up"
 className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Why Choose Ara Technologies?</h2>
        <p className={styles.subtitle}>
          Ara Technologies delivers innovative, secure, and scalable digital
          solutions driven by expert teams and a customer-first approach —
          helping businesses grow and lead in the digital age.
        </p>
      </div>

      {/* Features grid */}
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={f.icon} className={styles.icon} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardText}>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
