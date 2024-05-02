import { useRef } from "react"

export default function ScrollToSection(){
    const scrollRef = useRef(null);
    const data = [
        {
            label: 'first card',
            style : {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'second card',
            style : {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'third card',
            style : {
                width: '100%',
                height: '600px',
                background: 'yellow'
            }
        },
        {
            label: 'fourth card',
            style : {
                width: '100%',
                height: '600px',
                background: 'blue',
                color: 'white'
            },
        },
        {
            label: 'fifth card',
            style : {
                width: '100%',
                height: '600px',
                background: 'black',
                color: 'white'
            }
        }
    ]

    function handleScroll(){
        scrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return <div>
        <h2>Scroll to particular section</h2>
        <button onClick={handleScroll}>Clik to scroll</button>
        {
            data.map((dataItem, index) => (
                <div ref={index === 4 ? scrollRef : null} key={index} style={dataItem.style}>
                    <h3>
                    {dataItem.label}
                    </h3>
                </div>
            ))
        }
    </div>
}