import React from 'react'
import audio from '../assets/mixkit-retro-arcade-lose-2027.mp3'
import ScoreBoard from './ScoreBoard'
import Login from '../components/Login'

function End({setTimer,score,int,startingTime}) {
  
  const ref = React.useRef()
  const [name,setName] = React.useState(null)
  const [username,setUsername] = React.useState(null)
  React.useEffect(() => { 
    ref.current.play()
  },[])


  return (
    <div className='score'>
    {username ? <ScoreBoard startingTime={startingTime} score={score} name={username}/> : <Login setUsername={setUsername}/>}
    <audio preload="auto" src="/src/assets/mixkit-retro-arcade-lose-2027.mp3" ref={ref}></audio>
    <h1>Score : {score}</h1>
    <button onClick={() => window.location.reload()}>Replay</button>
    </div>
  )
}

export default End