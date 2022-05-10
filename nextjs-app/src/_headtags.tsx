import browser_monitoring_tag from "./newrelic/browser_monitoring_tag";
import RoutesService from "./services/RoutesService";

function buildFontLinks() {
  return [
    // ["Industry/Industry-DemiItalic.eot", "otf"],
    // ["Industry/Industry-DemiItalic.woff", "woff"],
    // ["Industry/Industry-DemiItalic.woff2", "woff2"],
    // ["Industry/Industry-DemiItalic.ttf", "ttf"],
    ["Industry/Industry-Bold.eot", "otf"],
    ["Industry/Industry-Bold.woff", "woff"],
    ["Industry/Industry-Bold.woff2", "woff2"],
    ["Industry/Industry-Bold.ttf", "ttf"],
    // ["Industry/Industry-Ultra.eot", "otf"],
    // ["Industry/Industry-Ultra.woff", "woff"],
    // ["Industry/Industry-Ultra.woff2", "woff2"],
    // ["Industry/Industry-Ultra.ttf", "ttf"],
    // ["Industry/Industry-BlackItalic.eot", "otf"],
    // ["Industry/Industry-BlackItalic.woff", "woff"],
    // ["Industry/Industry-BlackItalic.woff2", "woff2"],
    // ["Industry/Industry-BlackItalic.ttf", "ttf"],
    ["Industry/Industry-Light.eot", "otf"],
    ["Industry/Industry-Light.woff", "woff"],
    ["Industry/Industry-Light.woff2", "woff2"],
    ["Industry/Industry-Light.ttf", "ttf"],
    // ["Industry/Industry-Medium.eot", "otf"],
    // ["Industry/Industry-Medium.woff", "woff"],
    // ["Industry/Industry-Medium.woff2", "woff2"],
    // ["Industry/Industry-Medium.ttf", "ttf"],
    // ["Industry/Industry-UltraItalic.eot", "otf"],
    // ["Industry/Industry-UltraItalic.woff", "woff"],
    // ["Industry/Industry-UltraItalic.woff2", "woff2"],
    // ["Industry/Industry-UltraItalic.ttf", "ttf"],
    // ["Industry/Industry-Black.eot", "otf"],
    // ["Industry/Industry-Black.woff", "woff"],
    // ["Industry/Industry-Black.woff2", "woff2"],
    // ["Industry/Industry-Black.ttf", "ttf"],
    // ["Industry/Industry-ThinItalic.eot", "otf"],
    // ["Industry/Industry-ThinItalic.woff", "woff"],
    // ["Industry/Industry-ThinItalic.woff2", "woff2"],
    // ["Industry/Industry-ThinItalic.ttf", "ttf"],
    // ["Industry/Industry-BoldItalic.eot", "otf"],
    // ["Industry/Industry-BoldItalic.woff", "woff"],
    // ["Industry/Industry-BoldItalic.woff2", "woff2"],
    // ["Industry/Industry-BoldItalic.ttf", "ttf"],
    // ["Industry/Industry-MediumItalic.eot", "otf"],
    // ["Industry/Industry-MediumItalic.woff", "woff"],
    // ["Industry/Industry-MediumItalic.woff2", "woff2"],
    // ["Industry/Industry-MediumItalic.ttf", "ttf"],
    // ["Industry/Industry-Thin.eot", "otf"],
    // ["Industry/Industry-Thin.woff", "woff"],
    // ["Industry/Industry-Thin.woff2", "woff2"],
    // ["Industry/Industry-Thin.ttf", "ttf"],
    // ["Industry/Industry-Book.eot", "otf"],
    // ["Industry/Industry-Book.woff", "woff"],
    // ["Industry/Industry-Book.woff2", "woff2"],
    // ["Industry/Industry-Book.ttf", "ttf"],
    // ["Industry/Industry-Demi.eot", "otf"],
    // ["Industry/Industry-Demi.woff", "woff"],
    // ["Industry/Industry-Demi.woff2", "woff2"],
    // ["Industry/Industry-Demi.ttf", "ttf"],
    // ["Industry/Industry-BookItalic.eot", "otf"],
    // ["Industry/Industry-BookItalic.woff", "woff"],
    // ["Industry/Industry-BookItalic.woff2", "woff2"],
    // ["Industry/Industry-BookItalic.ttf", "ttf"],
    ["ChubbyChoo/ChubbyChoo-Regular.eot", "otf"],
    ["ChubbyChoo/ChubbyChoo-Regular.woff", "woff"],
    ["ChubbyChoo/ChubbyChoo-Regular.woff2", "woff2"],
    ["ChubbyChoo/ChubbyChoo-Regular.ttf", "ttf"],
    ["ChubbyChoo/ChubbyChoo-SemiBold.eot", "otf"],
    ["ChubbyChoo/ChubbyChoo-SemiBold.woff", "woff"],
    ["ChubbyChoo/ChubbyChoo-SemiBold.woff2", "woff2"],
    ["ChubbyChoo/ChubbyChoo-SemiBold.ttf", "ttf"],
  ].map((tuple) => {
    const [href, type] = tuple;

    if (type !== "woff") return null;

    return (
      <link
        key={href}
        rel="preload"
        href={"/assets/fonts/" + href}
        as="font"
        type={"font/" + type}
        crossOrigin="true"
      />
    );
  });
}

const headtags = [
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
  ...buildFontLinks(),
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
