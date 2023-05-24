import "../SimonStyle.css"
import { useState, useEffect } from "react";
const colors = ["red", "blue", "green", "yellow"]

const SimonGame = () => {
  const [pattern, setPattern] = useState([])
  const [playerPattern, setPlayerPattern] = useState([])
  const [playing, setPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [patternIdx, setPatternIdx] = useState(0)

  function addNewColor() {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    const updatedPattern = [...pattern, randomColor];
    setPattern(updatedPattern);
    console.log(updatedPattern);
    setPlayerPattern([])
  }

  function comparePatterns() {
    setPatternIdx(patternIdx + 1)
    console.log(`pattern idx: ${patternIdx}`)
    // console.log(playerPattern)
    for (let i = 0; i < pattern.length; i++) {
      console.log(pattern[i])
      if( pattern[i] = playerPattern.length - 1) {
        console.log("correct")
      } else {
        console.log("incorrect")
      }
    }
    
  }

  function greenClick() {
    const green = "green"
    const updatedPattern = [...playerPattern, green]
    setPlayerPattern(updatedPattern)
    comparePatterns()
  }

  function redClick() {
    const red = "red"
    const updatedPattern = [...playerPattern, red]
    setPlayerPattern(updatedPattern)
    comparePatterns()
  }

  function blueClick() {
    const blue = "blue"
    const updatedPattern = [...playerPattern, blue]
    setPlayerPattern(updatedPattern)
    comparePatterns()
  }

  function yellowClick() {
    const yellow = "yellow"
    const updatedPattern = [...playerPattern, yellow]
    setPlayerPattern(updatedPattern)
    comparePatterns()
  }


  const startGame = () => {
    // if (!playing) {
    //   setPlaying(true)
    //   addNewColor()
    // }
    addNewColor()
    setPlaying(true)
  }


  return (
    <div className="buttonContainer">
      <div className="topButtons">
        <button className="greenButton"
          onClick={greenClick}></button>

        <button className="redButton"
          onClick={redClick}></button>
      </div>
      <div className="bottomButtons">
        <button className="blueButton"
          onClick={blueClick}></button>

        <button className="yellowButton"
          onClick={yellowClick}></button>

        <button className="startButton"
          onClick={startGame}>
          start
        </button>
      </div>
      <div className="score">
        <h2>Score: {score}</h2>
      </div>

    </div>
  )
}

export default SimonGame