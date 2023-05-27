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
  const [flashIdx, setFlashIdx] = useState(0)
  const [flashing, setFlashing] = useState(false)

  function addNewColor() {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    const updatedPattern = [...pattern, randomColor];
    setPattern(updatedPattern);
    console.log(updatedPattern);
  }


  function greenClick() {
    if (!flashing) {
      setPlayerIdx(playerIdx + 1)
      comparePatterns(colors[2])
    }
  }

  function redClick() {
    if (!flashing) {
      setPlayerIdx(playerIdx + 1)
      comparePatterns(colors[0])
    }
  }

  function blueClick() {
    if (!flashing) {
      setPlayerIdx(playerIdx + 1)
      comparePatterns(colors[1])
    }
  }

  function yellowClick() {
    if (!flashing) {
      setPlayerIdx(playerIdx + 1)
      comparePatterns(colors[3])
    }
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
    setFlashIdx(flashIdx + 1)
    showPattern()
  }

  const showPattern = () => {
    setFlashing(true)
    flashOnFunction()
  }

  function flashOnFunction() {

    console.log(`flash idx: ${flashIdx}`)
    if (pattern[flashIdx] === "red") {
      setTimeout(() => {
        console.log("red on")
        setRedFlash(true)
        flashOffFunction()
      }, "250")
    }
    if (pattern[flashIdx] === "blue") {
      setTimeout(() => {
        console.log("blue on")
        setBlueFlash(true)
        flashOffFunction()
      }, "250")
    }
    if (pattern[flashIdx] === "green") {
      setTimeout(() => {
        console.log("green on")
        setGreenFlash(true)
        flashOffFunction()
      }, "250")
    }
    if (pattern[flashIdx] === "yellow") {
      setTimeout(() => {
        console.log("yellow on")
        setYellowFlash(true)
        flashOffFunction()
      }, "250")

    }

  }

  function flashOffFunction() {
    setTimeout(() => {
      console.log("all off")
      setRedFlash(false)
      setBlueFlash(false)
      setGreenFlash(false)
      setYellowFlash(false)
      nextFlash()
    }, "500")
  }

  function nextFlash() {
    console.log(`flashIdx: ${flashIdx + 1}, pattern length: ${pattern.length}`)
    if (flashIdx + 1 === pattern.length) {
      setFlashing(false)
      setFlashIdx(0)
    } else {
      flashReset()
    }
  }

  function flashReset() {
    setTimeout(() => {
      test()
    }, "500")
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

  return (
    <div className="buttonContainer">
      <div className="topButtons">
        <button className={greenFlash ? "greenFlash" : "greenButton"}
          onClick={greenClick}></button>

        <button className={redFlash ? "redFlash" : "redButton"}
          onClick={redClick}></button>
      </div>
      <div className="bottomButtons">
        <button className={blueFlash ? "blueFlash" : "blueButton"}
          onClick={blueClick}></button>

        <button className={yellowFlash ? "yellowFlash" : "yellowButton"}
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