import styles from "./page.module.css";
import Nav from '@/app/components/Nav';
import Homepage from "@/app/components/Homepage";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <Homepage/>
        </header>
      </div>
    </main>
  );
}
