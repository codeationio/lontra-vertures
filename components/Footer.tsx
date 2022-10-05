import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <footer className="flex justify-center py-2">
      <div className="flex items-center gap-x-2">
        <span className="flex items-center justify-center">
          <Link href="https://www.linkedin.com/company/lontra-ventures">
            <a>
              <figure>
                <Image alt="linkedin" height={25} src="/images/linkedin.svg" width={30} />
              </figure>
            </a>
          </Link>
          <Link href="https://twitter.com/lontraventures">
            <a>
              <figure>
                <Image alt="twitter" height={25} src="/images/twitter.svg" width={30} />
              </figure>
            </a>
          </Link>
        </span>
        <a className={isHome ? 'text-white' : 'text-gray-500'} href="https://www.lontraventures.com/">
          © {new Date().getFullYear()} by Lontra Ventures.
        </a>
      </div>
    </footer>
  );
};
export default Footer;
