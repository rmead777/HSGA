import { useState } from "react";
import cx from "classnames";
import Image from "../../atoms/Image";
import styles from "./styles.module.css";
import RoutesService from "../../../services/RoutesService";
import Logger, { LoggableEvents } from "../../../services/Logger";
import { GameInfo } from "../../../clients/HSWM/types";

type PropTypes = {
  gameInfo?: GameInfo;
};
function FeaturedImage(props: PropTypes) {
  const { gameInfo } = props;
  const [showFeaturedImage, setShowFeaturedImage] = useState(true);

  function handleImageClick() {
    // We only want to do this once
    if (showFeaturedImage) {
      Logger.logEvent(LoggableEvents.CLICKED_HOMEPAGE_FEATURED_IMAGE);
      setShowFeaturedImage(false);
    }
  }

  return (
    <div
      id="game"
      className={cx(styles.gameframe, !showFeaturedImage && styles.spin)}
    >
      <Image
        className={cx(!showFeaturedImage && "hidden", styles["featured-image"])}
        src={RoutesService.getImagePath(
          "featured_game_image--point_the_points.png"
        )}
        alt="featured-image"
        width={1000}
        height={1000}
        zoom={1}
        onClick={handleImageClick}
      />
      <div className={cx(showFeaturedImage && "invisible", styles.game)}>
        <iframe width="100%" height="100%" src={gameInfo?.uri}></iframe>
      </div>
    </div>
  );
}

export default FeaturedImage;
