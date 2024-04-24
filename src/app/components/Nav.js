import styles from './Nav.module.css' 
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <div className={styles.topnav}>
        <img src='/Gopher.png' alt="Netlify Logo" href="#home" className={styles.flogo} />
        <Link href="/">Gopher</Link>
        <Link href="/about">About</Link>
        <Link href="/clients">Target Audience</Link>
        <Link href="/testamonials">Testamonials</Link>
        <Link href="/contact">Contact</Link>
        <div className={styles.rightalignment}>
          <Link href="/pricing">Plans</Link>
          <Link href="/join">Join</Link>
          <Link href="#login">Log In</Link>
        </div>
      </div>
    </>  
  )
}