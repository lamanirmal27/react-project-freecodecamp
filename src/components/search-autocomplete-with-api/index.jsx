import { useEffect, useState } from "react"
import Suggestion from "./suggestion";
import './styles.css'

export default function SearchAutoComplete() {
    const [loading,setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showdropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilterdUsers] = useState([])

   

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if(query.length > 1) {
            const filteredData = users && users.length 
            ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
            : []
            setFilterdUsers(filteredData);
            setShowDropDown(true);
        }else{
            setShowDropDown(false);
        }
    }
        function clickChange(event) {
                setShowDropDown(false);
                setSearchParam(event.target.innerText);
                setFilterdUsers([]);
            }

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            //console.log(data);
            if(data && data.users && data.users.length) {
                setUsers(data.users.map((dataItem) => dataItem.firstName));
                setLoading(false);
                setErrors(null)
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setErrors(error.message);
        }
    }


    useEffect(() => {
        fetchListOfUsers(); 
    },[])

    return <div className="search-autocomplete-container">
        <div className="input-container">
        {
            loading 
            ? <h1>Data is loading!! please wait</h1>
            : <input 
            name="search-users"
            placeholder="Enter users here..."
            type="text" 
            onChange={handleChange}
            value={searchParam}
            />
        }
        </div>
        <div className="search-content">
        {
            showdropDown && <Suggestion data={filteredUsers} clickChange={clickChange}/>
        }
        </div>
        
    </div>
}