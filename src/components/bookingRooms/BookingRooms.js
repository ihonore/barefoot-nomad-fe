import React from 'react';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import BookingRoomsDisplay from './BookingRoomsDisplay';

const BookingRooms = () => (
  <div>
    <Sidebar />
    <TopBar />
    <BookingRoomsDisplay />
  </div>
);

export default BookingRooms;
