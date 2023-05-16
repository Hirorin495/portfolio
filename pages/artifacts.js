import PageLayout from "components/page-layout"
import PageTitle from "components/page-title"
import Container from "components/container"
import Link from "next/link";

import styles from "styles/artifacts.module.css"

export default function Home() {
  return (
    <PageLayout>
      <PageTitle title="Artifacts" desc="My artifacts" />

      <Container>
        <div className="content has-text-centered">
          <p>
            個人開発の成果物です。<br/>
            クリックすることでGitHubのリポジトリに移動できます。
          </p>
        </div>

        <div className={styles.container}>
          <Link href="https://github.com/Hirorin495/portfolio" target="_blank">
            <div className="card">
              <div className={`card-image ${styles.imageCenter}`}>
                <figure className="image is-128x128">
                  <img className="is-rounded" src="/Hirorin.png" alt="image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">ポートフォリオ</p>
                <span className={`tag is-link ${styles.tag}`}>Next.js</span>
                <span className={`tag is-primary ${styles.tag}`}>Bulma</span>
                <div className="content">
                  今回作成したポートフォリオです。<br />
                  Reactを勉強した集大成として作ってみました！
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/Hirorin495/MorningCallBot" target="_blank">
            <div className="card">
              <div className={`card-image ${styles.imageCenter}`}>
                <figure className="image is-128x128">
                  <img className="is-rounded" src="/bourbon.png" alt="image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">モーニングコールブルボン</p>
                <span className={`tag is-link ${styles.tag}`}>AWS Lambda</span>
                <span className={`tag is-primary ${styles.tag}`}>Node.js</span>
                <div className="content">
                  AWSを利用して、<br />毎朝7時に出せるゴミを通知してくれるLINE bot
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/Hirorin495/Yonmoku" target="_blank">
            <div className="card">
              <div className={`card-image ${styles.imageCenter}`}>
                <figure className="image is-128x128">
                  <img className="is-rounded" src="/kinoko.png" alt="image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">きのこ・たけのこ四目並べ</p>
                <span className={`tag is-link ${styles.tag}`}>kotlin</span>
                <span className={`tag is-primary ${styles.tag}`}>Android</span>
                <div className="content">
                  置く画像が毎回が変わる四目並べです。<br />
                  ちなみに私はきのこ派です。
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/Hirorin495/image-slot" target="_blank">
            <div className="card">
              <div className={`card-image ${styles.imageCenter}`}>
                <figure className="image is-128x128">
                  <img className="is-rounded" src="/roulette.png" alt="image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">スライドルーレット</p>
                <span className={`tag is-info ${styles.tag}`}>typescript</span>
                <span className={`tag is-link ${styles.tag}`}>react.js</span>
                <div className="content">
                  スーパーマ○オ３にあったような、<br />
                  絵合わせルーレットです。
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </PageLayout>
  )
}
