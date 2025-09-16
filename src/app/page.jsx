import styles from "./page.module.css";

import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import AboutAuthor from "@/components/aboutAuthor/page";

export default function Home() {
  return (
    <div>

      <Header />
      <Hero />
      <AboutAuthor />
      
    </div>
  )
}
