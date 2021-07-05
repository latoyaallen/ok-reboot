const Button = ({
  submit,
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

Button.propTypes = {
  submit: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  submit: false,
};

export default Button;
