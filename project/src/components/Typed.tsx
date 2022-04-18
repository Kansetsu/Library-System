import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "../style/Home.css";
import * as BsIcons from "react-icons/bs";

export const TypedText = () => {
    // Create reference to store the DOM element containing the animation
    const el: any = useRef(null);
    // Create reference to store the Typed instance itself
    const typed: any = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Here you can safe your books",
                "Here you can see all the books you like",
                "Here you can see Renato torture me",
                "Serious, help me, please",
                `It's not a subliminar message`,
                "Can you, please, call the police ?",
                `I love Enconra Brasil`,
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <div>
            <h1>Vini Library</h1>

            <div className="div-typed">
                <span style={{ whiteSpace: "pre" }} ref={el} />
            </div>
            <div>
                <a className="social-media" target="_blank" rel="noreferrer" href="https://github.com/Vinicius-AndradeM/Library-System">
                    <BsIcons.BsGithub />
                </a>

                <a className="social-media" target="_blank" rel="noreferrer" href="https://www.encora.com/">
                    <BsIcons.BsGlobe2 />
                </a>

                <a className="social-media" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/daitan-group/">
                    <BsIcons.BsLinkedin />
                </a>

                <a className="social-media" target="_blank" rel="noreferrer" href="mailto:vinicius802010@gmail.com">
                    <BsIcons.BsEnvelopeFill />
                </a>
            </div>
        </div>
    );
};
