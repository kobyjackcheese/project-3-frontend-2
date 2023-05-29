import "../SimonStyle.css"
import { useState, useEffect } from "react";


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
  const [flashIdx, setFlashIdx] = useState(-1)

  /////////////////////////////
  //button presses
  /////////////////////////////

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

  const startGame = () => {
    if (!playing) {
      setPlaying(true)
      addNewColor()
      setScore(0)
    }
  }

  /////////////////////////////
  //compare sequence logic
  /////////////////////////////

  function addNewColor() {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    const updatedPattern = [...pattern, randomColor];
    setPattern(updatedPattern);
    // console.log(updatedPattern);
    setFlashIdx(flashIdx + 1)
  }

  const comparePatterns = (color) => {
    // console.log(`player choice: ${color}, being compaired to ${pattern[patternIdx]}`)
    if (pattern[patternIdx] === color) {
      // console.log('correct')
      setPatternIdx(patternIdx + 1)
      setPlayerIdx(playerIdx + 1)
    } else {
      // console.log("incorrect")
      gameLost()
      setPlaying(false)
    }
    // console.log(`${playerIdx} is being compaired to ${pattern.length}, and patternIdx ${pattern[patternIdx]} is being compaired to ${color}`)
    if (playerIdx === pattern.length && pattern[patternIdx] === color) {
      // console.log("all correct")
      setPlayerIdx(1)
      setPatternIdx(0)
      addNewColor()
      setScore(score + 1)
      // setFlashIdx(flashIdx + 1)
    }

  }

  function gameLost() {
    setPlayerIdx(1)
    setPatternIdx(0)
    setPattern([])
    setPlaying(false)
    alert(`you lost with a score of ${score}`)
    // console.log(`you lost with a score of ${score}`)
  }

  /////////////////////////////
  //show sequence logic
  /////////////////////////////

  const showPattern = () => {
    flashOnFunction()
  }

  function flashOnFunction() {
    // console.log(`flash idx: ${flashIdx}`)
    if (pattern[flashIdx] === "red") {
      setTimeout(() => {
        // console.log("red on")
        setRedFlash(true)
        flashOffFunction()
      }, "150")
    }
    if (pattern[flashIdx] === "blue") {
      setTimeout(() => {
        // console.log("blue on")
        setBlueFlash(true)
        flashOffFunction()
      }, "150")
    }
    if (pattern[flashIdx] === "green") {
      setTimeout(() => {
        // console.log("green on")
        setGreenFlash(true)
        flashOffFunction()
      }, "150")
    }
    if (pattern[flashIdx] === "yellow") {
      setTimeout(() => {
        // console.log("yellow on")
        setYellowFlash(true)
        flashOffFunction()
      }, "150")
    }
  }

  const flashOffFunction = () => {
    setTimeout(() => {
      // console.log("all off")
      setRedFlash(false)
      setBlueFlash(false)
      setGreenFlash(false)
      setYellowFlash(false)
      nextFlash()
    }, "500")
  }

  const nextFlash = () => {
    // console.log(`flashIdx: ${flashIdx + 1}, pattern length: ${pattern.length}`)
    if (flashIdx !== pattern.length) {
      // console.log('next flash')
      setFlashIdx(flashIdx + 1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (flashIdx === pattern.length) {
        setFlashIdx(-1)
        // console.log('setting flashidx to -1')
      }
      showPattern()
    }, "300")
  }, [flashIdx])

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
    </div>
  )
}

export default SimonGame