// types manually created based on https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/#returns
interface RequestResponse {
  result: 'sucess' | 'error';
  msg: string;
}

type FunctionType<T> = (
  email: string,
  listFields: T,
) => Promise<RequestResponse>;

declare module 'gatsby-plugin-mailchimp' {
  const content: FunctionType<{locale: 'en' | 'pt'}>;

  export default content;
}
