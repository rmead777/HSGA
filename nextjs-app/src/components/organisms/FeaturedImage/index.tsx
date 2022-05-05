import { useState } from "react";
import cx from "classnames";
import Image from "../../atoms/Image";
import styles from "./styles.module.css";
import RoutesService from "../../../services/RoutesService";

const renderIframe = () => {
  return (
    <iframe
      className="_3Xz9Z ui-droppable"
      title="Embedded Content"
      name="htmlComp-iframe"
      width="100%"
      height="100%"
      data-src=""
      src="https://gamesnacks.com/embed/games/trex_v3"
    ></iframe>
  );
};

function FeaturedImage() {
  const [showFeaturedImage, setShowFeaturedImage] = useState(true);
  return (
    <div
      id="game"
      className={cx(styles.gameframe, !showFeaturedImage && styles.spin)}
    >
      <Image
        className={cx(
          !showFeaturedImage && "invisible",
          styles["featured-image"]
        )}
        src={RoutesService.getImagePath("featured-game-image.jpg")}
        alt="featured-image"
        width={1000}
        height={1000}
        zoom={1}
        onClick={() => setShowFeaturedImage(false)}
      />
      <div className={cx(showFeaturedImage && "invisible", styles.game)}>
        {renderIframe()}
      </div>
    </div>
  );
}

export default FeaturedImage;
