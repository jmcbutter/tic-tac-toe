import "./Icon.scss";

function Icon(props) {
  const { icon, className, ...restProps } = props;

  const { path, viewBox } = icon;

  return (
    <svg
      className={`icon ${className ? className : ""}`}
      viewBox={viewBox}
      {...restProps}
    >
      {path}
    </svg>
  );
}

export default Icon;
