import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import * as React from 'react'
import Button from '@mui/material/Button'
import citi from '../../components/images/citi.jpg'
import Image from 'next/image'


const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  type linkArray = {href: string, label: string}[];

  const links: linkArray = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/chat",
      label: "Chat",
    },
    {
      href: "/example",
      label: "Example",
    },
    {
      href: "/profile",
      label: "Profile",
    },
    {
      href: "/banker",
      label: "Banker",
    },
    {
      href:'/clientHome',
      label: 'clientHome'
    }
  ];

  return (
    
      <><Head>
      <title>Slackoverflow</title>
      <meta name="description" content="slackoverflow" />
      {/* <link rel="icon" href="/" /> */}
    </Head>
    <div className = 'mx-64'>
    <Image src = {citi} height={400} width={700}/>
    </div>
    <div className = ' w-screen text-center' >
    <Button variant='outlined' size = 'large' className ='mt-16'><Link href='/clientHome'>I'm a client</Link></Button>
    <Button variant='outlined' size = 'large' className ='mt-16 mx-8'><Link href='/banker'>I'm a banker</Link></Button>
    </div>
    </>
    
    
      
  );
};

export default Home;
