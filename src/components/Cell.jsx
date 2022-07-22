import React from 'react'
import audio from '../assets/mixkit-game-gun-shot-1662.mp3'

function Cell({col,row,pos,random,setScore,setTimer,posBomb,setnumberofBomb,numberofBomb}) {


    const handle = (row,col) => {
        const player = new Audio(audio)
        player.play()
        if(numberofBomb == 200) setnumberofBomb(300)
        else setnumberofBomb(pre => pre + 1)
        if(pos[0] == row && pos[1] == col){
          random()
          setTimer(pre => pre + 1)
          setScore(pre => pre+1)
      }
      else{
          setTimer(pre => pre - 5)
          setScore(pre => pre - 1)
          random()
      }
        posBomb.map(([colB,rowB])  => {
          if(rowB == row && colB == col){
            random()
            setTimer(pre => pre - 10)
            setScore(pre => pre - 5)            
         }
        })
    }
    
  return (
    // 
    <span onClick={() => handle(row,col)} className={`cell ${(row == pos[0] && col == pos[1]) ? 'target' : posBomb.map(([colB,rowB]) => rowB == row && colB == col ? 'bomb' : '') }`}></span>
    // <span onClick={() => handle(row,col)} className={`cell  ${
    //   posBomb.find(([colB,rowB]) => rowB == row && colB == col)[0] == col && posBomb.find(([colB,rowB]) => rowB == row && colB == col)[1] == row ? 'bomb' : '' 
    // }`} ></span>
  )
}

export default Cell