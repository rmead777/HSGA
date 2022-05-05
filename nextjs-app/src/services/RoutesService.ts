import { IMGIX_HOST } from "../constants";

// const isProd = process.env.NODE_ENV === "production";

// Generally, we want to user imgix
// but we can turn it off here
const TURN_OFF_IMGIX = false;

type ValidIcons =
  | "discord"
  | "gear"
  | "instagram"
  | "twitter"
  | "hswm"
  | "eye-open"
  | "eye-closed";

type ValidImages =
  | "HS_reverse_horiz.png"
  | "HS_reverse_portrait.png"
  | "featured-game-image.jpg";

class RoutesService {
  static ROOT = "/";

  static createAssetsPath = (path: string) => {
    return RoutesService.ROOT + "assets/" + path;
  };

  static getIconPath = (name: ValidIcons) => {
    const filename = "icon-" + name + ".svg";

    if (TURN_OFF_IMGIX) {
      return "/assets/icons/" + filename;
    }

    return IMGIX_HOST + "icons/" + filename;
  };

  static getImagePath = (filename: ValidImages) => {
    return IMGIX_HOST + "images/" + filename;
  };
}

export default RoutesService;
