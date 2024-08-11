const Button = ({ children, type = 'btn-primary' }) => {
  return <button className={type}>{children}</button>;
};

export default Button;
