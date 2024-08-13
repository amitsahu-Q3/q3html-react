import './radio.scss';
import './radio-layout.scss';


function Radio() {
  return (
    <>
      <h1>Radio</h1>
      <p>Main Component - Sharp</p>
      <div className='check-border-main-bx'>
        <label className="radio-button-container">One
          <input type="radio"  name="radio"/>
            <span class="checkmark"></span>
        </label>
        <label className="radio-button-container">Two
          <input type="radio" name="radio"/>
            <span class="checkmark"></span>
        </label>
      </div>

      <p>Main Component - Soft</p>
      <div className='check-border-main-bx'>
        <label className="radio-button-container radio-soft">One
          <input type="radio"  name="radio"/>
            <span class="checkmark"></span>
        </label>
        <label className="radio-button-container radio-soft">Two
          <input type="radio" name="radio"/>
            <span class="checkmark"></span>
        </label>
      </div>

      <p>Main Component - Smooth</p>
      <div className='check-border-main-bx'>
        <label className="radio-button-container radio-smooth">One
          <input type="radio"  name="radio"/>
            <span class="checkmark"></span>
        </label>
        <label className="radio-button-container radio-smooth">Two
          <input type="radio" name="radio"/>
            <span class="checkmark"></span>
        </label>
      </div>

      <p>Main Component - Round</p>
      <div className='check-border-main-bx'>
        <label className="radio-button-container radio-round">One
          <input type="radio"  name="radio"/>
            <span class="checkmark"></span>
        </label>
        <label className="radio-button-container radio-round">Two
          <input type="radio" name="radio"/>
            <span class="checkmark"></span>
        </label>
      </div>

      <p>Main Component - border</p>
      <div className='check-border-main-bx'>
        <label className="radio-button-container radio-border">One
          <input type="radio"  name="radio"/>
            <span class="checkmark"></span>
        </label>
        <label className="radio-button-container radio-border">Two
          <input type="radio" name="radio"/>
            <span class="checkmark"></span>
        </label>
      </div>
    </>

  );
}

export default Radio;
