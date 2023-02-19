import PageLayout from "components/page-layout"
import PageTitle from "components/page-title"
import Container from "components/container"

import styles from "styles/skills.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faScrewdriverWrench, faDatabase, faGear } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <PageLayout>
      <PageTitle title="Skills" desc="My development skills" />

      <Container>
        <div className="content has-text-centered">
          <p>
            これまで使用経験のある技術です。<br/>
            ★の数が３以上のものについては業務でよく使用しているものです。<br/>
          </p>
        </div>

        <div className={styles.container}>
          <div className="card">
            <div className="card-content">
              <p className="title is-6"><FontAwesomeIcon icon={faLaptopCode} /> Language</p>
            </div>
            <div className="card-content">
              <table className="table is-fullwidth">
                <tbody>
                  <tr>
                    <td>Java</td>
                    <td>★★★☆☆</td>
                    <td>３年</td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td>★★★★☆</td>
                    <td>３年</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>★★★★☆</td>
                    <td>４年</td>
                  </tr>
                  <tr>
                    <td>Shell</td>
                    <td>★★★☆☆</td>
                    <td>３年</td>
                  </tr>
                  <tr>
                    <td>Python</td>
                    <td>★★☆☆☆</td>
                    <td>１年</td>
                  </tr>
                  <tr>
                    <td>Kotlin</td>
                    <td>★☆☆☆☆</td>
                    <td>３ヶ月</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="title is-6"><FontAwesomeIcon icon={faScrewdriverWrench} /> Framework</p>
            </div>
            <div className="card-content">
            <table className="table is-fullwidth">
                <tbody>
                  <tr>
                    <td>Spring Boot</td>
                    <td>★★★☆☆</td>
                    <td>２年</td>
                  </tr>
                  <tr>
                    <td>Laravel</td>
                    <td>★★★★☆</td>
                    <td>４年</td>
                  </tr>
                  <tr>
                    <td>Vue.js</td>
                    <td>★★★☆☆</td>
                    <td>４年</td>
                  </tr>
                  <tr>
                    <td>Next.js</td>
                    <td>★☆☆☆☆</td>
                    <td>１ヶ月</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={`${styles.container}`}>
          <div className="card">
            <div className="card-content">
              <p className="title is-6"><FontAwesomeIcon icon={faDatabase} /> Database</p>
            </div>
            <div className="card-content">
              <table className="table is-fullwidth">
                <tbody>
                  <tr>
                    <td>MySQL</td>
                    <td>★★★☆☆</td>
                    <td>２年</td>
                  </tr>
                  <tr>
                    <td>PostgreSQL</td>
                    <td>★★★★☆</td>
                    <td>４年</td>
                  </tr>
                  <tr>
                    <td>OracleDB</td>
                    <td>★☆☆☆☆</td>
                    <td>１年</td>
                  </tr>
                  <tr>
                    <td>MongoDB</td>
                    <td>★☆☆☆☆</td>
                    <td>１年</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <p className="title is-6"><FontAwesomeIcon icon={faGear} /> Other</p>
            </div>
            <div className="card-content">
            <table className="table is-fullwidth">
                <tbody>
                <tr>
                    <td>Apache</td>
                    <td>★★★☆☆</td>
                    <td>２年</td>
                  </tr>
                  <tr>
                    <td>AWS</td>
                    <td>★★☆☆☆</td>
                    <td>２年</td>
                  </tr>
                  <tr>
                    <td>Git</td>
                    <td>★★★★☆</td>
                    <td>４年</td>
                  </tr>
                  <tr>
                    <td>LINE</td>
                    <td>★★☆☆☆</td>
                    <td>１年</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  )
}
