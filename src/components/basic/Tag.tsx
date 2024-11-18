const Tag = ({ text = "", color = "004457" }) => {
  const bgColor = `#${color}33`; // Adding transparency manually for the background color
  const textColor = `#${color}`;

  return (
    <span
      style={{ backgroundColor: bgColor, color: textColor }}
      className="px-2 py-1 rounded-full w-fit"
    >
      {text}
    </span>
  );
};

export default Tag;
