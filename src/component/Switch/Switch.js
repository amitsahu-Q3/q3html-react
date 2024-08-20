import './switch.scss';
import '../../assets/css/comon.scss';


function Switch() {
    return (
        <>

            <div className="common-heading-bx">
             <h1>Switch</h1>
           </div>
             <div className='tabbar-main-bx'>
                <div>
                    <p>Main Component - Type 1</p>
                    <label class="switch switch-rounded">
                    <input type="checkbox"/>
                       <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <p>Main Component - Type 2</p>
                    <label class="switch switch-lg switch-rounded">
                    <input type="checkbox"/>
                       <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <p>Main Component - Type 3</p>
                    <label class="switch switch-line switch-rounded">
                    <input type="checkbox"/>
                       <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </>

    );
}

export default Switch;
