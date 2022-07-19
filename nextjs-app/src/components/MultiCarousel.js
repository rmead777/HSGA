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
      id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "Zombies are Overrated",
      description: "This is a brief description. Bla bla bla bla bla. ",
      author: "Omar The Man",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
  ]);

  let testData = [
    {
      id: "b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce",
      title: "Test Game",
      description:
        "This is a brief description. Bla bla bla bla bla. First game test",
      author: "Victor Varnado",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "I Ate My Zombies",
      description:
        "This is a brief description. Bla bla bla bla bla. Second game test",
      author: "Will Brierly",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "Zombies are Overrated",
      description: "This is a brief description. Bla bla bla bla bla. ",
      author: "Omar The Man",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce",
      title: "Test Game",
      description: "This is a brief description. Bla bla bla bla bla. ",
      author: "None",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce",
      title: "Test Game",
      description:
        "This is a brief description. Bla bla bla bla bla. First game test",
      author: "Victor Varnado",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "I Ate My Zombies",
      description:
        "This is a brief description. Bla bla bla bla bla. Second game test",
      author: "Will Brierly",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "Zombies are Overrated",
      description: "This is a brief description. Bla bla bla bla bla. ",
      author: "Omar The Man",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce",
      title: "Test Game",
      description: "This is a brief description. Bla bla bla bla bla. ",
      author: "None",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",

      uri: "/thegames/d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
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
            <img src={item.image} />
          </button>
        </div>
      ))}
    </Carousel>
  );
}
