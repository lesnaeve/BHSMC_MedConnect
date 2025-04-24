import React, {useEffect} from 'react'
import './Employee_layout.css'
import SubmitTicket_Sidebar from '../components/Employee/SubmitTicket/SubmitTicket_Sidebar'

const Employee_SubmitTicket = () => {
  useEffect(() => {
    document.title = 'MedConnect | Employee - Submit Ticket'
  })

  return (
    <div className='employee-body'>
      <div className='employee-display'>
        <SubmitTicket_Sidebar />

      </div>
      
    </div>
  )
}

export default Employee_SubmitTicket
