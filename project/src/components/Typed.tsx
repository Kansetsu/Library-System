import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import '../style/Typed.css'

export const TypedText = () => {
    // Create reference to store the DOM element containing the animation
    const el: any = useRef(null);
    // Create reference to store the Typed instance itself
    const typed: any = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Here you can safe your books',
                'Here you can see all the books you like',
                'Here you can see Renato torture me',
                'Serious, help me, please',
                `It's not a subliminar message`,
                'Can you, please, call the police ?',
                `I like Enconra Brasil`,
                `I don't know what say, so bye!`
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="">
            <h1>Vini Library</h1>

            <div className="">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </div>
    );
}

