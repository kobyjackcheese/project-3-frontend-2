import { useState, useEffect } from 'react';

const Leaderboard = (props) => {

    const [leaderboard, setLeaderboard] = useState([]);
    const BASE_URL = "http://localhost:4000/leaderboard";
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
                <div key={index}>
                    <h1>Name: {leaderboard.name}</h1>
                    <h1>Score: {leaderboard.score}</h1>
                    <hr></hr>
                </div>
            ))
        )
    }

    const handleChange = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value });
        console.log(newForm)
    }


    // const createScore = async (leaderboard) => {
    //     try {
    //         const newScore = await fetch(BASE_URL, {
    //             meathod: "post",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(leaderboard)
    //         });
    //         getLeaderboard()
    //         return(await newScore.json())


    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const newScore = await createScore()
    //     setNewForm({ name: "", score: "" })
    // }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
         const newScore = await fetch(BASE_URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newForm)
            });
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
                <form onSubmit={handleSubmit}>
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
            {leaderboard.length ? loaded(leaderboard) : <h2>Loading...</h2>}
        </div>

    )
}

export default Leaderboard