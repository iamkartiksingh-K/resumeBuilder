import { useState, useContext } from "react";
import { educationContext } from "../contexts/Information";
import { IoSchool } from "react-icons/io5";
import { FaPlus, FaRegTimesCircle, FaEdit } from "react-icons/fa";
import Button from "./Button";
import Heading from "./Heading";

function Education() {
	const { education, setEducation } = useContext(educationContext);
	const [formVisible, setFormVisible] = useState(false);
	const [currentKey, setCurrentKey] = useState("default");
	const [formData, setFormData] = useState({
		schoolName: "",
		degree: "",
		startDate: "",
		endDate: "",
		location: "",
	});
	const generateKey = () => {
		return `${Math.floor(Date.now() * Math.random())}`;
	};
	const handleChange = (inputType) => {
		setFormData({ ...formData, [inputType]: event.target.value });
	};
	const submit = () => {
		const key = currentKey === "default" ? generateKey() : currentKey;
		setEducation({ ...education, [key]: formData });
		console.log(education);
		setFormData({
			schoolName: "",
			degree: "",
			startDate: "",
			endDate: "",
			location: "",
		});
		setFormVisible(false);
		setCurrentKey(() => "default");
	};
	const cancelSubmit = () => {
		setFormData({
			schoolName: "",
			degree: "",
			startDate: "",
			endDate: "",
			location: "",
		});
		setFormVisible(false);
		setCurrentKey(() => "default");
	};
	const remove = (itemKey) => {
		const newList = { ...education };
		delete newList[itemKey];
		setEducation(newList);
	};
	const edit = (key) => {
		setFormVisible(true);
		setFormData(education[key]);
		setCurrentKey(key);
	};
	const form = (
		<div>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor='school'>
					School
				</label>
				<input
					id='school'
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={formData.schoolName}
					onChange={() => handleChange("schoolName")}
				/>
			</div>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor='degree'>
					Degree
				</label>
				<input
					id='degree'
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={formData.degree}
					onChange={() => handleChange("degree")}
				/>
			</div>
			<div className='flex justify-between'>
				<div className='flex flex-col my-4 w-2/5'>
					<label
						className='mb-2 text-lg font-semibold'
						htmlFor='startDate'>
						Start Date
					</label>
					<input
						id='startDate'
						className='pl-2 shadow-none bg-gray-50 h-11 border'
						type='text'
						value={formData.startDate}
						onChange={() => handleChange("startDate")}
					/>
				</div>
				<div className='flex flex-col my-4 w-2/5'>
					<label
						className='mb-2 text-lg font-semibold'
						htmlFor='endDate'>
						End Date
					</label>
					<input
						id='endDate'
						className='pl-2 shadow-none bg-gray-50 h-11 border'
						type='text'
						value={formData.endDate}
						onChange={() => handleChange("endDate")}
					/>
				</div>
			</div>

			<div className='flex flex-col my-4'>
				<label
					className='mb-2 text-lg font-semibold'
					htmlFor='location'>
					Location
				</label>
				<input
					id='location'
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={formData.location}
					onChange={() => handleChange("location")}
				/>
			</div>
			<div className='flex justify-around'>
				<Button className='bg-gray-300 w-32' onClick={cancelSubmit}>
					Cancel
				</Button>

				<Button className='bg-green-300 w-32' onClick={submit}>
					Save
				</Button>
			</div>
		</div>
	);
	const schoolList = (
		<div className='flex flex-col'>
			{Object.keys(education).map((key) => {
				return (
					<div
						className='border rounded text-lg font-medium h-13 flex items-center justify-between pl-2 mb-3'
						key={key}>
						<h2>{education[key].schoolName}</h2>
						<div className='flex items-center mr-3 cursor-pointer'>
							<FaEdit
								className='mr-4'
								onClick={() => edit(key)}
							/>
							<FaRegTimesCircle
								className='text-red-600 h-12'
								onClick={() => remove(key)}
							/>
						</div>
					</div>
				);
			})}
			<Button
				className='bg-green-300 self-center w-32'
				onClick={() => setFormVisible(true)}>
				<FaPlus className='mr-2' />
				Add
			</Button>
		</div>
	);
	return (
		<div>
			<Heading title='Education'>
				<IoSchool className='text-lg' />
			</Heading>
			{formVisible ? form : schoolList}
		</div>
	);
}
export default Education;
