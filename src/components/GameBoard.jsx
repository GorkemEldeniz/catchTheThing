import React,{useState,useEffect} from 'react'
import Cell from './Cell'
import End from './End'

const row = 15
const column = 15
const table = []
//<Cell col={column} row={row} key={`${r}-${c}`}/>
const createTable = () => {
    for(let r = 0 ; r < row ; r++){
        for(let c = 0 ; c < column ; c++){
            table.push([r,c])
        }
    }
}

const randomFunc = () => {
    let count = 0
    let id = setInterval(() => {
      console.log('selam')
      count++
    },1000)
    if(count == 3) clearInterval(id)
  }

createTable()
function GameBoard() {
    const [score,setScore] = React.useState(0)
    const [pos,setPos] = React.useState([])
    const [posBomb,setposBomb] = React.useState([])  
    const [numberofBomb,setnumberofBomb] = React.useState(10)
    const [timer,setTimer] = useState(100) // initial state
    const [int,setInt] = useState()
    const [start,setStart] = useState(true) // start state
    const [startingTime,setstartingTime] = useState(0) //record user time during game
  
    if(timer <= 0){
      clearInterval(int)
    }
    useEffect(() => {
      let interval = setInterval(() => {
        setstartingTime(pre => pre+1)
        setTimer(pre => pre - 1);
      }, 1000)
      console.log('rendered app')
      setInt(interval)
      return () => clearInterval(interval);
    }, []);



    const random = () => {
        //burada row ve col bomba yerinden farklı olacak!!
        let row = Math.floor(Math.random() * 15)
        let col = Math.floor(Math.random() * 15)
        const set = new Set()
        while(set.size <= numberofBomb){
          let bombRow = Math.floor(Math.random() * 15)
          let bombCol = Math.floor(Math.random() * 15)    
          set.add([bombCol,bombRow])
        }
        set.delete([col,row])
        set.delete([row,col])
        console.log(set.has([col,row]))    
        setposBomb([...set])
        setPos([row,col])
    }

    React.useEffect(() => {
        random()
    },[])

    if(timer <= 0){
        return <End setTimer={setTimer} startingTime={startingTime} score={score}/>
    }

    return (
            <>
            <h1>{score}</h1>
            <h1>{timer}</h1>
            <div className='board'>
            {table.map(([r,c],index) => <Cell pos={pos} posBomb={posBomb} timer={timer} setTimer={setTimer} setScore={setScore} setnumberofBomb={setnumberofBomb} numberofBomb={numberofBomb} random={random} key={index} row={r} col={c} ></Cell>)}
            </div>
            </>
        )
}

export default React.memo(GameBoard)