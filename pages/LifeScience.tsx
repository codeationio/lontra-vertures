import Profile from 'components/Profile';

const data = [
  {
    description1:
      'Walter leads the Life Sciences Division of Lontra Ventures, specializing in business development, product strategy, marketing, national accounts, and channel management for life science companies. In addition Walter has several clients who provide value-added services to life science companies.',
    description2:
      'Walter speaks at industry conferences, has been quoted or mentioned in numerous publications, and has testified before Congress on health policy issues. He is a guest blogger for The University of Texas McCombs School of Business and The Wharton School at The University of Pennsylvania.',
    description3:
      'Prior to founding Lontra Ventures in 2008, Walter Kalmans was Vice President, Business Development for Oncology Therapeutics Network (OTN), a subsidiary of McKesson Corporation. During his tenure at OTN, Walter was responsible for OTN’s relationships with manufacturers and for delivering value-added services that helped manufacturers sell more product. Prior to joining OTN, Walter held senior commercial positions with Vignette, a software company, and Becton Dickinson & Company. Earlier in his career, he was a healthcare management consultant for several top firms, including Quintiles, Booz-Allen & Hamilton and Accenture.',
    description4:
      'Walter earned a Bachelor of Science in Finance from the Wharton School and a Bachelor of Arts in Molecular Biology from the College of Arts & Sciences, both at the University of Pennsylvania. He holds a Masters in Business Administration from the Fuqua School of Business at Duke University where he graduated as a JB Fuqua Scholar.',
    designation: 'Founder',
    heading: 'Life Sciences',
    imageUrl: '/images/Walter-Hexagon.png',
    linkedinUrl: 'https://www.linkedin.com/in/wkalmans/',
    name: 'Walter C Kalmans',
    siteName: 'wkalmans@lontraventures.com',
    siteUrl: 'wkalmans@lontraventures.com',
  },
];

const LifeScience = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Profile
          key={index}
          description1={item.description1}
          description2={item.description2}
          description3={item.description3}
          description4={item.description4}
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
export default LifeScience;
