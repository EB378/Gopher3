import styles from "@/app/page.module.css";
import Nav from '@/app/components/Nav';
import Box1 from "@/app/components/Box1";
import Box2 from "@/app/components/Box2";
import Box3 from "@/app/components/Box3";
import "@/app/globals.css";

export default () => (
    <>
        <main className={styles.main}>
            <div className="App">
                <header className="App-header">
                    <Nav/>
                    <Box1/>
                    <Box2/>
                    <Box3/>
                </header>
            </div>
        </main>
    </>
);