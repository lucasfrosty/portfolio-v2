/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

export const onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
  setHeadComponents([
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-RX1S5565FQ"
    ></script>,
  ]);

  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-RX1S5565FQ');
      `,
      }}
    />,
  ]);
};
