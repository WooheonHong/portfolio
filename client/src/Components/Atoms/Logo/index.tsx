/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line react/require-default-props
const Logo = ({ src, alt, width, href, radius = "", backgroundColor = "" }: { src: string; alt: string; width: string; href: string; radius?: string; backgroundColor?: string }) => {
  return (
    <a href={href}>
      <img width={width} src={src} alt={alt} style={{ borderRadius: radius, backgroundColor }} />
    </a>
  );
};

export default Logo;
