import Header from "components/header"
import Footer from "components/footer"

import styles from "styles/page-layout.module.css"

export default function PageLayout({children}) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}