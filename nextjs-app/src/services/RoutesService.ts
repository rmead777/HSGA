import { IMGIX_HOST } from "../constants";

// const isProd = process.env.NODE_ENV === "production";

type ValidIcons = "discord" | "gear" | "instagram" | "twitter" | "hswm";
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
    return IMGIX_HOST + "icons/" + filename;
  };

  static getImagePath = (filename: ValidImages) => {
    return IMGIX_HOST + "images/" + filename;
  };
}

export default RoutesService;
