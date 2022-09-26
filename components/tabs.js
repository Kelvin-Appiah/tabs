import styles from './tabs.module.css';

export default function Tabs({ companies, switchContent }) {
  return (
    <section className={styles.btnContainer}>
      {companies.map((company, index) => {
        return (
          <button key={index} onClick={() => switchContent(index)}>
            {company}
          </button>
        );
      })}
    </section>
  );
}
