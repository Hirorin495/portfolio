export default function certification({name, fullName, date, path, desc}) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={path}/>
          </figure>
        </div>
        
        <div className="card-content">
          <div className="content">
            <div className="js-modal-trigger button is-info is-inverted is-large is-fullwidth" data-target={name}>
              {name}
            </div>
          </div>
        </div>
      </div>

      <div id={name} className="modal">
        <div className="modal-background"></div>

        <div className="modal-card">
          <section className="modal-card-body">
            <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img src={path} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{fullName}</p>
                  <p className="subtitle is-6">{date} certified.</p>
                  <p className="is-5">{desc}</p>
                </div>
              </div>
          </section>
        </div>

        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </>
  )
}

if (process.browser) {
  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });
};
