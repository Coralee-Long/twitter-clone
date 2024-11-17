const Icon = ({ path, size = 24, label }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-label={label} // Accessible label for screen readers
      role="img"
      className="icon"
    >
      <path d={path}></path>
    </svg>
  );
};

export default Icon;
