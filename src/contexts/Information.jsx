import { createContext, useState } from "react";
const personalContext = createContext();
const educationContext = createContext();
const experienceContext = createContext();

function Provider({ children }) {
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		address: "",
	});
	const [education, setEducation] = useState({});
	const [experience, setExperience] = useState({});
	return (
		<personalContext.Provider value={{ personalInfo, setPersonalInfo }}>
			<educationContext.Provider value={{ education, setEducation }}>
				<experienceContext.Provider
					value={{
						experience,
						setExperience,
					}}>
					{children}
				</experienceContext.Provider>
			</educationContext.Provider>
		</personalContext.Provider>
	);
}
export { Provider, personalContext, educationContext, experienceContext };
