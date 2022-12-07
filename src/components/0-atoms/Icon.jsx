import "./Icon.scss";

function Icon(props) {
  const { icon, ...restProps } = props;

  const { path, viewBox } = icon;

  return (
    <svg className="icon" viewBox={viewBox} {...restProps}>
      {path}
    </svg>
  );
}

export default Icon;
