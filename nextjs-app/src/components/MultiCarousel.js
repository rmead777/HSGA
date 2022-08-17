import { getJSON } from "jquery";
import { useEffect, useState } from "react";
import Carousel from "react-simply-carousel";
import client from "src/clients/HSWM";
import { useRouter } from "next/router";

export default function MultiCarousel() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [userRank, setUserRank] = useState({ score: 0, place: 0 });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [data, setData] = useState([
      {
          "id": "6bee5ce3-0471-11ed-8af0-0aad822255c7",
          "title": "Break Invaders",
          "description": "Part Space Invaders and part Breakeout. Protect earth with a paddle and a ball.",
          "author": "Victor Varnado",
          "image": "https://hswm.imgix.net/images/HS_reverse_icon.jpg",
          "uri": "/thegames/6bee5ce3-0471-11ed-8af0-0aad822255c7/index.html",
          "aspect_ratio": 2,
          "enabled": true,
          "interval": "Every Day",
          "prize": "$100"
      }
  ]);

  let testData = [
      {
          "id": "6bee5ce3-0471-11ed-8af0-0aad822255c7",
          "title": "Break Invaders",
          "description": "Part Space Invaders and part Breakeout. Protect earth with a paddle and a ball.",
          "author": "Victor Varnado",
          "image": "https://hswm.imgix.net/images/HS_reverse_icon.jpg",
          "uri": "/thegames/6bee5ce3-0471-11ed-8af0-0aad822255c7/index.html",
          "aspect_ratio": 2,
          "enabled": true,
          "interval": "Every Day",
          "prize": "$100"
      },
      {
          "id": "b3f30836-1cb7-11ed-8af0-0aad822255c7",
          "title": "Berserkr",
          "description": "You are trapped in the woods in an endless onslaught of enemies. See if you can survive this action game inspired by the file The Northman.",
          "author": "Victor Varnado",
          "image": "https://hswm.imgix.net/images/HS_reverse_icon.jpg",
          "uri": "/thegames/b3f30836-1cb7-11ed-8af0-0aad822255c7/index.html",
          "aspect_ratio": 2,
          "enabled": true,
          "interval": null,
          "prize": null
      },
      {
          "id": "a5a2076e-1cba-11ed-8af0-0aad822255c7",
          "title": "Point the Points",
          "description": "Tap on the screen or the space-bar to get as many points as you can.",
          "author": "Will Brierly",
          "image": "https://hswm.imgix.net/images/HS_reverse_icon.jpg",
          "uri": "/thegames/a5a2076e-1cba-11ed-8af0-0aad822255c7/index.html",
          "aspect_ratio": 0,
          "enabled": true,
          "interval": null,
          "prize": null
      }
  ];

  useEffect(() => {
    client.getCarouselData().then((res) => {
      // console.log("GET Carousel", res);
      setData(res.data);
    });
  }, []);
  // console.log(data);
  const handleNavigation = (data) => {
    router.push(`/game/?id=${data.id}`);
  };
  if (!data) {
    return null;
  }
  return (
    <Carousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      forwardBtnProps={{
        children: <>&#x2771;</>,
        style: {
          backgroundColor: "transparent",
          fontSize: 40,
          color: "white",
          border: "none",
        },
        className: "d-sm-none",
      }}
      backwardBtnProps={{
        children: <span> &#x2770;</span>,
        style: {
          backgroundColor: "transparent",
          fontSize: 40,
          color: "white",
          border: "none",
        },
        className: "d-sm-none",
      }}
      // itemsToShow={3}
      speed={400}
      responsiveProps={[
        { minWidth: 768, maxWidth: 992, itemsToShow: 3 },
        { maxWidth: 767, minWidth: 300, itemsToShow: 1 },
      ]}
    >
      {data?.map((item, index) => (
        <div className="sliderItem" key={index}>
          <button onClick={() => handleNavigation(item)}>
            <img src={item.image + "?auto=format&auto=compress"} />
          </button>
        </div>
      ))}
    </Carousel>
  );
}
