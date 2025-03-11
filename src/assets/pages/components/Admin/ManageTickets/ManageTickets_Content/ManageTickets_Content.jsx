import React from 'react'
import './ManageTickets_Content.css'
import ManageTickets_ContentHeader from './ManageTickets_ContentHeader/ManageTickets_ContentHeader'
import ManageTickets_TicketList from './ManageTickets_TicketList/ManageTickets_TicketList'

const ManageTickets_Content = () => {
  return (
    <div className='manage_tickets-content'>
      <ManageTickets_ContentHeader />
      <ManageTickets_TicketList />
    </div>
  )
}

export default ManageTickets_Content
