/* eslint-disable no-shadow */
import * as React from 'react';
// import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import TopBar from '../TopBar';

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

export default function DataTable() {
  // const globalUserSearchState = useSelector((state) => state.globalUserSearch);
  const { globalUserSearch } = useSelector((state) => state.globalUserSearch);
  // console.log('globalUserSearch++++++++++++++++++++', globalUserSearch);

  return (
    <TableContainer component={Paper}>

      <Table
        sx={{
          height: 480, width: '76%', marginTop: '5%', marginLeft: '21%',
        }}
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
          {globalUserSearch && globalUserSearch.map((globalUserSearch) => (
            <StyledTableRow key={globalUserSearch.id}>
              <StyledTableCell component="th" scope="row">
                {globalUserSearch.id}
              </StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.names}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.destinations}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.departLocation}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.tripReason}</StyledTableCell>
              <StyledTableCell align="center">{globalUserSearch.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
