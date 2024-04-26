import './styles.css'
export default function Suggestion({data, clickChange}){
    return <ul>
        {
            data && data.length 
            ? data.map((item, index) => <li onClick={clickChange} key={index}>{item}</li>)
            : null
        }
    </ul>
}