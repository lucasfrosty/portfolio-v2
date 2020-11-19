import {graphql, useStaticQuery} from 'gatsby';
import {useTranslation} from 'react-i18next';

// Blog posts
export const postsQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "YYYY-DD-MM")
          slug
          title
        }
      }
    }
  }
`;

// TODO: Find a plugin to generate the schema type definitions
interface PostsQueryType {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        date: string;
        slug: string;
        title: string;
      };
    }[];
  };
}

export function useLocalizedPosts() {
  const {i18n} = useTranslation();
  const {
    allMarkdownRemark: {nodes: postsFromGatsby},
  } = useStaticQuery<PostsQueryType>(postsQuery);

  const postsFromGatsbyAtCurrentLocale = postsFromGatsby
    .map(({frontmatter}) => frontmatter)
    .filter(({slug}) => slug.includes(`/${i18n.language}/`));

  return postsFromGatsbyAtCurrentLocale;
}

// Medium posts
export interface MediumPost {
  url: string;
  title: string;
  date: Date;
}

export const postsFromMedium: MediumPost[] = [
  {
    url:
      'https://medium.com/jaguaribetech/introdu%C3%A7%C3%A3o-ao-redux-usando-apenas-javascript-6d6d55bd9be4',
    title: 'Introdução ao Redux (usando apenas Javascript)',
    date: new Date(2018, 1, 17),
  },
  {
    url:
      'https://medium.com/@lucasfrosty/chega-de-divs-desnecess%C3%A1rias-nos-seus-componentes-use-fragments-c87906c7a7c6',
    title: 'Chega de divs desnecessárias nos seus componentes, use Fragments!',
    date: new Date(2017, 11, 12),
  },
  {
    url:
      'https://medium.com/jaguaribetech/melhorando-a-qualidade-do-seu-c%C3%B3digo-com-airbnb-style-guide-eslint-ba2979cabcaa',
    title:
      'Melhorando a qualidade do seu código com Airbnb Style Guide (+ESLint)',
    date: new Date(2017, 6, 28),
  },
];
