import { useEffect, useState } from "react"
import User from "./User.jsx";
import './styles.css'

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(){
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        
        if(data) {
            setUserData(data);
            setLoading(false);
            setUserName('');
        }
    }

    useEffect(() => {
        fetchGithubUserData();
      }, []);

    if(loading) {
        return <h1>Data is loading, please wait!!</h1>
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input 
            name="search-by-usename"
            type="text"
            placeholder="Enter github username..."
            value={userName}
            onChange={e => setUserName(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        <div className="content-data">
            {
                userData !== '' ? <User user={userData}/> : null
            }
        </div>
    </div>
} 