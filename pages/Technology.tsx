import Profile from 'components/Profile';

const data = [
  {
    description1:
      'Andrea builds the Technology portfolio with passion and energy as well as focus and discipline. At her core, she embraces founder friendly ideals and practices.Andrea partners with founders tackling massive market opportunities and explosive growth rates primarily targeting enterprise sales. The portfolio is primarily targeted in: AI/ML, developer tools, high performance computing, IT infrastructure, security and web optimization with delivery models ranging from SaaS and Enterprise Sales.',
    description2:
      'Andrea’s strengths reside in identifying emerging trends and finding the best people to deliver that innovation. In her advising capacity, Andrea works side-by-side founders in crafting messaging to best drive sales business development as well as to achieve product/market fit. Andrea spends her time at innovation hubs such as Techstars and Capital Factory. Prior to joining Lontra Ventures, Andrea ran a $700 M Global P&L for Dell and worked in the Media Investment Bank of Salomon Smith Barney in NYC. She holds an MBA from UT, Austin and degrees in Finance/Economics from UW-Madison where she graduated Phi Beta Kappa. Andrea builds the Technology portfolio with passion and energy as well as focus and discipline. At her core, she embraces founder friendly ideals and practices. Andrea partners with founders tackling massive market opportunities and explosive growth rates primarily targeting enterprise sales. The portfolio is primarily targeted in: AI/ML, developer tools, high performance computing, IT infrastructure, security and web optimization with delivery models ranging from SaaS and Enterprise Sales.',
    designation: 'Co-Founder',
    heading: 'Technology',
    imageUrl: '/images/Andrea-Hexagon.png',
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
