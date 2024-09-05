import Image from "next/image";
import styles from "./page.module.css";
import ExampleImage from "../app/images/ExamplePhoto.png"


export default function Home() {
  return (
    <div>
      <header className={styles.header}>

        <h1 className={styles.headingTitle}>Lonsdale Bike</h1>
        <nav className={styles.nav}>
          <div className={styles.ctas}>
            <a className={styles.primary} href="/https://www.facebook.com/" target="_blank"rel="noopener noreferrer">
              Facebook Page
            </a>
          </div>
        </nav>
      </header>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.introduction}>
            <h3 className={styles.heading}>Check out our</h3>
            <h1 className={styles.mainHeading}>Lonsdale Bike </h1>
            <h3 className={styles.heading}>Adventure awaits on two wheels! Join us for the ride and explore the world one pedal at a time. 🚴‍♂️</h3>
          </div>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="/https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FaceBook Page
            </a>
          </div>
        </main>
      </div>

      <div className={styles.introductionSection}>
        <h1 className={styles.introductionHeader}>See how we did it</h1>
        <main className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 1" className={styles.image} />
            <h2 className={styles.title}>Events</h2>
          </div>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 2" className={styles.image} />
            <h2 className={styles.title}>Exploration</h2>
          </div>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 3" className={styles.image} />
            <h2 className={styles.title}>Destinations</h2>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Stay Connected. All rights Reserved</h2>
        </div>
      </footer>
    </div>
  );
}
