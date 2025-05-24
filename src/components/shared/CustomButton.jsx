import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const buttonStyles = {
  borderRadius: '8px',
  padding: '12px 12px',
  fontSize: '1.125rem',
  fontWeight: 500,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

const StyledButton = styled(Button)(({ theme }) => buttonStyles);

const CustomButton = ({ 
  children, 
  variant = 'contained', 
  color = 'primary',
  href,
  target,
  rel,
  className,
  startIcon,
  size,
  ...props 
}) => (
  <StyledButton
    variant={variant}
    color={color}
    href={href}
    target={target}
    rel={rel}
    className={className}
    startIcon={startIcon}
    size={size}
    {...props}
  >
    {children}
  </StyledButton>
);

export default CustomButton; 