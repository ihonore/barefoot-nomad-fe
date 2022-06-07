/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NotificationsPanel from './components/notifications/NotificationsPanel';
import ViewTripRequest from './components/notifications/ViewTripRequest';
import DataTable from './components/layouts/dashboardLayout/search/DataTable';
import GlobalSnackBar from './components/snackbar/GlobalSnackBar';
import history from './history';
import { openGlobalSnackBar } from './redux/actions/globalSnackBarActions';
// import search from './components/layouts/dashboardLayout/TopBar';
import Routes from './routes/Routes';

function App() {
  const dispatch = useDispatch();
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // const { status } = error.response;
      /* if (status === 401) {
        window.location = '/login';
      } */
      /*     if (status === 500) {
        dispatch(
          openGlobalSnackBar({
            message: 'Internal Server error!',
            severity: 'error',
          }),
        );
      } */
      /*    if (status === 404) {
        dispatch(
          openGlobalSnackBar({
            message: 'Resource you are looking for is not found!',
            severity: 'error',
          })
        );
      } */

      // if (status === 404) {
      //   dispatch(
      //     openGlobalSnackBar({
      //       message: 'Resource you are looking for is not found!',
      //       severity: 'error',
      //     })
      //   );
      // }

      return Promise.reject(error);
    }
  );
  return (
    <BrowserRouter history={history}>
      <ToastContainer />
      <ViewTripRequest />
      <GlobalSnackBar />
      <NotificationsPanel />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
