import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import locations from "../../locations";

function User() {
	// navigate = useNavigate()
	useEffect(() => {
		// navigate(locations.DASHBOARD)
		return () => {
			console.log("un mounting")
		}
	}, []);

	return (
		<div className="App">
            Vending Machine
		</div>
	);
}

export default User;
