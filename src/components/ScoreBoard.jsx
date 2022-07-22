import React from 'react'

function ScoreBoard({startingTime,score,name}) {

    const [ar, setAr] = React.useState(
      [
      {
      name : name,
      tarih: () => {
        const now = new Date()
        return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
      },
      time : startingTime,
      score
      },
      {
        name : 'Görkem',
        tarih: () => {
          const now = new Date()
          return  '2022.7.18' || `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
        },
        time : 12,
        score : 9
        },
        {
          name : 'Can',
          tarih: () => {
            const now = new Date()
            return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
          },
          time : 10,
          score : 9
          },
        {
          name : 'Emre',
          tarih: () => {
            const now = new Date()
            return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
          },
          time : 2,
          score : 20
          },
          {
            name : 'Emre',
            tarih: () => {
              const now = new Date()
              return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
            },
            time : 14,
            score : 20
            },
            {
              name : 'Emre',
              tarih: () => {
                const now = new Date()
                return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
              },
              time : 8,
              score : 20
              }
    ]);

    const sortedAr = ar.sort((a,b) => a.score == b.score ? a.time - b.time : b.score - a.score)
  return (
    <div className='scoreboard'>
        <table>
            <tbody>
              <tr>
               <th>Pos</th>
               <th>Name</th>
               <th>Date</th>
               <th>Time</th>
               <th>Score</th>
            </tr>
            {sortedAr.map((el,index) => (
              <tr key={index}> 
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.tarih()}</td>
                <td>{el.time}</td>
                <td>{el.score}</td> 
              </tr>)             
            )}
              {/* <tr>
                <td>2</td>
                <td>Garry</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Steave</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bob</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Andy</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr class="player">
                <td>6</td>
                <td>Tom</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
               </tr>
              <tr>
                <td>7</td>
                <td>John</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>8</td>
                
                <td>Michael</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>9</td>
                
                <td>Jack</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr>
              <tr>
                <td>10</td>
                
                <td>Jonnyyyyyyyyyyyy</td>
                <td>05.11.2020</td>
                <td>10:30</td>
                <td>34</td>
              </tr> */}
        </tbody>
        </table>
    </div>
  )
}

export default ScoreBoard