import React from 'react'

let time = 3

function Start({setStart}) {
    const [id,setId] = React.useState()
    const [timer,setTimer] = React.useState(3)

    React.useEffect(() => {
        let id = setInterval(() => {
            time -= 1
            setTimer(time)
        },1000)
        setId(time)
        return () => clearInterval(id)
    },[])

    if(time == 0) {
        clearInterval(id)
        setStart(false)
    }

  return (
    <div className='game'>
        <h1>Game will start  {timer} seconds later</h1>
    </div>
  )
}

export default Start