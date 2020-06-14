import React from 'react';
import { renderStylesToString } from 'emotion-server';

export default {
  inlineCss: true,
  renderToHtml: (render, Comp) =>
    renderStylesToString(render(React.createElement(Comp))),
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <title>ImplementAI</title>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <meta name="developed-by" content="Rosie Zhao, Claudia Leung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Montreal's Biggest AI Hackathon. Apply Now!"
        />
        <meta
          property="og:image"
          content="https://www.hackduke.org/apply/site-thumbnail.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
