const Button = (props) => {
  return (
    <button style={{ color: props.color }}>
      {props.color ? `${props.text} - ${props.color}` : props.text}
    </button>
  );
};

export default Button;
