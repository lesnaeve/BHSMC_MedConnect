import React, {useEffect} from 'react'
import './Employee_layout.css'
import SubmitTicket_Sidebar from '../components/Employee/SubmitTicket/SubmitTicket_Sidebar/SubmitTicket_Sidebar'
import SubmitTicket_Content from '../components/Employee/SubmitTicket/SubmitTicket_Content/SubmitTicket_Content'

const Employee_SubmitTicket = () => {
  useEffect(() => {
    document.title = 'MedConnect | Employee - Submit Ticket'
  })

  return (
    <div className='employee-body'>
      <div className='employee-display'>
        <SubmitTicket_Sidebar />
        <div className='employee-main-content'>
          <SubmitTicket_Content />
        </div>

      </div>
      
    </div>
  )
}

export default Employee_SubmitTicket
