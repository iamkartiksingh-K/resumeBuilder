import { useContext } from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import {
	personalContext,
	educationContext,
	experienceContext,
} from "../contexts/Information";
const Resume = ({ className }) => {
	const { personalInfo } = useContext(personalContext);
	const { education } = useContext(educationContext);
	const { experience } = useContext(experienceContext);

	return (
		<div className={className} id='resume'>
			<div className='h-36 flex flex-col justify-around items-center bg-sky-950 text-white'>
				<h1 className='text-4xl font-semibold'>
					{personalInfo.fullName}
				</h1>
				<div className='flex justify-evenly w-full'>
					{personalInfo.email && (
						<p className='flex items-center'>
							<IoMailOutline className='mr-2' />
							{personalInfo.email}
						</p>
					)}
					{personalInfo.phoneNumber && (
						<p className='flex items-center'>
							<MdOutlinePhone className='mr-2' />
							{personalInfo.phoneNumber}
						</p>
					)}
					{personalInfo.address && (
						<p className='flex items-center'>
							<CiLocationOn className='mr-2' />
							{personalInfo.address}
						</p>
					)}
				</div>
			</div>
			<div className='container flex flex-col justify-start px-8'>
				<div className='w-full mt-12'>
					<p className='h-8 text-center text-2xl font-bold mb-3 bg-sky-100'>
						Education
					</p>
					<div className='text-lg'>
						{Object.keys(education).map((key) => {
							return (
								<div key={key} className='flex mb-4'>
									<div className='mr-9 w-2/5'>
										<p>
											{education[key].startDate}-
											{education[key].endDate}
										</p>
										<p>{education[key].location}</p>
									</div>
									<div>
										<p className='font-semibold'>
											{education[key].schoolName}
										</p>
										<p>{education[key].degree}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className='w-full mt-12'>
					<p className='h-8 text-center text-2xl font-bold mb-3 bg-sky-100'>
						Experience
					</p>
					<div className='text-lg'>
						{Object.keys(experience).map((key) => {
							return (
								<div key={key} className='flex mb-4'>
									<div className='mr-9 w-2/5'>
										<p>
											{experience[key].startDate}-
											{experience[key].endDate}
										</p>
										<p>{experience[key].location}</p>
									</div>
									<div>
										<p className='font-semibold'>
											{experience[key].companyName}
										</p>
										<p>{experience[key].position}</p>
										<p>{experience[key].description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Resume;
