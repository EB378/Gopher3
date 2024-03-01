import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
      <header className="App-header">
        <Nav/>
        <Box1/>
        <Box2/>
        <Box3/>
        <p>
          Server
        </p>
      </header>
      </div>
    </main>
  );
}
