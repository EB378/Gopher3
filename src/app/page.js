import styles from "./page.module.css";
import Homepage from "@/app/components/Homepage";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <Homepage/>
      </div>
    </main>
  );
}
