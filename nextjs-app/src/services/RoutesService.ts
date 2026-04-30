import { IMGIX_HOST } from "../constants";

// Generally, we want to user imgix
// but we can turn it off here
const { TURN_OFF_IMGIX } = process.env;

// const isProd = process.env.NODE_ENV === "production";

type ValidIcons =
  | "discord"
  | "gear"
  | "instagram"
  | "twitter"
  | "hswm"
  | "eye-open"
  | "eye-closed"
  | "envelope";

type ValidImages =
  | "HS_reverse_horiz.png"
  | "HS_reverse_portrait.png"
  | "featured_game_image--point_the_points.png"
  | "featured-game-image.jpg"
  | "HS_logo.png";

const ROOT = "/";

function createAssetsPath(path: string) {
  return RoutesService.ROOT + "assets/" + path;
}

function getIconPath(name: ValidIcons) {
  const filename = "icon-" + name + ".svg";

  if (TURN_OFF_IMGIX) {
    return "/assets/icons/" + filename;
  }

  return createImgixPath("icons/" + filename);
}

function getImagePath(filename: ValidImages) {
  if (!TURN_OFF_IMGIX) {
    return "/assets/images/" + filename;
  }

  return createImgixPath("images/" + filename);
}

function createImgixPath(path: string) {
  return IMGIX_HOST + path + "?auto=format&auto=compress";
}

const RoutesService = {
  ROOT,
  createAssetsPath,
  getIconPath,
  getImagePath,
};

export default RoutesService;
