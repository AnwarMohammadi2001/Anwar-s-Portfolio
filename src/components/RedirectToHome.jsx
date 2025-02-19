import React, { useEffect } from "react";
import Loading from "./canvas/Loading";
import { useNavigate } from "react-router-dom";

function RedirectToHome() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/");
	}, [navigate]);
	return <Loading />;
}

export default RedirectToHome;
