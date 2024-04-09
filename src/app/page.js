import styles from "./page.module.css";
import Nav from '@/app/components/Nav';
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
        <footer className="App-footer">
          <p>This is a active website currently in use for school project. This domain is in use. Site last update 03.04.2024 (dd/mm/yyyy). <br /> We accept no liability in any form for the this website/web application. For more information contact: eric.benni@opp.eduvantaa.fi.</p>
        </footer>
      </div>
    </main>
  );
}
