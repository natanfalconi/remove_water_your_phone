import React from 'react';

interface IMetaTags {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

const MetaTags: React.FC<IMetaTags> = ({
  title = 'Remover água - Resolva esse problema de forma eficaz',
  description = 'Aprenda a remover a água da caixa de som do seu celular e restaure a qualidade do áudio em poucos passos simples',
  url = `${process.env.NEXT_PUBLIC_WEBSITE_LINK}`,
  image = ``,
  type = 'website',
}) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:type" content={type} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={url} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
    </head>
  );
};

export default MetaTags;