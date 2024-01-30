import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Panel from "./Panel";

function Builder({ className }) {
	return (
		<div className={className}>
			<Panel>
				<PersonalDetails />
			</Panel>
			<Panel>
				<Education />
			</Panel>
			<Panel>
				<Experience />
			</Panel>
		</div>
	);
}
export default Builder;
