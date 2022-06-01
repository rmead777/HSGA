import { intervalToDuration } from "date-fns";
import { parseFromTimeZone } from "date-fns-timezone";
import { useEffect, useState } from "react";
import fonts from "@ui/styles/fonts.module.css";
import cx from "classnames";
function getDuration() {
	const today = new Date();

	const localTimeForMidnightNewYork = parseFromTimeZone(
		new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + 1,
			0,
			0,
			0
		).toString(),
		{
			timeZone: "America/New_York",
		}
	);

	return intervalToDuration({
		start: new Date(),
		end: new Date(localTimeForMidnightNewYork),
	});
}

function Countdown() {
	const zeroDuration = intervalToDuration({ start: 0, end: 0 });
	const [duration, setDuration] = useState<Duration>(zeroDuration);

	useEffect(() => {
		const timout = setTimeout(() => {
			const duration = getDuration();
			setDuration(duration);
		}, 1000);

		return () => {
			clearTimeout(timout);
		};
	}, [duration]);

	return duration ? (
		<div className={fonts.tagline}>
			<div className={cx("uppercase text-xl")}>
				<span className="text-3xl text-primary-2">
					{duration.hours}{" "}
				</span>
				<span>hours </span>
				<span className="text-3xl text-primary-2">
					{duration.minutes}{" "}
				</span>
				<span>minutes </span>
				<span className="text-3xl text-primary-2">
					{duration.seconds}{" "}
				</span>
				<span>seconds</span>
			</div>
			<div>UNTIL NEXT WINNER IS CHOSEN AND LEADERBOARD RESETS</div>
		</div>
	) : null;
}

export default Countdown;
