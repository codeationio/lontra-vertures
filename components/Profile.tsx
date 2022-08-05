import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  imageUrl: string;
  siteUrl: string;
  siteName: string;
  linkedinUrl: string;
  heading: string;
  name: string;
  designation: string;
  description: string;
};

const Profile: FC<Props> = ({ description, designation, heading, imageUrl, linkedinUrl, name, siteName, siteUrl }) => {
  return (
    <div className="flex flex-col justify-center md:h-auto md:flex-row md:gap-x-10">
      <div className="mt-20 flex flex-col items-center">
        <Image alt={imageUrl} height={200} src={imageUrl} width={170} />
        <div className="flex items-center">
          <a className="font-extralight text-green-600" href={siteUrl}>
            {siteName}
          </a>
          <Link href={linkedinUrl}>
            <Image alt="linkdin" height={40} src="/images/linkedin.svg" width={45} />
          </Link>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center md:items-start">
        <div className="mb-10 ">
          <h1 className="mb-4 text-4xl font-light md:text-6xl">{heading}</h1>
          <h2 className="font-light  md:text-2xl">{name} </h2>
          <h2 className="font-light md:text-2xl">{designation} </h2>
        </div>
        <div className="max-w-xs font-extralight md:max-w-md">
          <p className="mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
