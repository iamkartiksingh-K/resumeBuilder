function Panel({ children, className }) {
	return (
		<div
			className={`border rounded-md drop-shadow-md p-2 my-3 ${className}`}>
			{children}
		</div>
	);
}
export default Panel;
