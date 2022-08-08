import Image from 'next/image';
import { FC } from 'react';

type Props = {
  heading: string;
  src: string;
  width: number;
};

const PortfolioBase: FC<Props> = ({ heading, src, width }) => {
  console.log('🚀 ~ file: PortfoioBase.tsx ~ line 10 ~ heading', heading);
  return (
    // <div className="flex flex-col flex-wrap  justify-center">
    //   <header className="text-3xl"> {heading} </header>
    //   <figure>
    //     <Image alt="" height={100} src={src} width="100%" />
    //   </figure>
    // </div>
    <div className="flex flex-wrap justify-center">
      <header className="w-fit text-3xl">{heading}</header>
      <div className="flex w-full  justify-center bg-black/40">
        {/* {Security.map((item, index) => ( */}
        <figure className="mr-5">
          <Image alt="" height={50} src={src} width={width} />
        </figure>
        {/* ))} */}
      </div>
    </div>
  );
};
export default PortfolioBase;
