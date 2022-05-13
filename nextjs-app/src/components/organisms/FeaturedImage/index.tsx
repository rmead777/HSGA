import React, { useEffect, useState } from "react";
import cx from "classnames";
import Image from "../../atoms/Image";
import styles from "./styles.module.css";
import RoutesService from "../../../services/RoutesService";
import Logger, { LoggableEvents } from "../../../services/Logger";
import { GameInfo } from "../../../clients/HSWM/types";

// We'll get this ratio from the server in the future
const RATIO = 447.743 / 764.01;

type PropTypes = {
  gameInfo?: GameInfo;
};
function FeaturedImage(props: PropTypes) {
  const { gameInfo } = props;
  const [showFeaturedImage, setShowFeaturedImage] = useState(true);

  const [height, setHeight] = useState<string | number>("100%");
  const gameFrameRef: React.RefObject<HTMLDivElement> = React.createRef();

  const handleResize = () => {
    const gameFrameWidth = gameFrameRef.current?.clientWidth;
    if (!gameFrameWidth) return;

    const newHeight = gameFrameWidth * RATIO;
    setHeight(newHeight);
  };

  const handleImageClick = () => {
    handleResize();

    // We only want to do this once
    if (showFeaturedImage) {
      Logger.logEvent(LoggableEvents.CLICKED_HOMEPAGE_FEATURED_IMAGE);
      setShowFeaturedImage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      id="game"
      ref={gameFrameRef}
      className={cx(
        styles.gameframe,
        !showFeaturedImage && styles["game-visible"],
        !showFeaturedImage && styles.spin
      )}
      style={{ height }}
    >
      <Image
        className={cx(
          !showFeaturedImage && "invisible",
          styles["featured-image"]
        )}
        src={RoutesService.getImagePath(
          "featured_game_image--point_the_points.png"
        )}
        alt="featured-image"
        width={1000}
        zoom={1}
        onClick={handleImageClick}
      />
      <div className={cx(styles.loading, showFeaturedImage && "invisible")}>
        Loading ...
      </div>
      <div className={cx(showFeaturedImage && "invisible", styles.game)}>
        <iframe width="100%" height={height} src={gameInfo?.uri}></iframe>
      </div>
    </div>
  );
}

export default FeaturedImage;
