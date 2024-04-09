import styles from "./page.module.css";
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Homepage from "@/app/components/Homepage";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <header className="App-header">
          <Nav/>
        </header>
        <Homepage/>
        <Footer/>
      </div>
    </main>
  );
}
