import styles from "./ContactHero.module.css";

export default function ContactHero({
  title = "Contact us",
  trail = [
    { label: "Home", href: "/" },
    { label: "Contact us" },
  ],
  caption, // optional small line under the title
}) {
  return (
    <section className={styles.hero} aria-label="Page intro">
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          {trail.map((item, i) => (
            <span key={i} className={styles.bcItem}>
              {item.href ? (
                <a href={item.href} className={styles.bcLink}>
                  {item.label}
                </a>
              ) : (
                <span className={styles.bcCurrent}>{item.label}</span>
              )}
              {i < trail.length - 1 && <span className={styles.sep}>/</span>}
            </span>
          ))}
        </nav>

        <h1 className={styles.title}>{title}</h1>

        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    </section>
  );
}
