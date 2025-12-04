import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section  data-aos="slide-up" className={styles.section} aria-labelledby="about-heading">
      {/* Header */}
      <header className={styles.header}>
        <h2 id="about-heading" className={styles.title}>
          About Us
        </h2>
        <p className={styles.subtitle}>
          Who we are — <strong>Ara Technologies</strong>, a division of{" "}
          <strong>Ara Discoveries Pvt Ltd</strong>, delivering innovative
          digital solutions through technology consulting, software development,
          AI integration, and digital transformation — empowering businesses to
          grow in a connected world.
        </p>
      </header>

      {/* Content */}
      <div className={styles.content}>
        {/* Image card */}
        <figure className={styles.mediaCard}>
          <img
            className={styles.media}
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop"
            alt="Our team collaborating in a meeting room"
          />
        </figure>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Text + CTA */}
        <div className={styles.copy}>
          <p>
            At Ara Technologies, we blend creativity with cutting-edge
            technology to craft intelligent digital solutions that simplify
            processes and accelerate growth. Our team of passionate developers,
            designers, and technology consultants collaborate to build scalable
            web platforms, enterprise applications, and AI-driven solutions that
            solve complex business challenges.
          </p>

          <p>
            With expertise across industries, we help organizations embrace
            digital transformation confidently. Whether it’s custom software
            development, cloud implementation, or AI integration — our focus
            remains on delivering measurable impact and meaningful user
            experiences that strengthen brand trust.
          </p>

          <p>
            Our mission is simple — to innovate with purpose, build with
            integrity, and scale with vision. We believe in empowering
            businesses to stay ahead of change through smart technology,
            continuous learning, and a human-centered approach.
          </p>

          <button className={styles.cta} type="button">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
