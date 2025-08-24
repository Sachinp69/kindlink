
// Button component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => (
    <button
        className={`bg-amber-600 hover:bg-amber-500 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;