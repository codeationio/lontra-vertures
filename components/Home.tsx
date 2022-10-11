import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-around p-10 md:flex-row md:items-stretch md:justify-between">
      <div className="grid">
        <div className="flex flex-col justify-end md:m-0 md:mt-20 md:items-baseline">
          <h1 className="mb-2 text-3xl text-primary md:text-5xl ">Our Approach</h1>
          <p className="text-md font-light text-white md:text-lg ">
            Embrace the long game. <br />
            High conviction, collaboration and bold ambitions drive success. <br />
            Together we win.
          </p>
        </div>
      </div>
      <div className="flex md:items-center">
        <Link href="/Portfolio">
          <a className="flex items-center">
            <h1 className="text-3xl text-white underline underline-offset-4 md:text-5xl">Portfolio</h1>
            <Image alt="right-arrow-icon" height={50} src="/images/right-arrow-icon.png" width={50} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
