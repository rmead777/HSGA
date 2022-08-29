import type { NextPage } from "next";
import HomePage from "../src/templates/pages/Home/index";
import DefaultPage from "../src/Default";
import { useEffect, useState } from "react";
import client from "../src/clients/HSWM/index";
import { GameInfo, UserInfo } from "../src/clients/HSWM/types";
import { useRouter } from 'next/router'

const POLL_FREQUENCY = 5 * 1000;

const Home: NextPage = () => {
	const router = useRouter()
	const [featuredGameInfo, setGameInfo] = useState<GameInfo>(
        {
            "id": "76d9bfe8-2576-11ed-8af0-0aad822255c7",
            "title": "High Score Wins Money",
            "description": "Loading Game...",
            "author": "",
            "image": "https://hswm.imgix.net/images/HS_reverse_icon.jpg?auto=format&auto=compress",
            "uri": "/thegames/76d9bfe8-2576-11ed-8af0-0aad822255c7/index.html",
            "aspect_ratio": "2",
            "enabled": true,
            "interval": "Every Day",
            "prize": ""
        }
    );
	const [userInfo, setUserInfo] = useState<UserInfo>();
	const [pollCount, setPollCount] = useState(0);

	useEffect(() => {
		client
			.fetchGameInfo( JSON.stringify(router?.query.id))
			.then((result) => {
				if (result.data?.length) {
					const { data } = result;
					//console.log("Featured Game Data", data);
					
					setGameInfo(data[0]);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, [router.query]);



	console.log("Game Info From game",featuredGameInfo )
	
	useEffect(() => {
		client
			.fetchCurrentUserInfo()
			.then((result) => {
				const { data } = result;

				if (typeof data !== "string" && data?.id) {
					setUserInfo(data);
				} else {
					setUserInfo(undefined);
				}
			})
			.catch((err) => {
				console.error(err);
				setUserInfo(undefined);
			});
	}, [pollCount]);

	return (
		<DefaultPage
			body={
				<HomePage
					featuredGameInfo={featuredGameInfo}
					currentUserInfo={userInfo}
				/>
			}
		/>
	);
};

export default Home;
