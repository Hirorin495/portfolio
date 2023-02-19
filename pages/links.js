import PageLayout from "components/page-layout"
import PageTitle from "components/page-title"
import Container from "components/container"
import LinkButton from "components/link-button"

export default function Links() {
  return (
    <PageLayout>
      <PageTitle title="Links" desc="External links where I am active" />

      <Container small>
        <div className="content has-text-centered">
          <p>
            下記のサイトで情報発信もしています。<br/>
            よろしければのぞいてみてください。<br/>
          </p>
        </div>

        <div className="container">
          <LinkButton
            name="Qiita"
            path="/Qiita.png"
            url="https://qiita.com/hirorin"/>
          <LinkButton
            name="はてなブログ"
            path="/hatenablog.svg"
            url="https://hirorin-it.hatenablog.com"/>
          <LinkButton
            name="Twitter"
            path="/Twitter.png"
            url="https://twitter.com/Hirorin495"/>
          <LinkButton
            name="Github"
            path="/Github.png"
            url="https://github.com/Hirorin495"/>
        </div>
      </Container>
    </PageLayout>
  )
}