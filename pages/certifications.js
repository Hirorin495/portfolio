import PageLayout from "components/page-layout"
import PageTitle from "components/page-title"
import Certificate from "components/certificate"
import Container from "components/container"

import styles from "styles/certificate.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <PageLayout>
      <PageTitle title="Certifications" desc="My certifications" />

      <Container small>
        <div className="content has-text-centered">
          <p>
            これまで受験し、合格した資格試験です。<br/>
            学ぶことが好きなので、今後も資格試験に力を入れていく予定です。<br/>
            <Link href="https://www.credly.com/users/username.bfcd2fca/badges" rel="noreferrer" target="_blank">Credy</Link>に他の取得資格がまとめられています。
          </p>
        </div>

        <div className={styles.container}>
          <Certificate
            name="SAP-C02"
            path="/SAP.png" />
          <Certificate
            name="DOP-C01"
            path="/DOP.png"/>
          <Certificate
            name="SOA-C02"
            path="/SOA.png" />
          <Certificate
            name="SAA-C02"
            path="/SAA.png" />
          <Certificate
            name="DVA-C01"
            path="/DVA.png" />
          <Certificate
            name="TCA"
            path="/TCA.png" />
          <Certificate
            name="TCO"
            path="/TCO.png" />
        </div>
      </Container>
    </PageLayout>
  )
}
