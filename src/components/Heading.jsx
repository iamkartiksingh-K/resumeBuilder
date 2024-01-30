function Heading({ title, children }) {
	return (
		<div className='flex flex items-center mb-3'>
			{children}
			<h1 className='text-2xl font-bold ml-3'>{title}</h1>
		</div>
	);
}
export default Heading;
