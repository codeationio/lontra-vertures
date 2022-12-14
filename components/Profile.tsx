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
  description1: string;
  description2: string;
  description3?: string;
  description4?: string;
};

const Profile: FC<Props> = ({
  description1,
  description2,
  description3,
  description4,
  designation,
  heading,
  imageUrl,
  linkedinUrl,
  name,
  siteName,
  siteUrl,
}) => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:gap-x-10">
      <div className="mt-20 flex flex-col items-center">
        <Image alt={imageUrl} className="overflow-hidden rounded-lg border shadow" height={200} src={imageUrl} width={170} />
        <div className="flex flex-col items-center">
          <a className="font-extralight text-primary" href={siteUrl}>
            {siteName}
          </a>
          <Link href={linkedinUrl}>
            <a>
              <Image alt="linkdin" height={40} src="/images/linkedin.svg" width={45} />
            </a>
          </Link>
        </div>
      </div>
      <div className="m-20 mx-10 flex flex-col">
        <div className="mb-10 ">
          <h1 className="mb-4 text-2xl font-light text-blue-900 md:text-6xl">{heading}</h1>
          <h2 className="font-light  text-primary md:text-2xl">{name} </h2>
          <h2 className="font-light text-primary md:text-2xl">{designation} </h2>
        </div>
        <div className="max-w-xs font-extralight md:max-w-3xl">
          <p className="mb-4">{description1}</p>
          <p className="mb-4">{description2}</p>
          <p className="mb-4">{description3}</p>
          <p className="mb-4">{description4}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
