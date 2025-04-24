import React, {useEffect} from 'react'
import './Employee_layout.css'
import Employee_Sidebar from '../components/Employee/Dashboard/EmployeeDashboard_Sidebar/EmployeeDashboard_Sidebar'

const Employee_Dashboard = () => {
  useEffect(() => {
    document.title = "MedConnect | Employee - Dashboard"
  })

  return (
    <div className='employee-body'>
      <div className='employee-display'>
        <Employee_Sidebar />
        
      </div>
      
    </div>
  )
}

export default Employee_Dashboard
