import Container from "components/container"
import Link from "next/link"

import styles from "styles/footer.module.css"

export default function footer() {
  return (
    <footer className={`footer bottom-0 bg-slate-200`}>
      <Container>
        <div className="content container">
          <Link href="#">
            <img className={styles.img} src="/MyLogo2.png" alt="image"/>
          </Link>
        </div>
      </Container>
    </footer>
  )
}