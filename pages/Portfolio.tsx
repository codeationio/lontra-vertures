import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
// import PortfolioBase from 'components/PortfoioBase';
import Image from 'next/image';

const Security = [
  { url: '/images/BalkanId-Logo.png', width: 150 },
  { url: '/images/IronCoreLabs-Logo.png', width: 400 },
  { url: '/images/snyk-logo.png', width: 100 },
  { url: '/images/symmetrySystems-logo.png', width: 200 },
];

const Software = [
  { url: '/images/2048-ventures-logo.png', width: 100 },
  { url: '/images/airtory-logo.png', width: 100 },
  { url: '/images/Molecula-logo.png', width: 200 },
  { url: '/images/niftory-logo.png', width: 200 },
  { url: '/images/oneModel-logo.png', width: 150 },
  { url: '/images/reactive-search-logo.png', width: 200 },
  { url: '/images/RackN-Logo.png', width: 200 },
  { url: '/images/Returnsafe_Logo.png', width: 200 },
  { url: '/images/stoplight.png', width: 200 },
  { url: '/images/voltron-logo.png', width: 300 },
];

const Crypto = [
  { url: '/images/dcSpark-logo.png', width: 150 },
  { url: '/images/helium-logo.png', width: 150 },
  { url: '/images/milkomeda-logo.png', width: 200 },
  { url: '/images/multicoin-capital.svg', width: 200 },
  { url: '/images/picante-logo.png', width: 200 },
  { url: '/images/quai.png', width: 180 },
  { url: '/images/ten31-logo.png', width: 100 },
  { url: '/images/UC-logo.png', width: 200 },
];

const Emerging = [
  { url: '/images/crowdout_logo.png', width: 100 },
  { url: '/images/dignifi-logo.png', width: 170 },
  { url: '/images/five_five-logo.png', width: 100 },
  { url: '/images/gxc-logo.png', width: 150 },
  { url: '/images/OrbitFab-Logo.png', width: 150 },
  { url: '/images/toucan-logo.png', width: 150 },
];

const Healthcare = [
  { url: '/images/docstation_logo.png', width: 170 },
  { url: '/images/frontrow-logo.png', width: 130 },
  { url: '/images/joshin-logo.png', width: 150 },
  { url: '/images/Ostiio_logo.png', width: 200 },
  { url: '/images/subjectwell-logo.png', width: 200 },
  { url: '/images/vital-flo-logo.png', width: 150 },
];

const Exits = [
  { url: '/images/atlas-logo.png', width: 150 },
  { url: '/images/peloton-logo.jpeg', width: 150 },
  { url: '/images/bitfusion-logo.png', width: 150 },
  { url: '/images/VMWare-logo.png', width: 150 },
  { url: '/images/experimentengine-logo.png', width: 250 },
  { url: '/images/Optimizely-logo.png', width: 150 },
  { url: '/images/olono_logo.png', width: 150 },
  { url: '/images/MediaFly-logo.jpeg', width: 100 },
];

const portfolio = [
  {
    items: Security,
    title: 'Security',
  },
  {
    items: Software,
    title: 'Software',
  },
  {
    items: Crypto,
    title: 'Crypto',
  },
  {
    items: Emerging,
    title: 'Emerging',
  },
  {
    items: Healthcare,
    title: 'Healthcare',
  },
  {
    items: Exits,
    title: 'Exits',
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="shaded bg-[url('/images/profile-background.jpg')] bg-contain">
        {portfolio.map((item) => (
          <div key={item.title} className="flex flex-wrap justify-center pt-20">
            <header className="mb-10 w-fit text-5xl">{item.title}</header>
            <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-5">
              {item.items.map((item, index) => (
                <figure key={index} className="bg-blur mr-5 flex items-center justify-center text-center">
                  <Image alt="" height={50} src={item.url} width={item.width} />
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Portfolio;
