import { useState, useEffect } from 'react';
import  "./SimonStyle.css"

const Leaderboard = (props) => {

    const [leaderboard, setLeaderboard] = useState([]);
    const BASE_URL = "https://kobysimongamebackend.onrender.com/leaderboard";
    const [newForm, setNewForm] = useState({
        name: "",
        score: "",
    });


    const getLeaderboard = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allScores = await response.json()
            setLeaderboard(allScores)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getLeaderboard()
    }, [])

    function loaded(leaderboard) {
        return (
            leaderboard.map((leaderboard, index) => (
                <div className="scores" key={index}>
                    <h1 className="name">Name: {leaderboard.name}</h1>
                    <h1 className="score">Score: {leaderboard.score}</h1>
                </div>
            ))
        )
    }

    const handleChange = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value });
        // console.log(newForm)
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            getLeaderboard()
            e.target.reset();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <section>
                <h2>input score</h2>
                <form className="inputForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="name"
                        value={newForm.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="score"
                        value={newForm.score}
                        name="score"
                        onChange={handleChange}
                    />
                    <input type="submit" value="input person" />
                </form>
            </section>
            <div className="leaderboard">
                {leaderboard.length ? loaded(leaderboard) : <h2>Loading...</h2>}
            </div>
        </div>

    )
}

export default Leaderboard