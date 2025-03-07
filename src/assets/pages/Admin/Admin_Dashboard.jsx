import React, {useEffect} from 'react'
import './Admin_layout.css'
import Dashboard_Sidebar from '../components/Admin/Dashboard/Dashboard_Sidebar/Dashboard_Sidebar';
import Dashboard_Content from '../components/Admin/Dashboard/Dashboard_Content/Dashboard_Content';

const Admin_Dashboard = () => {
    useEffect(() => {
        document.title = "MedConnect | Admin - Dashboard";
    }, []);

  return (
    <div className='admin-body'>
      <div className='admin-display'>
        <Dashboard_Sidebar />
        <div className='admin-main-content'>
          <Dashboard_Content />
        </div>
      </div>
    </div>
  )
}

export default Admin_Dashboard
