import React from 'react'
import './Dashboard_Content.css'

const info_details = [
    {
        title: "Total Tickets",
        number: "0",
    },
    {
        title: "Resolved Issues",
        number: "0",
    },
    {
        title: "Pending Requests",
        number: "0",
    }
]

const Dashboard_Card = () => {
  return (
    <div className='card-container'>
      {info_details.map((item) => (
        <div className="card" key={item.title}>
            <div className='card-title'>
                <h2>{item.title}</h2>
            </div>
            <div className='card-number'>
                <h1>
                    {item.number}
                </h1>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard_Card
