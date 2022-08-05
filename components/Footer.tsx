import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-x-10">
        <figure>
          <Image alt="linkedin" height={30} src="/images/linkedin.svg" width={35} />
          <Image alt="twitter" height={30} src="/images/twitter.svg" width={35} />
        </figure>
        <p>© 2023 by Lontra Ventures.</p>
      </div>
    </div>
  );
};
export default Footer;
