import React, { useEffect, useState } from "react";
import cx from "classnames";
import Image from "../../atoms/Image";
import styles from "./styles.module.css";
import RoutesService from "../../../services/RoutesService";
import Logger, { LoggableEvents } from "../../../services/Logger";
import { GameInfo, RatioType,  } from "../../../clients/HSWM/types";
import client from "src/clients/HSWM";

// We'll get this ratio from the server in the future
// const RATIO = 447.743 / 764.01;   // 16:9
// const RATIO =   764.01/447.743;

type PropTypes = {
  gameInfo?: GameInfo;
};
function FeaturedImage(props: PropTypes) {
  const [ratio, setRatio] = useState<number>()
// let ratio = 1/1;
  useEffect(() => {
    client.getRatio(1).then(res=>{
      const {data} = res
      console.log(data);
      
      if(res.data){
        
               switch (Number(data)) {
          case 0:
           setRatio(447.743 / 764.01) 
           break;
           case 1:
            setRatio( 764.01/447.743) 
            // ratio =    
            break;
            case 2:
              // ratio =  1000 / 1000
              setRatio( 1000/1000) 
              break;
              
              default:
            setRatio( 1000/1000) 
            // ratio =   1000 / 1000
            break;
        }

      }
 
    })
  
   
  }, [])
  const { gameInfo } = props;
  const [showFeaturedImage, setShowFeaturedImage] = useState(true);

  const [height, setHeight] = useState<string | number>("100%");
  const gameFrameRef: React.RefObject<HTMLDivElement> = React.createRef();

  const handleResize = () => {
    const gameFrameWidth = gameFrameRef.current?.clientWidth;
    if (!gameFrameWidth) return;

    const newHeight = gameFrameWidth * Number(ratio);
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
    window.addEventListener("resize", () => {
      if (showFeaturedImage) return;
      handleResize();
    });
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
        src={"https://hswm.imgix.net/images/featured_game_image--point_the_points.png?auto=format&auto=compress"}
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
