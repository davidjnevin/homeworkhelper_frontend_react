import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:8000/api/healthcheck";

const Healthcheck = () => {
	const [healthStatus, setHealthStatus] = useState("waiting");

	const fetchHealthcheck = async () => {
		try {
			const { data } = await axios.get(URL, {
				headers: {
					Accept: "application/json",
				},
			});
			setHealthStatus(data.healthy);
		}
		catch (error) {
			console.error(error.response);
			setHealthStatus(false);
		}
	};
	const healthcheck = () => {
		if (healthStatus == "waiting") {
			return (
				<p className='margin-top-1'></p>
			);
		}
		if (healthStatus) {
			return (
				<p className='margin-top-1'>The system is up and running</p>
			);
		}
		else {
			return (
				<p className='margin-top-1'>There is a problem.</p>
			);
		}
	};
	return (
		<section className='section text-center'>
			<button className='btn' onClick={fetchHealthcheck}>
				Run Healthcheck
			</button>
			{healthcheck()}
		</section >
	);
};

export default Healthcheck;
