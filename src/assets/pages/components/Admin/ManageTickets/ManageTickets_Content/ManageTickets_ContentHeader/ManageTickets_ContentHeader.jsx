import React from 'react'
import { BiSearch } from "react-icons/bi";
import '../ManageTickets_Content.css'

const ManageTickets_ContentHeader = () => {
  return (
    <div className='manage_tickets-header'>
      <h1 className='manage_tickets-title'>Manage Tickets</h1>
      <div className='manage_tickets-activity'>
        <div className="manage-tickets-search">
          <input type="text" placeholder="Search..." />
          <BiSearch className="search-icon" />
        </div>
      </div>
    </div>
  )
}

export default ManageTickets_ContentHeader
