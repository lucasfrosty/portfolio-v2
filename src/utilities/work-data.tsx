import React from 'react';
import {FixedObject} from 'gatsby-image';
import {useTranslation, Trans} from 'react-i18next';
import {useStaticQuery, graphql, Link} from 'gatsby';

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
  descriptions: (string | React.ReactNode)[];
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

function getLinksMarkup(language: string) {
  const transformedLanguage = language === 'pt' ? 'pt-BR' : language;

  return [
    {
      url: `https://help.shopify.com/${transformedLanguage}/manual/shipping/setting-up-and-managing-your-shipping/shipping-profiles`,
      name: 'Shipping profiles',
    },
    {
      url: `https://help.shopify.com/${transformedLanguage}/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-delivery`,
      name: 'Local delivery',
    },
    {
      url: `https://apps.shopify.com/offset`,
      name: 'Offset app',
    },
    {
      url: `https://help.shopify.com/${transformedLanguage}/manual/shipping/shopify-shipping/shipping-labels/return-labels`,
      name: 'Return labels',
    },
  ];
}

export function useWorkData() {
  const {t, i18n} = useTranslation();
  const {ShopifyLogo, FirstILogo} = useStaticQuery(workDataQuery);

  const linksArray = getLinksMarkup(i18n.language);
  const [
    profilesLink,
    localDeliveryLink,
    offsetAppLink,
    returnLabelsLink,
  ] = linksArray.map(({url, name}) => (
    <Link to={url} target="_blank" key={name}>
      {name}
    </Link>
  ));

  const secondDescription = (
    <>
      {t('ShopifyDescription.second')} {profilesLink}, {localDeliveryLink},{' '}
      {offsetAppLink}, {returnLabelsLink}.
    </>
  );

  const shopify: Company = {
    name: 'Shopify',
    logo: ShopifyLogo.childImageSharp.fixed,
    descriptions: [t('ShopifyDescription.first'), secondDescription],
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
    descriptions: [t('1STiDescription.first')],
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
