/* eslint-disable no-shadow */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

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

export default function DataTable({ tableData }) {
  const { globalUserSearch } = useSelector((state) => state.globalUserSearch);

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: 480, width: '76%', position: 'absolute', top: '9vh', backgroundColor: '#', left: '19vw',
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

// import { DataGrid } from '@mui/x-data-grid';
// import { useSelector } from 'react-redux';
// import React, {useEffect, useState} from 'react';

// const [data, setData] = useState();

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// const columns = [
//   {
//     field: 'id', headerName: 'ID', width: 90, color: 'blue',
//   },
//   {
//     field: 'Accommodation',
//     headerName: 'Accommodation',
//     width: 180,
//     cellClassName: 'accomodation-column',
//     valueFormatter: (params) => params.value.name,
//   },
//   {
//     field: 'Destination',
//     headerName: 'Destination',
//     width: 150,
//     valueFormatter: (params) => params.value.city,
//   },
//   { field: 'departureDate', headerName: 'Departure Date', width: 110 },
//   { field: 'returnDate', headerName: 'Return Date', width: 110 },
//   { field: 'travel_reason', headerName: 'Travel Reason', width: 110 },
//   { field: 'tripType', headerName: 'Trip Type', width: 110 },
//   {
//     field: 'manager',
//     headerName: 'Manager',
//     width: 180,
//     valueFormatter: (params) => params.value.email,
//   },
//   {
//     field: 'status',
//     headerName: 'Status',
//     width: 120,
//     border: '1 solid black',
//   },
//   {
//     field: 'actions',
//     headerName: 'Actions',
//     width: 110,
//     cellRenderer: 'editButton',
//   },
// ];

// export default function DataTable() {
//   useEffect(() => {
//     const globalUserSearchState = useSelector((state) => state.globalUserSearch);
//     setData(globalUserSearchState)
//     console.log('globalUserSearch++++++++++++++++++++', globalUserSearchState);
//   }, []);
//   return (
//     <div style={{ height: 400, width: '100%', marginLeft: '20%' }}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         pageSize={7}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
