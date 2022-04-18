import { animateScroll as scroll } from "react-scroll";
import * as FaIcons from "react-icons/fa";

import "../style/Home.css";

function BackToTop() {
    const onscroll = (el: any, listener: any) => {
        el.addEventListener("scroll", listener);
    };
    
    let backtotop = document.querySelector(".back-to-top");
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop!.classList.add("active");
            } else {
                backtotop!.classList.remove("active");
            }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    return (
        <button className="back-to-top" onClick={scroll.scrollToTop}>
            <FaIcons.FaArrowUp></FaIcons.FaArrowUp>
        </button>
    );
}

export default BackToTop;
