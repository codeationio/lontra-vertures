import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex justify-center py-4">
      <div className="flex items-center gap-x-10">
        <figure>
          <Image alt="linkedin" height={30} src="/images/linkedin.svg" width={35} />
          <Image alt="twitter" height={30} src="/images/twitter.svg" width={35} />
        </figure>
        <a href="https://www.lontraventures.com/">© 2023 by Lontra Ventures.</a>
      </div>
    </footer>
  );
};
export default Footer;
