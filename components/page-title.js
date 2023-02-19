import styles from 'styles/page-title.module.css'

export default function PageTitle({title, desc}) {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className={`title ${styles.center}`}>
          {title}
        </p>
        <p className={`subtitle ${styles.center}`}>
          {desc}
        </p>
      </div>
    </section>
  )
}