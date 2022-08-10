import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import * as React from 'react'

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  type linkArray = {href: string, label: string}[];

  const links: linkArray = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/questionnaire",
      label: "Questionnaire",
    },
    {
      href: "/chat",
      label: "Chat",
    },
    {
      href: "/example",
      label: "Example",
    },
  ];

  return (
    <>
      <Head>
        <title>Slackoverflow (change this)</title>
        <meta name="description" content="slackoverflow" />
        <link rel="icon" href="/" />
      </Head>
      <NavBar />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Pages
        </h1>

        <ul>
          {links.map(({href, label}) => (
            <li key={href}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>



        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {/* {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>} */}
        </div>
      </main>
    </>
  );
};

// here is how to create a component that can be used in the template
const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export default Home;
