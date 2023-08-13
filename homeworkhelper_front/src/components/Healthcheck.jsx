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
		}
	};

	return (
		<section className='section text-center'>
			<button className='btn' onClick={fetchHealthcheck}>
				Healthcheck
			</button>
			{healthStatus == "waiting" ? <p className='dad-joke'>Waiting for response...</p> : null}
			{healthStatus ? <p className='dad-joke' > The system is up and running</p> : <p className='dad-joke'>There is a problem.</p>
			}
		</section >
	);
};

export default Healthcheck;
