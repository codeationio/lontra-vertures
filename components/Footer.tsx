import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex justify-center py-2">
      <div className="flex items-center gap-x-2">
        <span className="flex items-center justify-center">
          <figure>
            <Image alt="linkedin" height={25} src="/images/linkedin.svg" width={30} />
          </figure>
          <figure>
            <Image alt="twitter" height={25} src="/images/twitter.svg" width={30} />
          </figure>
        </span>
        <a href="https://www.lontraventures.com/">© 2023 by Lontra Ventures.</a>
      </div>
    </footer>
  );
};
export default Footer;
