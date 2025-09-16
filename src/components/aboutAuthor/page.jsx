import React from 'react';
import Image from 'next/image';

import styles from './aboutAuthor.module.css';

const AboutAuthor = () => {
    return (
        <div className={styles.container}>
            <div className={styles.identification}>
                <h1 className={styles.identificationTitle}>Nathalia Santos Ferreira - 2TDS2</h1>
                <h1 className={styles.identificationTitle}>SENAI de Valinhos</h1>
            </div>
            <div className={styles.information}>
                <Image src="/images/author.png" alt="Nathalia Santos Ferreira" width={400} height={200} className={styles.authorImage} />
                <div className={styles.infoText}>
                    <div className={styles.sectionTitle}>
                        <Image src="/images/circulo.png" alt="Decoração círculo verde" width={60} height={100} className={styles.authorDecoration} />
                        <h2 className={styles.infoTitle}>O que levou o surgimento da ideia?</h2>
                    </div>
                    <p className={styles.infoDescription}>A ideia de criar este site nasceu da vontade de facilitar a vida de quem ama cozinhar ou simplesmente quer descobrir algo novo para preparar no dia a dia. Consumindo uma API de receitas, conseguimos reunir em um só lugar várias opções práticas e variadas, trazendo inspiração para todos os gostos e momentos.</p>
                    <p className={styles.infoPhrase}>“ Cozinhar é transformar ingredientes simples em momentos inesquecíveis. “</p>
                </div>
            </div>
        </div>
    );
};

export default AboutAuthor;