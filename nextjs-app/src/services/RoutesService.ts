const isProd = process.env.NODE_ENV === "production";

class RoutesService {
  static ROOT = isProd ? "/gitlab/out/" : "/";

  static createAssetsPath = (path: string) => {
    return RoutesService.ROOT + path;
  };
}

export default RoutesService;
