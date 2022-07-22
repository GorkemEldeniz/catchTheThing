import { useState,useEffect,useRef } from 'react'
import './css/game.css'
import GameBoard from './components/GameBoard'
import End from './components/End'
import Start from './components/Start'


// const randomFunc = () => {
//   let count = 0
//   let id = setInterval(() => {
//     console.log('selam')
//     count++
//   },1000)
//   if(count == 3) clearInterval(id)
// }

function App() {

  // const [timer,setTimer] = useState(2)
  // const [int,setInt] = useState()
  const [start,setStart] = useState(true)

  // if(timer <= 0){
  //   clearInterval(int)
  // }
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimer(pre => pre - 1);
  //   }, 1000)
  //   console.log('rendered app')
  //   setInt(interval)


  //   return () => clearInterval(interval);
  // }, []);


  // if(start){
  //   return (<div className='game'>
  //     <Start setStart={setStart}/>
  //   </div>)
  // }
  if(start) return <Start setStart={setStart}/>

  return (
    <div className='game'>
      <GameBoard/>
    </div>
  )
}

export default App
