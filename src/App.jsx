import Builder from "./components/Builder";
import Resume from "./components/Resume";
function App() {
	return (
		<div className='container mx-auto py-2 flex h-full'>
			<Builder className='w-2/4 mr-7' />
			<Resume className='w-2/4 ml-7 my-3 border' />
		</div>
	);
}
export default App;
