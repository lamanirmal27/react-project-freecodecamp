import Tabs from "./tabs";
//  this is a parent-component 
function RandomComponent() {
    return <div>Some Random content</div>
}

export default function TabTest() {
    const tabs =[
        {
            label: 'Tab 1',
            content: <div>This is tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is tab 2</div>
        },
        {
            label: 'Random tab',
            content: <RandomComponent/>
        }
    ]

    function handleChange(currentIndex) {
        console.log(currentIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}