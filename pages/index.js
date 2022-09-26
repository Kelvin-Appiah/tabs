import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Tabs from '../components/tabs';
import Content from '../components/content';
import content from '../data';

let theCompanies = [...new Set(content.map((job) => job.company))];

export default function Home() {
  const [index, setIndex] = useState(0);

  const { role, company, date, descriptions } = content[index];

  const switchContent = (index) => {
    setIndex(index);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.underline}></div>
      <div className={styles.contents}>
        <Tabs companies={theCompanies} switchContent={switchContent} />
        <Content
          role={role}
          company={company}
          date={date}
          descriptions={descriptions}
        />
      </div>
    </main>
  );
}
