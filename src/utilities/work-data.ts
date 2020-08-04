import {FixedObject} from 'gatsby-image';
import {useTranslation} from 'react-i18next';
import {useStaticQuery, graphql} from 'gatsby';

export interface JobPosition {
  name: string;
  startDate: Date;
  endDate: Date;
  place: string;
  isPresent: boolean;
}

export interface Company {
  name: string;
  logo: FixedObject;
  jobPositions: JobPosition[];
  description: string;
}

export const workDataQuery = graphql`
  query {
    ShopifyLogo: file(relativePath: {eq: "shopify.png"}) {
      childImageSharp {
        fixed(width: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    FirstILogo: file(relativePath: {eq: "1sti.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export function useWorkData() {
  const {t} = useTranslation();
  const {ShopifyLogo, FirstILogo} = useStaticQuery(workDataQuery);
  const shopify: Company = {
    name: 'Shopify',
    logo: ShopifyLogo.childImageSharp.fixed,
    description: 'adoaijsdoias',
    jobPositions: [
      {
        name: 'Senior Web Developer',
        place: t('remote'),
        startDate: new Date(2020, 6),
        endDate: new Date(),
        isPresent: true,
      },
      {
        name: 'Web Developer',
        place: 'Ottawa, Ontario',
        startDate: new Date(2019, 0),
        endDate: new Date(2020, 5),
        isPresent: false,
      },
      {
        name: 'Front End Developer Intern',
        place: 'Ottawa, Ontario',
        startDate: new Date(2018, 5),
        endDate: new Date(2018, 11),
        isPresent: false,
      },
    ],
  };

  const firstI: Company = {
    name: '1STi',
    logo: FirstILogo.childImageSharp.fixed,
    description: 'adoaijsdoias',
    jobPositions: [
      {
        name: 'Front End Developer Intern',
        place: 'João Pessoa, Paraíba',
        startDate: new Date(2017, 7),
        endDate: new Date(2018, 2),
        isPresent: false,
      },
    ],
  };

  return {shopify, firstI};
}
