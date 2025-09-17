import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>}/>
            </Routes>

        </div>
    )
}
