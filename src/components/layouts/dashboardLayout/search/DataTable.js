/* eslint-disable no-shadow */
// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { loadLocations } from '../../../../redux/actions/locationsActions';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.red,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DataTable({ tableData,props }) {
  const { globalUserSearch } = useSelector((state) => state.globalUserSearch);
  const entireState = useSelector((state) => state);

  const locationsState = entireState.allLocations;
  const { locations } = locationsState;
  console.log('locations++++++++++++++++++++++++++', locations)
 
  const { tripRequest } = props;
  const tripRequestsState = entireState.allTripRequests;
  const { tripRequests } = tripRequestsState;
  // const { currentUser } = currentUserState 
  console.log('departLocationName++++++++++++++++++++++++++')
  const currentTripRequest = tripRequests.filter(
    (request) => request.id === tripRequest,
  );
  const {
    departLocation,
    destinations,
  } = currentTripRequest[0];
  
  const departLocationName = locations.filter(
    (location) => location.id === departLocation,
  )[0].locationName;
  console.log('departLocationName++++++++++++++++++++++++++')

  let destinationNames;

  if (destinations.length === 1) {
    const parsedDestinations = JSON.parse(destinations);
    destinationNames = locations.filter(
      (location) => location.id === parsedDestinations.destinationId,
    )[0].locationName;
  }
  if (destinations.length > 1) {
    destinationNames = destinations.map((destination) => {
      const parsedDestination = JSON.parse(destination);
      let thisLocationName;
      for (let i = 0; i < locations.length; i++) {
        if (parsedDestination.destinationId === locations[i].id) {
          thisLocationName = locations[i].locationName;
        }
      }
      return thisLocationName;
    });
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: 480, width: '76%', position: 'absolute', top: '9vh', backgroundColor: '#', left: '19vw', zIndex: 1,
      }}
    >

      <Table
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">NAMES</StyledTableCell>
            <StyledTableCell align="center">DESTINATIONS</StyledTableCell>
            <StyledTableCell align="center">DEPARTURE LOCATION</StyledTableCell>
            <StyledTableCell align="center">TRIP REASON</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData && tableData.map((globalUserSearch) => (
            <StyledTableRow key={globalUserSearch.id}>
              <StyledTableCell component="th" scope="row">
                {globalUserSearch.id}
              </StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.names}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.destinations}</StyledTableCell>
              <StyledTableCell align="center">{departLocationName}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.tripReason}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

