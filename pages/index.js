import PageLayout from "components/page-layout"
import PageTitle from "components/page-title"
import Container from "components/container"

import styles from "styles/home.module.css"

export default function Home() {
  return (
    <PageLayout>
      <PageTitle title="Hirorin's portfolio" desc="welcome to my portfolio!" />

      <Container>
        <div className={styles.imageCenter}>
          <figure className="image is-128x128">
            <img className="is-rounded" src="/Hirorin.png" alt="image"/>
          </figure>
        </div>

        <div className="content has-text-centered">
          <h1>Profile</h1>
          <p>
            はじめまして。Hirorinと申します。<br/>
            大学生時代（2013年）からプログラミングを学び始め、業務では主にweb系の開発に携わっています。<br/>
            フロントエンド、バックエンド、DB、インフラなどweb開発に必要な技術は一通り経験があります。<br/><br/>
            個人開発では業務とは異なることを学ぶようにしており、<br/>
            LINEbotを作ったり、RPGツクールを使ってゲーム開発をしています。<br/><br/>
            学ぶことが好きで、開発のほかには資格試験の勉強もよくやります。
          </p>
        </div>
      </Container>
    </PageLayout>
  )
}
