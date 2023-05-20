import { Route, Routes } from "react-router-dom";
import SimonGame from "./SimonGame";
import Leaderboard from "../Leaderboard";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<SimonGame />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </main>
    )
}

export default Main