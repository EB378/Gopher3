import styles from './Nav.module.css'
import Logo from "./Logo";
export default function Nav() {
  return (
    <>
      <div className={styles.topnav}>
          <Logo />
          <a href="#home">Gopher</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
      </div>
    </>  
  )
}