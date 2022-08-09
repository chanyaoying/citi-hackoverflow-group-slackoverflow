import {Navbar} from '../../components/Navbar';
import Head from 'next/head';

const banker = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar></Navbar>
      <div className='bg-green-200'>Hello World</div>
    </div>

  )
}

export default banker
