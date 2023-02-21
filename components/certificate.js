export default function certification({name, path}) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={path} alt="image"/>
          </figure>
        </div>
        
        <div className="card-content">
          <div className="content has-text-centered">
            <div className="notification is-primary  is-light is-size-4">
            <strong>{name}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
