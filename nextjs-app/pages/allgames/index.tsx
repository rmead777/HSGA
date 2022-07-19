import type { NextPage } from "next";
import { useState } from "react";
import ContactUsTemplate from "@ui/templates/pages/ContactUs";
import client, { ContactUsParams } from "../../src/clients/HSWM/index";
import DefaultPage from "../../src/Default";
import { useRouter } from "next/router";
import AllGamesTemplate from "@ui/templates/pages/AllGames/index"

export const PATH = "allgames";



const AllGames: NextPage = () => {
	const router = useRouter();
	const [errors, setErrors] = useState<string[]>([]);
	const [success, setSuccess] = useState<string[]>([]);



	return (
		<DefaultPage
			body={
				// <h1>Hello World</h1>
				<AllGamesTemplate  />
			}
		/>
	);
};

export default AllGames;
