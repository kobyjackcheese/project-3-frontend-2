import "../SimonStyle.css"
import { useState } from "react";


const SimonGame = () => {
  const colors = ["red", "blue", "green", "yellow"]
  const [blueFlash, setBlueFlash] = useState(false)
  const [redFlash, setRedFlash] = useState(false)
  const [greenFlash, setGreenFlash] = useState(false)
  const [yellowFlash, setYellowFlash] = useState(false)
  const [pattern, setPattern] = useState([])
  const [playing, setPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [patternIdx, setPatternIdx] = useState(0)
  const [playerIdx, setPlayerIdx] = useState(1)

  function addNewColor() {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    const updatedPattern = [...pattern, randomColor];
    setPattern(updatedPattern);
    console.log(updatedPattern);
  }


  function greenClick() {
    setPlayerIdx(playerIdx + 1)
    comparePatterns(colors[2])
  }

  function redClick() {
    setPlayerIdx(playerIdx + 1)
    comparePatterns(colors[0])
  }

  function blueClick() {
    setPlayerIdx(playerIdx + 1)
    comparePatterns(colors[1])
  }

  function yellowClick() {
    setPlayerIdx(playerIdx + 1)
    comparePatterns(colors[3])
  }

  const comparePatterns = (color) => {
    // console.log(`player choice: ${color}, being compaired to ${pattern[patternIdx]}`)
    if (pattern[patternIdx] === color) {
      console.log('correct')
      setPatternIdx(patternIdx + 1)
      setPlayerIdx(playerIdx + 1)
    } else {
      console.log("incorrect")
      gameLost()
    }

    // console.log(`player idx: ${playerIdx}`)
    // console.log(`pattern length: ${pattern.length}`)
    // console.log(`${playerIdx} is being compaired to ${pattern.length}, and patternIdx ${pattern[patternIdx]} is being compaired to ${color}`)

    if (playerIdx === pattern.length && pattern[patternIdx] === color) {
      console.log("all correct")
      // console.log(patternIdx)
      setPlayerIdx(1)
      setPatternIdx(0)
      addNewColor()
      setScore(score + 1)
    }

  }


  function gameLost() {
    setPlayerIdx(1)
    setPatternIdx(0)
    setPattern([])
    setPlaying(false)
    console.log(`you lost with a score of ${score}`)
  }

  function test() {
    showPattern()
  }

  const showPattern = () => {
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "red") {
        setTimeout(() => {
          setRedFlash(true)
          console.log("red flash on")
        }, "1000")
        setTimeout(() => {
          setRedFlash(false)
          console.log("red flash off")
        }, "1000")
      }
      if (pattern[i] === "blue") {
        setTimeout(() => {
          setBlueFlash(true)
          console.log("blue flash on")
        }, "1000")
        setTimeout(() => {
          setBlueFlash(false)
          console.log("blue flash off")
        }, "1000")
      }
      if (pattern[i] === "green") {
        setTimeout(() => {
          setGreenFlash(true)
          console.log("green flash on")
        }, "1000")
        setTimeout(() => {
          setGreenFlash(false)
          console.log("green flash off")
        }, "1000")
      }
      if (pattern[i] === "yellow") {
        setTimeout(() => {
          setYellowFlash(true)
          console.log("yellow flash on")
        }, "1000")
        setTimeout(() => {
          setYellowFlash(false)
          console.log("yellow flash off")
        }, "1000")
      }
    }
  }
  
  function toggleRedTrue() {
    setRedFlash(true)
  }
  function toggleRedFlase() {
    setRedFlash(false)
  }


  const startGame = () => {
    // if (!playing) {
    //   setPlaying(true)
    //   addNewColor()
    // }
    addNewColor()
    setPlaying(true)
  }

// className={isActive ? "active" : "inactive"}
  return (
    <div className="buttonContainer">
      <div className="topButtons">
        <button className="greenButton"
          onClick={greenClick}></button>

        <button className={redFlash ? "redFlash" : "redButton"}
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
      <button onClick={test}>show pattern</button>
      <button onClick={toggleRedTrue}>redTrue</button>
      <button onClick={toggleRedFlase}>redFlase</button>

    </div>
  )
}

export default SimonGame