import { useRef, useState } from "react"
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const clickRef = useRef();
    //console.log(clickRef.current);
    useOutsideClick(clickRef, () => {
        setShowContent(false)
    })
    return <div ref={clickRef}>
        {
            showContent 
            ? <div>
                <h1>This is a random content</h1>
                <p>Please click outside to close this. It won't close if you click inside of this content</p>
            </div>

            : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
}