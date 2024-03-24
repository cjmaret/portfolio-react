import LiveCompensationImage from '../images/live-compensation-images/live-compensation-1.png';
import GoFundYourselfImage from '../images/gofundyourself-images/gofundyourself-homepage.png';

const featuredProjectCards = [
  {
    id: 2,
    image: LiveCompensationImage,
    alt: 'Live Compensation Workspace',
    description:
      'Live Compensation allows US municipal agencies to compare their compensation standards with other agencies, optimizing compensation strategies',
    pageLink: 'https://www.govinvest.com/live-compensation',
    languages: ['react', 'mongodb', 'net', 'typescript', 'css', 'html5'],
  },
  {
    id: 1,
    image: GoFundYourselfImage,
    alt: 'GoFundYourself fundraising site',
    description:
      'A fundraising site where users can create and manage fundraisers, or donate to fundraisers using credit card handling',
    pageLink: 'https://gofundyourself.lol',
    githubLink: 'https://github.com/cjmaret/gofundyourself-frontend',
  },
];

export default featuredProjectCards;
