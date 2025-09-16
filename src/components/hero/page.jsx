import styles from "./hero.module.css";

import Image from "next/image";

const Hero = () => {
  return (
    <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>
                <span className={styles.bold}>Conheça nossas</span><br />
                <span className={styles.green}>Receitas</span>
              </h1>
              <p className={styles.description}>
                Descubra um mundo de sabores na palma de suas mãos. Monte pratos deliciosos, bonitos e saudáveis para sua família! Não perca a oportunidade!
              </p>
              <button className={styles.heroButton}>
                Mãos à massa <span className={styles.arrow}>&#9654;</span>
              </button>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageCircle}>
                <Image width={630} height={110} src="/images/banner.png" alt="Prato de comida" className={styles.heroImage} />
              </div>
              <Image width={200} height={50} src="/images/circulo.png" alt="Decoração círculo verde" className={styles.heroDecoration} />
            </div>
          </div>
        </section>
      </main>
  )
}

export default Hero;