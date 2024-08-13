import './stepper.scss';
import './stepper-layout.scss';
import CheckCricle from '../../assets/images/check_circle.svg';
import CheckCricleBlue from '../../assets/images/check_circle-blue.svg';
import AddCardIcon from '../../assets/images/add-card-icon.svg';

function Stepper() {
  return (
    <>
      <h1>Stepper</h1>

      <div className='steps-outer'>
        <div className='step-bx step-completed'>
          <span>
            <img src={CheckCricle} />
          </span>
          Step 1
        </div>
        <div className='step-bx step-inprogress'>
          <span></span>
          Step  2
        </div>
        <div className='step-bx'>
          <span></span>
          Step 3
        </div>
        <div className='step-bx'>
          <span></span>
          Step 4
        </div>
        <div className='step-bx'>
          <span></span>
          Step 5
        </div>
      </div>

      <br />

      <div className='steps-outer steps-w-solid-line'>
        <div className='step-bx step-completed'>
          <span>
            <img src={CheckCricle} />
          </span>
          Step 1
        </div>
        <div className='step-bx step-inprogress'>
          <span></span>
          Step  2
        </div>
        <div className='step-bx'>
          <span></span>
          Step 3
        </div>
        <div className='step-bx'>
          <span></span>
          Step 4
        </div>
        <div className='step-bx'>
          <span></span>
          Step 5
        </div>
      </div>

      <br />

      <div className='steps-outer steps-inline steps-w-solid-line'>
        <div className='step-bx step-completed'>
          <span>
            <img src={CheckCricle} />
          </span>
          Step 1
        </div>
        <div className='step-bx step-inprogress'>
          <span></span>
          Step  2
        </div>
        <div className='step-bx'>
          <span></span>
          Step 3
        </div>
        <div className='step-bx'>
          <span></span>
          Step 4
        </div>
        <div className='step-bx'>
          <span></span>
          Step 5
        </div>
      </div>

      <br />

      <div className='steps-outer steps-round steps-round-selectd'>
        <div className='step-bx step-completed'>
          <div className='step-name'>Select</div>
          <img src={CheckCricleBlue} />
        </div>
        <div className='step-bx'>
          <div className='step-name'>Choose</div>
          <span className='step-text'>
            2
          </span>
        </div>
        <div className='step-bx'>
          <div className='step-name'>Checkout</div>
          <span className='step-text'>
            3
          </span>
        </div>
      </div>

      <br />

      <div className='steps-outer steps-card-bx'>
        <div className='step-bx step-completed'>
          <i className='icon-bx'>
            <img src={AddCardIcon} />
          </i>
          <div className='step-count'>Step 1</div>
          <img src={CheckCricle} />
        </div>
        <div className='step-bx step-inprogress'>
          <i className='icon-bx'>
            <img src={AddCardIcon} />
          </i>
          <div className='step-count'>Step 2</div>
          <span></span>
        </div>
        <div className='step-bx'>
          <i className='icon-bx'>
            <img src={AddCardIcon} />
          </i>
          <div className='step-count'>Step 3</div>
          <span></span>
        </div>
        <div className='step-bx'>
          <i className='icon-bx'>
            <img src={AddCardIcon} />
          </i>
          <div className='step-count'>Step 4</div>
          <span></span>
        </div>
        <div className='step-bx'>
          <i className='icon-bx'>
            <img src={AddCardIcon} />
          </i>
          <div className='step-count'>Step 5</div>
          <span></span>
        </div>
      </div>
    </>

  );
}

export default Stepper;
