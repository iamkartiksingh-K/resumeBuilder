import { useState, useContext } from "react";
import { experienceContext } from "../contexts/Information";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaPlus, FaRegTimesCircle, FaEdit } from "react-icons/fa";
import Button from "./Button";
import Heading from "./Heading";

function Experience() {
	const { experience, setExperience } = useContext(experienceContext);
	const [currentKey, setCurrentKey] = useState("default");
	const [formVisible, setFormVisible] = useState(false);
	const [formData, setFormData] = useState({
		companyName: "",
		position: "",
		startDate: "",
		endDate: "",
		location: "",
		description: "",
	});
	const generateKey = () => {
		return `${Math.floor(Date.now() * Math.random())}`;
	};
	const handleChange = (inputType) => {
		setFormData({ ...formData, [inputType]: event.target.value });
	};
	const submit = () => {
		const key = currentKey === "default" ? generateKey() : currentKey;

		setExperience({ ...experience, [key]: formData });
		setFormData({
			companyName: "",
			position: "",
			startDate: "",
			endDate: "",
			location: "",
			description: "",
		});
		setFormVisible(false);
		setCurrentKey(() => "default");
	};
	const cancelSubmit = () => {
		setFormData({
			companyName: "",
			position: "",
			startDate: "",
			endDate: "",
			location: "",
			description: "",
		});
		setFormVisible(false);
		setCurrentKey(() => "default");
	};
	const remove = (itemKey) => {
		const newList = { ...experience };
		delete newList[itemKey];
		setExperience(newList);
	};
	const edit = (key) => {
		setFormVisible(true);
		setFormData(experience[key]);
		setCurrentKey(key);
	};
	const form = (
		<div>
			<div className='flex flex-col my-4'>
				<label className='mb-2 text-lg font-semibold' htmlFor='company'>
					Company Name
				</label>
				<input
					id='company'
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={formData.companyName}
					onChange={() => handleChange("companyName")}
				/>
			</div>
			<div className='flex flex-col my-4'>
				<label
					className='mb-2 text-lg font-semibold'
					htmlFor='position'>
					Position
				</label>
				<input
					id='position'
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					type='text'
					value={formData.position}
					onChange={() => handleChange("position")}
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
			<div className='flex flex-col my-4'>
				<label
					className='mb-2 text-lg font-semibold'
					htmlFor='description'>
					Description
				</label>
				<textarea
					id='description'
					className='pl-2 shadow-none bg-gray-50 h-11 border'
					value={formData.description}
					onChange={() => handleChange("description")}
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
	const experienceList = (
		<div className='flex flex-col'>
			{Object.keys(experience).map((key) => {
				return (
					<div
						className='border text-lg font-medium h-13 flex items-center justify-between pl-2 mb-3'
						key={key}>
						<h2>{experience[key].companyName}</h2>
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
			<Heading title='Experience'>
				<PiBagSimpleFill className='text-lg' />
			</Heading>
			{formVisible ? form : experienceList}
		</div>
	);
}
export default Experience;
