import React, {useEffect} from 'react'
import './Employee_layout.css'
import MyTicktets_Sidebar from '../components/Employee/MyTickets/MyTickets_Sidebar/MyTicktets_Sidebar'

const Employee_MyTickets = () => {
  useEffect(() => {
    document.title = 'MedConnect | Employee - My Tickets'
  })

  return (
    <div className='employee-body'>
      <div className='employee-display'>
        <MyTicktets_Sidebar />
      </div>
      
    </div>
  )
}

export default Employee_MyTickets
