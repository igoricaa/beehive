import { Link as TransitionLink } from 'next-view-transitions';
// import { useLocale } from 'next-intl';

const Link = ({ href, children, ...rest }) => {
  // const locale = useLocale();
  // href = href.startsWith(`${locale}`) ? href : `/${locale}${href}`;
  return (
    <TransitionLink href={href} {...rest}>
      {children}
    </TransitionLink>
  );
};

export default Link;
