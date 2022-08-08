import Image from 'next/image';

const Security = [
  { logo: [{ url: '/images/BalkanId-Logo.png', width: 150 }] },
  { logo: [{ url: '/images/IronCoreLabs-Logo.png', width: 400 }] },
  { logo: [{ url: '/images/snyk-logo.png', width: 100 }] },
  { logo: [{ url: '/images/symmetrySystems-logo.png', width: 200 }] },
];

const Software = [
  { logo: [{ url: '/images/2048-ventures-logo.png', width: 100 }] },
  { logo: [{ url: '/images/airtory-logo.png', width: 100 }] },
  { logo: [{ url: '/images/Molecula-logo.png', width: 200 }] },
  { logo: [{ url: '/images/niftory-logo.png', width: 200 }] },
  { logo: [{ url: '/images/oneModel-logo.png', width: 150 }] },
  { logo: [{ url: '/images/reactive-search-logo.png', width: 200 }] },
  { logo: [{ url: '/images/RackN-Logo.png', width: 200 }] },
  { logo: [{ url: '/images/Returnsafe_Logo.png', width: 200 }] },
  { logo: [{ url: '/images/stoplight.png', width: 200 }] },
  { logo: [{ url: '/images/voltron-logo.svg', width: 300 }] },
];

const Crypto = [
  { logo: [{ url: '/images/dcSpark-logo.png', width: 150 }] },
  { logo: [{ url: '/images/helium-logo.png', width: 150 }] },
  { logo: [{ url: '/images/milkomeda-logo.png', width: 200 }] },
  { logo: [{ url: '/images/multicoin-capital.svg', width: 200 }] },
  { logo: [{ url: '/images/picante-logo.png', width: 200 }] },
  { logo: [{ url: '/images/quai.png', width: 180 }] },
  { logo: [{ url: '/images/ten31-logo.png', width: 100 }] },
  { logo: [{ url: '/images/UC-logo.png', width: 200 }] },
];

const Emerging = [
  { logo: [{ url: '/images/crowdout_logo.png', width: 100 }] },
  { logo: [{ url: '/images/dignifi-logo.png', width: 170 }] },
  { logo: [{ url: '/images/five_five-logo.png', width: 100 }] },
  { logo: [{ url: '/images/gxc-logo.png', width: 150 }] },
  { logo: [{ url: '/images/OrbitFab-Logo.png', width: 150 }] },
  { logo: [{ url: '/images/toucan-logo.png', width: 150 }] },
];

const Healthcare = [
  { logo: [{ url: '/images/docstation_logo.png', width: 170 }] },
  { logo: [{ url: '/images/frontrow-logo.png', width: 130 }] },
  { logo: [{ url: '/images/joshin-logo.png', width: 150 }] },
  { logo: [{ url: '/images/Ostiio_logo.png', width: 200 }] },
  { logo: [{ url: '/images/subjectwell-logo.png', width: 200 }] },
  { logo: [{ url: '/images/vital-flo-logo.png', width: 150 }] },
];

const Exits = [
  {
    logo: [
      { url: '/images/atlas-logo.png', width: 150 },
      { url: '/images/peloton-logo.jpeg', width: 150 },
    ],
  },
  {
    logo: [
      { url: '/images/bitfusion-logo.png', width: 150 },
      { url: '/images/VMWare-logo.png', width: 150 },
    ],
  },
  { logo: [{ url: '/images/experimentengine-logo.png', width: 250 }] },
  { logo: [{ url: '/images/Optimizely-logo.png', width: 150 }] },
  {
    logo: [
      { url: '/images/olono_logo.png', width: 150 },
      { url: '/images/MediaFly-logo.jpeg', width: 100 },
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
      <div className="shaded bg-[url('/images/profile-background.jpg')] bg-contain">
        {portfolio.map((item) => (
          <div key={item.title} className="flex flex-wrap justify-center pt-20">
            <header className="mb-10 w-fit text-5xl">{item.title}</header>
            <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-5">
              {item.items.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <figure className="bg-blur flex min-h-[80px] w-full flex-col items-center justify-center !space-y-4">
                    {item.logo.map((logo) => (
                      <Image key={index} alt="" height={50} src={logo.url} width={logo.width} />
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
