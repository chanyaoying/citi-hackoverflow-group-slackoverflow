import Link from 'next/link';
import { Avatar,ButtonGroup,Button } from '@mui/material';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/NavBanker'


const bankerClient = () => {

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

            <Button>View Profile</Button>
      
            <Button href='http://localhost:3000/chatBanker'>Chat</Button>
            </ButtonGroup>
    },
  }
  ];
  
  const rows = [
    { id: 1, lastName: 'Melisandre', firstName: 'Claris', email: 'claris@yahoo.com' },
    { id: 2, lastName: 'Clifford', firstName: 'Ferrara', email: 'ferrara@gmail.com' },
    { id: 3, lastName: 'Frances', firstName: 'Rossini', email: "rossini@hotmail.com" },
    { id: 4, lastName: 'Roxie', firstName: 'Harvey', email: 'harvey@specter.com' },

  ];

  return (
    <div>

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
      <Typography variant="h2" component="div" gutterBottom>My Clients</Typography>
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

export default bankerClient