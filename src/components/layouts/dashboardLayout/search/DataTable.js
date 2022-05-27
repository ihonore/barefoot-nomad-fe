import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import setUserSearch from '../../../../redux/actions/tripRequestsActions';

// const columns = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'title', headerName: 'TITLE' },
//   { field: 'body', headerName: 'BODY' },
// ];
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'names', headerName: 'NAMES' },
  { field: 'destinations', headerName: 'DESTINATION' },
  { field: 'departLocation', headerName: 'DEPARTURE LOCATION' },
  { field: 'tripReason', headerName: 'TRIP REASON' },
  { field: 'status', headerName: 'STATUS' },
];

const DataTable = () => {
  const dispatch = useDispatch();
  const [tabledata, setTableData] = useState([]);
  console.log('tabledata++++++++++++++++++++', tabledata);

  const globalUserSearchState = useSelector((state) => state.globalUserSearch);
console.log('globalUserSearchState+++++++++++++++++++++++++++++++++++', globalUserSearchState);
  useEffect(() => {
    dispatch(setUserSearch());
  }, []);

  // useEffect(() => {

  //     fetch('https://elites-barefoot-nomad.herokuapp.com/api/v1/trips')
  //         .then((data) => data.json())
  //         .then((data) => setTableData(data))
  //         .then((data) => console.log('data++++++++++++', data));
  // });
  return (

    <div style={{
      marginTop: 100, marginLeft: -1000, height: 480, width: '80%',
    }}
    >
      <DataGrid
        rows={tabledata}
        columns={columns}
        pageSize={7}
      />
    </div>
  );
};

export default DataTable;
