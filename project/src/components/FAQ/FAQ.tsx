import "./FAQ.css";
import { Data } from "./data/FAQData";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

function FAQ(props: any) {
    const [clicked, setClicked] = useState(null);

    const toggle = (index: any) => {
        if (clicked == index) {
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{color: "#ff0000"}}>
            <div className="accordion-section">
                <h2 data-aos="fade">F.A.Q</h2>
                <div className="container" data-aos="fade-up">
                    {Data.map((item, index) => {
                        return (
                            <>
                                <div className="wrap" onClick={() => toggle(index)} key={index}>
                                    <h1 className="question">{item.question}</h1>
                                    <span className="question-icon">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </div>
                                {clicked === index ? (
                                    <div className="dropdown-faq">
                                        <p>{item.answer}</p>
                                    </div>
                                ) : null}
                            </>
                        );
                    })}
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default FAQ;
