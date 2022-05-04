const isProd = process.env.NODE_ENV === "production";

type ValidIcons = "discord" | "gear" | "instagram" | "twitter" | "hswm";

class RoutesService {
  static ROOT = isProd ? "/gitlab/out/" : "/";

  static createAssetsPath = (path: string) => {
    return RoutesService.ROOT + "assets/" + path;
  };

  static getIconPath = (name: ValidIcons) => {
    return RoutesService.createAssetsPath("icons/icon-" + name + ".svg");
  };
}

export default RoutesService;
