import './progressbar.scss';
import CheckCricle from '../../assets/images/check_circle.svg';
import CrossMark from '../../assets/images/cross-mark.svg';
import Uparrow from '../../assets/images/up-arrow.svg'
import Downarrow from '../../assets/images/arrow-down.svg'

function LinearProgress() {
  return (
    <>
      <h4>Linear Progress Bar</h4>
      <div className='linear-progress-sec'>
            
            
            <div className='progress'>
                  <div style={{width:'70%'}} className='progress-bar'></div>
            </div>
        
            <br/>

             <div className='progress steps-progress-bx'>
                  <div className='steps-progress-count'>
                     <img src={CheckCricle} /> <span>1</span> of 7 steps completed
                  </div>
                  <div className='steps-progress'>
                   <div className='progress-step'>
                       <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   </div>
            </div>
          
            <br/>
             
              <div className='progress-level'>
                   <div className='level-bx'>
                   <div className='lavel-step lavel-1'>
                      <span>Lv 1</span>
                  </div>
                  <div className='lavel-step lavel-2 lavel-active'>
                      <span>Lv 2</span>
                  </div> 
                  <div className='lavel-step lavel-3'>
                      <span>Lv 3</span>
                  </div>
                  <div className='lavel-step lavel-4'>
                      <span>Lv 4</span>
                  </div>
                  <div className='lavel-step lavel-5'>
                      <span>Lv 5</span>
                  </div>
                   </div>
                    <div className='progress'>
                       <div style={{width:'70%'}} className='progress-bar'></div>
                    </div>
            </div>

            <br/>

            <div className='progress steps-progress-bx'>
                 <h5 className='upload-progress-text'>Upload Progress</h5>
                  <div className='steps-progress-count'>
                    1 of 7 steps completed
                  </div>
                  <div className='steps-progress'>
                   <div className='progress-step'>
                       <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}}  className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   </div>
            </div>
            
           <br/>
               <div className='upload-progress-bx'>
               
               <h5 className='upload-progress-text'>Upload Progress</h5>
                  <div className='steps-progress-count'>
                    1 of 7 steps completed
                  </div>
                  <div className='progress'>
                  <div style={{width:'70%'}} className='progress-bar'></div>
            </div> 
               </div>
             <br/>

             <div className='progress steps-progress-bx'>
             <h5 className='upload-progress-text'>Upload Progress</h5>
                  <div className='steps-progress-count'>
                     <img src={CheckCricle} /> <span>1</span> of 7 steps completed
                  </div>
                  <div className='steps-progress'>
                   <div className='progress-step'>
                       <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   </div>
            </div>

            <br/>

            <div className='progress steps-progress-bx upload-progress-failed'>
             <h5 className='upload-progress-text'><span>Progress failed </span><img src={CrossMark}/></h5>
                  <div className='steps-progress-count'>
                     <img src={CheckCricle} /> <span>6</span> of 7 steps completed
                  </div>
                  <div className='steps-progress'>
                   <div className='progress-step'>
                       <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar progress-bar-failed'></div>
                   </div>
                   </div>
            </div>

            <br/>

            <div className='steps-progress-number'>
            <div className='steps-progress-count'>
                     <span>1</span> of 5 steps completed
                  </div>
                 <div className='steps-progress-number-bx'>
                 <div className='step-bx'>
                      <img src={CheckCricle}/>
                  </div>
                  <div className='step-bx step-broder'><span>1</span></div>
                  <div className='step-bx step-broder'><span>2</span></div>
                  <div className='step-bx step-broder'><span>3</span></div>
                  <div className='step-bx step-broder'><span>4</span></div>
                  <div className='step-bx step-broder'><span>5</span></div>
                 </div>
            </div>

            <br/>
            <br/>

            <div className='progress steps-progress-bx'>
                  <div className='steps-progress-count'>
                     <img src={CheckCricle} /> <span>1</span> of 7 steps completed
                  </div>
                  <div className='steps-progress'>
                   <div className='progress-step'>
                       <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   </div>
            </div>

            <br/>
            <br/>

           <div className='progress-with-title progress-warning'>
            <div className='progress-title'>
                 <span>Storage</span> <span>320.90 GB FREE OF 830 GB</span>
            </div>
           <div className='progress'>
                  <div style={{width:'70%'}} className='progress-bar'></div>
            </div>
            <div className='progress-info'>
                 <div className='progress-info-inner'>
                    <div>
                    <span className='dot dot-warning'></span>
                     <span className='label'>OTHER</span>
                     <span className='value'>509.10 GB</span>
                    </div>
                    <div>
                    <span className='dot'></span>
                     <span className='label'>FREE</span>
                     <span className='value'>509.10 GB</span>
                    </div>
                 </div>
            </div>
           </div>

           <br/>

          <div className='progress-with-title'>
          <div className='progress-title'>
                 <span>Progress</span> <span className='text-show-progress'>60% <img src={Uparrow}/></span>
            </div>
          <div className='progress'>
                  <div style={{width:'70%'}} className='progress-bar'></div>
            </div>
            <span className='bottom-text'>You’ve been better this week.</span>
          </div>

          <br/>

          <div className='progress-with-title progress-center'>
          <div className='progress-title'>
                 <span>Progress</span> <span className='text-show-progress'>60% <img src={Uparrow}/></span>
            </div>
          <div className='progress'>
                  <div style={{width:'30%'}} className='progress-bar'></div>
            </div>
            <span className='bottom-text'>Please wait</span>
          </div>
          
          <br/>

          <div className='progress-with-title progress-error'>
          <div className='progress-title'>
                 <span>Progress</span> <span className='text-show-progress'>60% <img src={Downarrow}/></span>
            </div>
          <div className='progress'>
                  <div style={{width:'60%'}} className='progress-bar'></div>
            </div>
            <span className='bottom-text'>You’ve a bit down this week.</span>
          </div>

          <br/>


          <div className='progress-with-title progress-success upload-progress-right-value'>
          <div className='progress-title'>
                 <span>Upload Progress</span>
            </div>
          <div className='progress'>
                  <div style={{width:'60%'}} className='progress-bar'></div>
            </div>
            <span className='bottom-text'><strong>60% </strong>  complete</span>
          </div>

          <br/>

          <div className='progress-with-title progress-success upload-progress-left-value'>
          <div className='progress-title'>
                 <span>Upload Progress</span>
            </div>
          <div className='progress'>
                  <div style={{width:'60%'}} className='progress-bar'></div>
            </div>
            <span className='bottom-text'>27MB of 100MB</span>
          </div>

      </div>
    </>

  );
}

export default LinearProgress;
