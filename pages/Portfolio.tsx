import { type Company, DigitalAssets, Emerging, Exits, Healthcare, Security, Software } from 'config/portfolios';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type PortfolioList = {
  title: string;
  companies: Company[];
};

const portfolio: PortfolioList[] = [
  {
    companies: Security,
    title: 'Security',
  },
  {
    companies: Software,
    title: 'Software & AI',
  },
  {
    companies: Healthcare,
    title: 'Healthcare',
  },
  {
    companies: Emerging,
    title: 'Robotics / Space',
  },
  {
    companies: DigitalAssets,
    title: 'Digital Assets',
  },
  {
    companies: Exits,
    title: 'Exits',
  },
];

const Portfolio: FC<{ item: PortfolioList }> = ({ item }) => {
  return (
    <div key={item.title} className="flex flex-wrap justify-center pt-20">
      <header className="mb-10 w-fit text-5xl text-primary">{item.title}</header>
      <div className="grid w-full grid-cols-1 gap-5 p-10 md:grid-cols-2 lg:grid-cols-5">
        {item.companies.map((item, index) => (
          <div key={index} className={`flex items-center justify-center rounded ` + item.className ?? ''}>
            <figure className="bg-blur flex min-h-[80px] w-full cursor-pointer flex-col items-center justify-center !space-y-4">
              {item.logo.map((logo, i) => (
                <>
                  {i > 0 && (
                    <p className="text-4xl capitalize text-primary">
                      <span>&darr;</span>
                    </p>
                  )}
                  <Link key={i} href={logo.href ?? '#'}>
                    <a>
                      <Image
                        alt={logo.href}
                        height={item.logo.length > 1 ? 80 : 140}
                        objectFit="contain"
                        src={logo.url}
                        width={logo.width}
                      />
                    </a>
                  </Link>
                </>
              ))}
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioList = () => {
  return (
    <>
      <div className="shaded">
        {portfolio.map((item) => (
          <Portfolio key={item.title} item={item} />
        ))}
      </div>
    </>
  );
};
export default PortfolioList;
