import styles from "./header.module.css";

import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Weelicious</h1>
      <nav className={styles.nav}>
        <Link href="/home" className={styles.linkNav}>Home</Link>
        <Link href="#" className={styles.linkNav}>API</Link>
        <Link href="#" className={styles.linkNav}>Receitas</Link>
      </nav>
      <button className={styles.button}>Login</button>
    </header>
  )
}

export default Header;