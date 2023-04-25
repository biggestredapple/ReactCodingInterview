import { ChangeEvent, useRef, useState } from "react"

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
  const intervalRef = useRef<number | null>(null)
  // const [  isInterval, setIsInterval ] = useState<NodeJS.Timeout | null>(null)

  // const [ isInterval, setIsInterval ] = useState>(null)

  if(totalSecond === 0 && intervalRef.current) {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

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

    if(intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = window.setInterval(() => setTotalSecond(prev => --prev), 1000)
    // intervalRef.current = window.setInterval(() => setTotalSecond(prev => --prev), 1000)

  }

  const handlePause = () => {
    if(intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const handleReset = () => {
    intervalRef.current = window.setInterval(() => setTotalSecond(prev => --prev), 1000)
  }

  const formatTime = (time: number) => {
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