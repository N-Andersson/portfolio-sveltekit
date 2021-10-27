import React from 'react';

import NextLink from 'next/link';

type Props = {
  to?: string;
  href?: string;
  className?: string;
  children: JSX.Element | Array<JSX.Element> | string;
};

const Link = ({ to, href, className, children, ...rest }: Props) => (
  <NextLink href={to || href || ''}>
    <a className={className} {...rest}>
      {children}
    </a>
  </NextLink>
);

export default Link;
