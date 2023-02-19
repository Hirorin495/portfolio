import Link from "next/link";

export default function LinkButton({name, path, url}) {
  return (
    <div className="pb-3">
      <Link href={url} target="_blank">
        <button className="button is-large is-fullwidth level">
          <span className="image is-48x48 level-left">
            <img className="level-item" src={path} />
          </span>
          <span className="level-item has-text-centered">{name}</span>
        </button>
      </Link>
  </div>
  )
}