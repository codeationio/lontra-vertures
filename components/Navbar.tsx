import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ href, title }) => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <li className="nav-item p-2">
      <Link href={href}>
        <a className={`nav-link p-0 ${isHome ? 'text-white' : 'text-gray-500'} hover:text-primary focus:text-primary`}>{title}</a>
      </Link>
    </li>
  );
};

const Navbar = ({ logo = true }) => {
  return (
    // eslint-disable-next-line prettier/prettier
    <nav className="navbar navbar-expand-lg navbar-light relative flex flex-wrap items-center justify-between hover:text-primary focus:text-primary">
      {logo && (
        <Link href="/">
          <a>
            <figure className="m-4 ml-10 flex cursor-pointer items-center">
              <Image
                alt="Lontra ventures blue logo"
                className="m-4 h-10"
                height={72}
                loading="lazy"
                src="/images/lontra-full-blue.png"
                width={350}
              />
              {/* <h1 className="ml-3 font-serif text-xl font-light md:text-2xl  ">Lontra Ventures</h1> */}
            </figure>
          </a>
        </Link>
      )}
      {!logo && <div className="m-4 ml-10 h-[72px] w-[350px]" />}
      <div className="container-fluid ml-auto flex flex-wrap items-center justify-between px-6">
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler border-0 bg-transparent py-2 px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button">
          <svg
            aria-hidden="true"
            className="w-6"
            data-icon="bars"
            data-prefix="fas"
            focusable="false"
            role="img"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              fill="currentColor"></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
          <ul className="list-style-none navbar-nav mr-auto flex flex-col pl-0">
            <NavItem href="/" title="Home" />
            <NavItem href="/Portfolio" title="Portfolio" />
            <NavItem href="/Technology" title="Technology" />
            <NavItem href="/LifeScience" title="Life Science" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
