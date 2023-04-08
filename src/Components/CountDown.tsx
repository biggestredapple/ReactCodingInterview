import { ChangeEvent, useState } from "react"

interface timeType {
  min: number
  sec: number
}

const initialTime: timeType = {
  min: 0,
  sec: 0
}


const CountDownComponent = () => {
  const [ totalSecond, setTotalSecond ] = useState(0)
  const [ time, setTime ] = useState<timeType>(initialTime)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTime({
      ...time,
      [event.target.name]: event.target.value
    })
  }

  const handleStart = () => {
    const total = Number(time.min) * 60 + Number(time.sec);
    if(total < 0) return
    setTotalSecond(total)
  }

  const handlePause = () => {}

  const handleReset = () => {}

  const formatTime = (time: number) => {
    console.log(time)
    const minutes = Math.floor(time / 60);
    const second = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
  }

  return (
      <div>
        <input type="number" value={time.min} onChange={handleChange} name="min" />
        <label>Minutes</label>
        <input type="number" value={time.sec} onChange={handleChange} name="sec" />
        <label>Second</label>

        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause/Resume</button>
        <button onClick={handleReset}>Reset</button>

        <h1>{formatTime(totalSecond)}</h1>
      </div>
  )
}

export default CountDownComponent;