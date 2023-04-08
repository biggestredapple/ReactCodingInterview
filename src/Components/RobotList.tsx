import React, { FormEvent, useEffect, useState } from "react";

const RobotList = () => {
  const [ input, setInput ] = useState("")
  const [ robotList, setRobotList ] = useState<Array<string>>([])

  useEffect(() => {
    console.log("Robot: ", robotList)
  }, [robotList])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`https://robohash.org/${input}`);
    setRobotList([...robotList, input]);
    setInput("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20", marginTop: "40px"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} placeholder="Generate Robot" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Enter</button>
      </form>
      <h2>Robot List</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {robotList && robotList.map((robot) => (
          <img alt={`Robot_${robot}`} src={`https://robohash.org/${robot}`} key={robot} width={200} height={200} onClick={() => robotList.filter((r) => r !== robot)} />
        ))}
      </div>
    </div>
  )
}

export default RobotList;