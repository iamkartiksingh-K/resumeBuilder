function Button({ children, className, ...rest }) {
	const classes = `h-9 flex justify-center items-center border rounded cursor-pointer  text-base font-medium ${className} `;
	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	);
}
export default Button;
