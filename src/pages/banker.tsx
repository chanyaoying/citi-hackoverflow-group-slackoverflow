import Link from 'next/link';
import { Avatar,ButtonGroup,Button } from '@mui/material';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/NavBanker'
import { useState } from 'react';
import ProfileModal from '../../components/ProfileModal';




const banker = () => {

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);   

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 300,
      renderCell : (params) => {return <ButtonGroup aria-label="outlined primary button group">

            <Button onClick={handleOpen}>View Profile</Button>

      
            <Button href='http://localhost:3000/chat'>Chat</Button>
            </ButtonGroup>
    },
  }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: "snow@gmail.com" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "cersei@yahoo.com" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "jaime@hotmail.com" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', email: "arya@gmail.com" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'daenerys@yahoo.com' },

  ];

  return (

    <div>
    <ProfileModal open={open} handleClose={handleClose} />

      <nav className='flex items-center flex-wrap bg-blue-300 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img className='object-scale-down' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Citibank.svg/2560px-Citibank.svg.png" alt="" width="200" height="300" />
          </a>
        </Link>
        <NavBar/>

        
        <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
      <Typography variant="h2" component="div" gutterBottom>Potential Clients</Typography>
      <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pemailSize={5}
        rowsPerPemailOptions={[5]}
        disableSelectionOnClick
      />
      </Box>
    </div>



  )
}

export default banker
