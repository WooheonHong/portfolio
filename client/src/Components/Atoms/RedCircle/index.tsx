const RedCircle = ({ fill, width, height }: { fill: string; width: string; height: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <circle cx="15" cy="15" r="7" fill={fill} stroke="#fd0000" strokeWidth="1" />
    </svg>
  );
};

export default RedCircle;
