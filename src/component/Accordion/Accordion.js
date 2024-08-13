import './accordion.scss';
import './accordion-layout.scss';
import AccordionArrow from '../../assets/images/angle-small-down.svg';
import HomeIcon from '../../assets/images/home.svg';
import React, { useState } from 'react';


const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="accordion-item">
        <button className="accordion-header" onClick={onClick}>
            <i>
               <img src={HomeIcon}/>
            </i>
          <span className="accordion-title">{title}</span>
          <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}><img src={AccordionArrow}/></span>
        </button>
        {isOpen && (
          <div className="accordion-content">
            {children}
          </div>
        )}
      </div>
    );
  };

  const AccordionItem2 = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="accordion-item accordion-item-w-bg">
        <button className="accordion-header" onClick={onClick}>
            <i>
               <img src={HomeIcon}/>
            </i>
          <span className="accordion-title">{title}</span>
          <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}><img src={AccordionArrow}/></span>
        </button>
        {isOpen && (
          <div className="accordion-content">
            {children}
          </div>
        )}
      </div>
    );
  };

  const AccordionItem3 = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="accordion-item accordion-item-w-border">
        <button className="accordion-header" onClick={onClick}>
            <i>
               <img src={HomeIcon}/>
            </i>
          <span className="accordion-title">{title}</span>
          <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}><img src={AccordionArrow}/></span>
        </button>
        {isOpen && (
          <div className="accordion-content">
            {children}
          </div>
        )}
      </div>
    );
  };


  // Accordion component
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div>
        <AccordionItem
          title="Insert an informative title text here"
          isOpen={openIndex === 0}
          onClick={() => handleClick(0)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem>
        <AccordionItem
          title="Insert an informative title text here"
          isOpen={openIndex === 1}
          onClick={() => handleClick(1)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem>
        <AccordionItem
          title="Insert an informative title text here"
          isOpen={openIndex === 2}
          onClick={() => handleClick(2)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem>
        <br/>
        <AccordionItem2
          title="Insert an informative title text here"
          isOpen={openIndex === 3}
          onClick={() => handleClick(3)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem2>
        <AccordionItem2
          title="Insert an informative title text here"
          isOpen={openIndex === 4}
          onClick={() => handleClick(4)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem2>
        <AccordionItem2
          title="Insert an informative title text here"
          isOpen={openIndex === 5}
          onClick={() => handleClick(5)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem2>
        <br/>
        <AccordionItem3
          title="Insert an informative title text here"
          isOpen={openIndex === 6}
          onClick={() => handleClick(6)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem3>
        <AccordionItem3
          title="Insert an informative title text here"
          isOpen={openIndex === 7}
          onClick={() => handleClick(7)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem3>
        <AccordionItem3
          title="Insert an informative title text here"
          isOpen={openIndex === 8}
          onClick={() => handleClick(8)}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </AccordionItem3>
      </div>
    );
  };
  
  export default Accordion;
