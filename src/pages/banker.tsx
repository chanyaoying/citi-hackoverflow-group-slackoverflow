import Link from 'next/link';
import { Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import Typography from '@mui/material/Typography';


const banker = () => {

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
    <div>
      <nav className='flex items-center flex-wrap bg-blue-300 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img className='object-scale-down' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Citibank.svg/2560px-Citibank.svg.png" alt="" width="200" height="300" />
          </a>
        </Link>

        <Avatar className='absolute top-7 right-5 h-16 w-16' alt="Remy Sharp" src="/banker.jpeg" />
        <Typography className='absolute top-1 right-1 h-1 w-200' variant="h6" component="div" gutterBottom>Welcome back Remy!</Typography>
        
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
          {...data}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>



  )
}

export default banker
