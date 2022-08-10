import Image from 'next/image';

const Home = () => {
  return (
    <div className="m-0 h-[calc(100vh_-_7.5rem)] bg-[url('/images/home-background-img.png')] bg-cover">
      <div className="flex h-full w-full flex-col items-center justify-around p-10 md:flex-row md:items-stretch md:justify-between">
        <div className="md:grid">
          <div className="flex flex-row  items-start ">
            <figure className="webImage">
              <Image alt="lontra-ventures-logo" height={100} src="/images/lontra-ventures-logo.png" width={105} />
            </figure>
            <figure className="md:hidden">
              <Image alt="lontra-ventures-logo" height={50} src="/images/lontra-ventures-logo.png" width={50} />
            </figure>
            <div className="ml-5">
              <h1 className="font-serif text-xl font-light md:text-7xl  ">Lontra Ventures</h1>
              <h3 className="text-xs font-light tracking-widest text-[#333333] md:text-xl">Tomorrow. Delivered today.</h3>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-end md:m-0 md:items-baseline ">
            <h1 className="mb-2 text-2xl text-[#ED5829] md:text-3xl ">Our Approach</h1>
            <p className="text-lg font-light text-[#333333] md:text-lg ">
              Embrace the long game. <br />
              High conviction, collaboration and bold ambitions drive success. <br />
              Together we win.
            </p>
          </div>
        </div>
        <div className="flex md:items-center">
          <a className="flex items-center " href="/Portfolio">
            <h1 className="text-3xl underline underline-offset-4 md:text-5xl">Portfolio</h1>
            <Image alt="right-arrow-icon" height={50} src="/images/right-arrow-icon.png" width={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
