import styles from './content.module.css';

export default function Content({ role, company, date, descriptions }) {
  return (
    <section className={styles.dataContainer}>
      <h2 className={styles.role}>{role}</h2>
      <span className={styles.company}>{company}</span>
      <p className={styles.date}>{date}</p>

      <ol className={styles.listDiv}>
        {descriptions.map((description, index) => {
          return <li key={index}>{description}</li>;
        })}
      </ol>

      <button>more info</button>
    </section>
  );
}
