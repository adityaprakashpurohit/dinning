import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  to?: string;
  className?: string;
  fullWidth?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  children, 
  to, 
  className = '', 
  fullWidth = false,
  ...props 
}: ButtonProps) => {
  
  const baseClasses = "inline-flex items-center justify-center uppercase tracking-widest font-sans text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-terracotta text-white hover:bg-burnt-orange",
    secondary: "bg-charcoal text-white hover:bg-charcoal-light",
    outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    ghost: "text-charcoal hover:text-terracotta",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  const paddingClass = variant === 'ghost' ? "p-0" : "px-6 py-3";
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${paddingClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
