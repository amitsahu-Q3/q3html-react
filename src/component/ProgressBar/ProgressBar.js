import './progressbar.scss';
import LinearProgress from './LinearProgress';
import CircularProgress from './CircularProgress';


function ProgressBar() {
  return (
    <>
      
      <div className="common-heading-bx">
            <h1>Progress Bar</h1>
           </div>
      <LinearProgress/>
      <CircularProgress/>
    </>

  );
}

export default ProgressBar;
