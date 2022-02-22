/* eslint-disable jsx-a11y/anchor-has-content */
const Logo = ({ src, alt, width, href }: { src: string; alt: string; width: string; href: string }) => {
  return (
    <a href={href}>
      <img width={width} src={src} alt={alt} />
    </a>
  );
};

export default Logo;
