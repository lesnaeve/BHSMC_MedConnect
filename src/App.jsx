import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './assets/pages/Login';
import Admin_Dashboard from './assets/pages/Admin/Admin_Dashboard';
import Admin_ManageTickets from './assets/pages/Admin/Admin_ManageTickets';
import Admin_UserManagement from './assets/pages/Admin/Admin_UserManagement';
import Admin_Reports from './assets/pages/Admin/Admin_Reports';
import Admin_Announcements from './assets/pages/Admin/Admin_Announcements';
import Admin_FAQsManagement from './assets/pages/Admin/Admin_FAQsManagement';
import Employee_Dashboard from './assets/pages/Employee/Employee_Dashboard';
import Employee_MyTickets from './assets/pages/Employee/Employee_MyTickets';
import Employee_SubmitTicket from './assets/pages/Employee/Employee_SubmitTicket';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="/admin/dashboard" element={<Admin_Dashboard />} />
      <Route path="/admin/manage_tickets" element={<Admin_ManageTickets />} />
      <Route path="/admin/user_management" element={<Admin_UserManagement />} />
      <Route path="/admin/reports" element={<Admin_Reports />} />
      <Route path="/admin/announcements" element={<Admin_Announcements />} />
      <Route path="/admin/faqs_management" element={<Admin_FAQsManagement />} />
      <Route path="/employee/dashboard" element={<Employee_Dashboard />} />
      <Route path="/employee/my_tickets" element={<Employee_MyTickets />} />
      <Route path="/employee/submit_ticket" element={<Employee_SubmitTicket />} />
      </Routes>
    </Router>
  );
};


export default App
