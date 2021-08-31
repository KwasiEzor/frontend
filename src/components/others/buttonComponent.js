import { Button } from "react-bootstrap";
const buttonComponent = ({
  type = "button",
  title = "Commencer ici",
  size = "lg",
  className = "mt-4",
  variant = "outline-warning",
}) => {
  return (
    <Button type={type} variant={variant} className={className} size={size}>
      {title}
    </Button>
  );
};

export default buttonComponent;
