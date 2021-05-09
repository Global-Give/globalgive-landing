import React from 'react';
import Head from 'next/head';
import ogpImage from '../../public/ogpImage.png';


export default function SEO({
  description = 'GlobalGive Token Official Webpage',
  author = 'GG Team',
  meta,
  title = 'GlobalGive Token - Charity Token',
  domainName
}) {

  const metaData = [
    {
      property: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: 'og:image',
      content: "https://" + domainName + ogpImage
    },
    {
      property: `twitter:card`,
      content: `summary`,
    },
    {
      property: `twitter:creator`,
      content: author,
    },
    {
      property: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}
      <link rel="icon" href="/favicon.png" type="image" sizes="50x50"/>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};