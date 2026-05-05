import { useState } from 'react'

const StatisticLine = ({text, value}) => <p>{text} {value} {text === "positive" && "%"}</p>

const Statistics = ({good, neutral, bad, all}) => {

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={(good - bad)/all} />
      <StatisticLine text={"positive"} value={good/all * 100} />

    </div>
  )
}

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAll(updatedGood + neutral + bad);
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAll(updatedNeutral + good + bad);
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAll(updatedBad + good + neutral);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={handleGoodClick} />
      <Button text={"neutral"} onClick={handleNeutralClick} />
      <Button text={"bad"} onClick={handleBadClick} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App