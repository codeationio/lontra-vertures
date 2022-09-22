import Image from 'next/image';
import Link from 'next/link';

const Security = [
  { logo: [{ href: 'https://www.balkan.id/', url: '/images/balkanId-logo.jpeg', width: 150 }] },
  { logo: [{ href: 'https://ironcorelabs.com/', url: '/images/IronCoreLabs-Logo.png', width: 400 }] },
  { logo: [{ href: 'https://snyk.io/', url: '/images/snyk-logo.png', width: 100 }] },
  { logo: [{ href: 'https://www.symmetry-systems.com/', url: '/images/symmetry-logo.png', width: 200 }] },
];

const Software = [
  { logo: [{ href: 'https://www.2048.vc/', url: '/images/2048-ventures-logo.png', width: 100 }] },
  { logo: [{ href: 'https://www.airtory.com/', url: '/images/airtory-logo.png', width: 100 }] },
  { logo: [{ href: 'https://www.molecula.com/', url: '/images/Molecula-logo.png', width: 200 }] },
  { logo: [{ href: 'https://niftory.com/', url: '/images/niftory-logo.png', width: 200 }] },
  { logo: [{ href: 'https://www.onemodel.co/', url: '/images/oneModel-logo.png', width: 150 }] },
  { logo: [{ href: 'https://www.reactivesearch.io/', url: '/images/reactive-search-logo.png', width: 200 }] },
  { logo: [{ href: 'https://rackn.com/', url: '/images/RackN-Logo.png', width: 200 }] },
  { logo: [{ href: 'https://www.returnsafe.com/', url: '/images/Returnsafe_Logo.png', width: 200 }] },
  { logo: [{ href: 'https://stoplight.io/', url: '/images/stoplight.png', width: 200 }] },
  { logo: [{ href: 'https://voltrondata.com/', url: '/images/voltron-logo.svg', width: 300 }] },
];

const Crypto = [
  { logo: [{ href: 'https://www.dcspark.io/', url: '/images/dcSpark-logo.png', width: 150 }] },
  { logo: [{ href: 'https://www.helium.com/', url: '/images/helium-logo.png', width: 150 }] },
  { logo: [{ href: 'https://www.milkomeda.com/', url: '/images/milkomeda-logo.png', width: 200 }] },
  { logo: [{ href: 'https://multicoin.capital/', url: '/images/multicoin-capital.svg', width: 200 }] },
  { logo: [{ href: 'https://picante.io/', url: '/images/picante-logo.png', width: 200 }] },
  { logo: [{ href: 'https://quai.network/', url: '/images/quai.png', width: 180 }] },
  { logo: [{ href: 'https://ten31.vc/home', url: '/images/ten31-logo.png', width: 100 }] },
  { logo: [{ href: 'https://unchained.com/', url: '/images/UC-logo.png', width: 200 }] },
];

const Emerging = [
  { logo: [{ href: 'https://www.crowdout.com/', url: '/images/crowdout_logo.png', width: 90 }] },
  { logo: [{ href: 'https://www.dignifi.com/', url: '/images/dignifi-logo.png', width: 170 }] },
  { logo: [{ href: ' https://join5x5.com/', url: '/images/five_five-logo.png', width: 100 }] },
  { logo: [{ href: 'https://gxc.io/', url: '/images/gxc-logo.jpg', width: 80 }] },
  { logo: [{ href: 'https://www.orbitfab.com/', url: '/images/orbitfab-logo.png', width: 150 }] },
  { logo: [{ href: 'https://www.toucan.events/', url: '/images/toucan-logo.png', width: 150 }] },
];

const Healthcare = [
  { logo: [{ href: 'https://docstation.co/', url: '/images/docstation_logo.png', width: 170 }] },
  { logo: [{ href: '', url: '/images/frontrow-logo.png', width: 130 }] },
  { logo: [{ href: 'https://joshin.com/', url: '/images/joshin-logo.png', width: 150 }] },
  { logo: [{ href: 'https://ostiio.com/', url: '/images/Ostiio_logo.png', width: 200 }] },
  { logo: [{ href: 'https://www.subjectwell.com/', url: '/images/subjectwell-logo.png', width: 200 }] },
  { logo: [{ href: 'https://www.vitalflohealth.com/', url: '/images/vital-flo-logo.png', width: 150 }] },
];

const Exits = [
  {
    logo: [
      { href: 'https://www.onepeloton.com/', url: '/images/atlas-logo.png', width: 150 },
      { href: 'https://www.onepeloton.com/', url: '/images/peloton-logo.jpeg', width: 150 },
    ],
  },
  {
    logo: [
      { href: 'https://www.vmware.com/', url: '/images/bitfusion-logo.png', width: 150 },
      { href: 'https://www.vmware.com/', url: '/images/VMWare-logo.png', width: 150 },
    ],
  },
  {
    logo: [
      { href: 'https://www.optimizely.com/', url: '/images/experimentengine-logo.png', width: 250 },
      { href: 'https://www.optimizely.com/', url: '/images/Optimizely-logo.png', width: 150 },
    ],
  },
  // { logo: [] },
  {
    logo: [
      { href: 'https://www.mediafly.com/', url: '/images/olono_logo.png', width: 150 },
      { href: 'https://www.mediafly.com/', url: '/images/MediaFly-logo.jpeg', width: 100 },
    ],
  },
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
      <div className="shaded">
        {portfolio.map((item) => (
          <div key={item.title} className="flex flex-wrap justify-center pt-20">
            <header className="mb-10 w-fit text-5xl">{item.title}</header>
            <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-5">
              {item.items.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <figure className="bg-blur flex min-h-[80px] w-full cursor-pointer flex-col items-center justify-center !space-y-4">
                    {item.logo.map((logo) => (
                      <Link key={index} href={logo.href}>
                        <Image alt={logo.href} height={50} src={logo.url} width={logo.width} />
                      </Link>
                    ))}
                  </figure>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Portfolio;
