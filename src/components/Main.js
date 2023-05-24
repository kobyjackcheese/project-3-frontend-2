import { Route, Routes } from "react-router-dom";
import "../App.css"

import SimonGame from "./SimonGame";
import Leaderboard from "../Leaderboard";

function Main() {
    return (
        <main className="mainContainer">
            <Routes>
                <Route path="/" element={<SimonGame />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </main>
    )
}

export default Main