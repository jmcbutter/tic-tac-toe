import "./Button.scss";

function Button(props) {
  const { width, size, color, children, ...restProps } = props;

  const style = {
    "--width": width,
  };

  function chooseSizeClass() {
    switch (size) {
      case "large":
        return "btn--large";
      default:
        return "btn--small";
    }
  }

  function chooseHeading(children) {
    switch (size) {
      case "large":
        return <h3>{children}</h3>;
      default:
        return <h4>{children}</h4>;
    }
  }

  function chooseColorClass() {
    switch (color) {
      case "cyan":
        return "btn--cyan";
      case "orange":
        return "btn--orange";
      default:
        return "btn--gray";
    }
  }

  function getClasses() {
    return ["btn", chooseSizeClass(), chooseColorClass()];
  }

  return (
    <button {...restProps} style={style} className={getClasses().join(" ")}>
      {chooseHeading(children)}
    </button>
  );
}

export default Button;
