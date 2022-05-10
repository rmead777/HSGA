import browser_monitoring_tag from "./newrelic/browser_monitoring_tag";
import RoutesService from "./services/RoutesService";

// TODO: Manage prefetch fonts
const headtags = [
  <title key="title">HighScoreWinsMoney</title>,
  <meta
    key="description"
    name="description"
    content="High Score Wins Money is a place where you can play unique games made by indie developers. If you get the high score on the game that day, we will give you $100 US."
  />,
  <link
    key="favicon"
    rel="icon"
    href={RoutesService.createAssetsPath("favicon.ico")}
  />,
  browser_monitoring_tag,
  <link
    key="industry-font"
    href={RoutesService.createAssetsPath("fonts/Industry/stylesheet.css")}
    rel="stylesheet"
  />,
  <link
    key="chubby-font"
    href={RoutesService.createAssetsPath("fonts/ChubbyChoo/stylesheet.css")}
    rel="stylesheet"
  />,
  <link
    key="galactic-font"
    href={RoutesService.createAssetsPath(
      "fonts/galactic-vanguardian-ncv/stylesheet.css"
    )}
    rel="stylesheet"
  />,
];

export default headtags;
