export default function CustomButton({
  children,
  variant = 'contained',
  href,
  className = '',
  ...props
}) {
  const outline = variant === 'outlined';

  return (
    <a
      href={href}
      className={`btn ${outline ? 'btn-outline' : ''} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
