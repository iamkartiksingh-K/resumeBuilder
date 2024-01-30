import { useContext } from "react";
import { personalContext } from "../contexts/Information";
import { FaUser } from "react-icons/fa";
import Heading from "./Heading";

function PersonalDetails() {
	const { personalInfo, setPersonalInfo } = useContext(personalContext);
	const handleChange = (inputType) => {
		setPersonalInfo({
			...personalInfo,
			[inputType]: event.target.value,
		});
	};
	return (
		<div>
			<Heading title='Personal Details'>
				<FaUser className='text-lg' />
			</Heading>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor=''>
					Full Name
				</label>
				<input
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={personalInfo.fullName}
					onChange={() => {
						handleChange("fullName");
					}}
				/>
			</div>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor=''>
					Email
				</label>
				<input
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='email'
					value={personalInfo.email}
					onChange={() => {
						handleChange("email");
					}}
				/>
			</div>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor=''>
					Phone Number
				</label>
				<input
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={personalInfo.phoneNumber}
					onChange={() => {
						handleChange("phoneNumber");
					}}
				/>
			</div>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor=''>
					Address
				</label>
				<input
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={personalInfo.address}
					onChange={() => {
						handleChange("address");
					}}
				/>
			</div>
		</div>
	);
}
export default PersonalDetails;
