import Profile from 'components/Profile';

const data = [
  {
    description1:
      'Andrea builds the early-stage technology portfolio with passion and energy as well as focus and discipline. She embraces high-energy, ambitious founders who seek nothing less than to change their industry and potentially the world. The portfolio continues evolves with the challenges of our time. Investments focus on massive markets and often include AI, crypto, defense tech, data centers/energy, healthcare, security and space.',
    description2:
      'Andrea’s strengths reside in identifying emerging trends and finding the best people to deliver that innovation. Andrea works side-by-side founders in crafting messaging to best drive sales and achieve product/market fit. Over the years, Andrea has spent her time at innovation hubs such as YC, Techstars and Capital Factory as well as at universities including Texas, U Penn, and BGU. Prior to co-founding Lontra Ventures, Andrea ran a Global P&L for Dell and launched her career in the Media Investment Bank of Salomon Smith Barney. She holds an MBA from UT, Austin and degrees in Finance/Economics from UW-Madison where she graduated Phi Beta Kappa. After 25 years in Austin, Andrea is a proud Texan.',
    designation: 'Founder',
    heading: 'Technology',
    imageUrl: '/images/andrea-portrait.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/akalmans/',
    name: 'Andrea Besikof Kalmans',
    siteName: 'akalmans@lontraventures.com',
    siteUrl: 'akalmans@lontraventures.com',
  },
];

const Technology = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Profile
          key={index}
          description1={item.description1}
          description2={item.description2}
          designation={item.designation}
          heading={item.heading}
          imageUrl={item.imageUrl}
          linkedinUrl={item.linkedinUrl}
          name={item.name}
          siteName={item.siteName}
          siteUrl={item.siteUrl}
        />
      ))}
    </div>
  );
};
export default Technology;
