import Container from "components/container"

import styles from "styles/footer.module.css"

export default function footer() {
  return (
    <footer className={`footer bottom-0 bg-slate-200`}>
      <Container>
        <div className="content container">
          <a href="#">
            <img className={styles.img} src="/MyLogo2.png" />
          </a>
        </div>
      </Container>
    </footer>
  )
}