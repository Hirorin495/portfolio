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
            fullName="Solutions Architect Professional"
            date="2022/12/24"
            path="/SAP.png"
            desc="3ヶ月の勉強期間、2度目の挑戦にて773点で合格" />
          <Certificate
            name="DOP-C01"
            fullName="DevOps Engineer Professional"
            date="2022/09/24"
            path="/DOP.png"
            desc="2ヶ月の勉強期間、1度目の挑戦にて、860点で合格" />
          <Certificate
            name="SOA-C02"
            fullName="SysOps Administrator Associate"
            date="2022/03/26"
            path="/SOA.png"
            desc="2ヶ月の勉強期間、2度目の挑戦にて、765点で合格" />
          <Certificate
            name="SAA-C02"
            fullName="Solutions Architect Associate"
            date="2021/12/11"
            path="/SAA.png"
            desc="1ヶ月の勉強期間、1度目の挑戦にて、765点で合格" />
          <Certificate
            name="DVA-C01"
            fullName="Solutions Architect Associate"
            date="2021/10/30"
            path="/DVA.png"
            desc="1ヶ月の勉強期間、1度目の挑戦にて、788点で合格" />
          <Certificate
            name="TCA"
            fullName="Tanium Certified Administrator"
            date="2022/07/23"
            path="/TCA.png"
            desc="IT資産管理サービス、Taniumの管理者認定資格（英語）" />
          <Certificate
            name="TCO"
            fullName="Tanium Certified Operator"
            date="2022/02/27"
            path="/TCO.png"
            desc="IT資産管理サービス、Taniumのオペレータ認定資格（英語）" />
        </div>
      </Container>
    </PageLayout>
  )
}
