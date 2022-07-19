import cx from "classnames";
import Link from "@ui/atoms/Link";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import TextArea from "@ui/organisms/forms/TextArea";
import Button from "@ui/atoms/Button/index";
import FormPageTemplate from "../FormPage/index";
import PasswordInput from "@ui/organisms/forms/PasswordInput/index";
import FormErrors from "@ui/organisms/forms/FormErrors";
import FormSuccess from "@ui/organisms/forms/FormSuccess";
import useForm from "../../../hooks/useForm";
import styles from "./bootstrap.module.css";
import { useRouter } from "next/router";
import client, { ContactUsParams } from "../../../clients/HSWM";
import { useEffect, useState } from "react";

// let data = [
//   {
//     id: "b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description:
//       "This is a brief description. Bla bla bla bla bla. First game test",
//     author: "Victor Varnado",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "I Ate My Zombies",
//     description:
//       "This is a brief description. Bla bla bla bla bla. Second game test",
//     author: "Will Brierly",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "Zombies are Overrated",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "Omar The Man",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "None",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description:
//       "This is a brief description. Bla bla bla bla bla. First game test",
//     author: "Victor Varnado",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "I Ate My Zombies",
//     description:
//       "This is a brief description. Bla bla bla bla bla. Second game test",
//     author: "Will Brierly",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "Zombies are Overrated",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "Omar The Man",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "None",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",

//     uri: "/thegames/d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description:
//       "This is a brief description. Bla bla bla bla bla. First game test",
//     author: "Victor Varnado",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "I Ate My Zombies",
//     description:
//       "This is a brief description. Bla bla bla bla bla. Second game test",
//     author: "Will Brierly",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "Zombies are Overrated",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "Omar The Man",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "None",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description:
//       "This is a brief description. Bla bla bla bla bla. First game test",
//     author: "Victor Varnado",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "I Ate My Zombies",
//     description:
//       "This is a brief description. Bla bla bla bla bla. Second game test",
//     author: "Will Brierly",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce",
//     title: "Zombies are Overrated",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "Omar The Man",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
//     uri: "/thegames/b8a49556-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
//   {
//     id: "d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce",
//     title: "Test Game",
//     description: "This is a brief description. Bla bla bla bla bla. ",
//     author: "None",
//     image:
//       "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",

//     uri: "/thegames/d22e8553-d0ce-11ec-ab4d-6aaca1cbf7ce/index.html",
//   },
// ];

function AllGamesTemplate() {
  const router = useRouter();
  const [data, setData] = useState([
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
      id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "I Ate My Zombies Test",
      description:
        "This is a brief description. Bla bla bla bla bla. Second game test",
      author: "Will Brierly",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
    {
      id: "b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce",
      title: "Test I Ate My Zombies",
      description:
        "This is a brief description. Bla bla bla bla bla. Second game test",
      author: "Will Brierly",
      image:
        "https://hswm.imgix.net/images/b755af28-d3a0-11ec-ab4d-6aaca1cbf7ce.png",
      uri: "/thegames/b8a49479-d0c5-11ec-ab4d-6aaca1cbf7ce/index.html",
    },
  ]);
  const [filterData, setFilterData] = useState([]);
  // const [search, setSearch] = useState(router.query.search);
  const [search, setSearch] = useState();
  const [pages, setPages] = useState();
  const [pageSize, setPageSize] = useState(12);
  const [selectedPage, setSelectedPage] = useState(0);
  // const [selectedPage, setSelectedPage] = useState(router.query.page - 1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("Query", router.query);
  console.log("selectedPage", selectedPage);
  const handleSearch = (e) => {
    // console.log(e);
    let filt = e
      ? data.filter((character) => {
          return (
            character["title"] &&
            character["title"].toLowerCase().includes(e && e.toLowerCase())
          );
        })
      : data;
    setFilterData(filt);
  };
  useEffect(() => {
    handleSearch(router.query.search);
  }, [data, router.query.search]);
  useEffect(() => {
    setSelectedPage(router.query.page);
  }, [router.query.page]);

  useEffect(() => {
    handlePagination();
  }, [filterData, selectedPage]);
  const handlePagination = () => {
    setCurrentPageData(
      filterData.slice(
        selectedPage * pageSize,
        selectedPage * pageSize + pageSize
      )
    );
  };
  useEffect(() => {
    setLoading(true);
    client.getAllGames().then((res) => {
      // console.log("ALL Games Response ", res);
      setData(res.data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setSelectedPage(router.query.page ? router.query.page - 1 : 0);
  }, [router.query.page]);

  const handleNavigation = (data) => {
    router.push(`/game/?id=${data.id}`);
  };

  return (
    <main className={styles.container}>
      <div className="d-flex my-4">
        <div className="mx-auto">
          <input
            className="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => router.push(`/allgames/?search=${search}`)}
            // onClick={() => handleSearch(search, "title")}
            className="text-theme fw-bold ms-3"
          >
            SEARCH
          </button>
        </div>
      </div>

      {loading ? (
        <div className="my-5 text-center">Loading...</div>
      ) : (
        <div className={styles.row}>
          {currentPageData.map((item, index) => (
            <div className={cx(styles.col_md_3, styles.col_sm_4, styles.col_6)}>
              <button onClick={() => handleNavigation(item)}>
                <div className="allGameItem " key={index}>
                  <img src={item.image} />
                </div>
                <div className="mx-3 mb-5">
                  <p className="allGameTitle">{item.title}</p>
                  <p>By {item.author}</p>
                  <p>By {item.description}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
      {/* ============== */}
      {/* Pagination */}
      {/* ============== */}
      <div>
        <div className="d-flex justify-content-between">
          <button
            // onClick={() => {
            //   router.push(`/allgames/?page=${selectedPage}`);
            // }}
            onClick={() => setSelectedPage(selectedPage - 1)}
            disabled={selectedPage === 0 ? true : false}
            className="fs-1"
          >
            &#x2770;
          </button>
          <div>
            <span>Page</span> &nbsp;
            {Array.from({
              length: Math.ceil(filterData.length / pageSize),
            }).map((d, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setSelectedPage(i)}
                  // onClick={() => {
                  //   router.push(`/allgames/?page=${i + 1}`);
                  //   // () => setSelectedPage(i);
                  // }}
                  className={`px-1 ${selectedPage == i ? " " : "text-theme"}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <button
            disabled={
              selectedPage === Math.ceil(data.length / pageSize) - 1
                ? true
                : false
            }
            // onClick={() => {
            // router.push(`/allgames/?page=${selectedPage + 2}`);
            // router.push(
            //   `/allgames/?page=${selectedPage + 2}${
            //     router.query ? "&search=" + router.query.search : ""
            //   }`
            // );
            // }}
            onClick={() => setSelectedPage(selectedPage + 1)}
            className="fs-1"
          >
            &#x2771;
          </button>
        </div>
      </div>
    </main>
  );
}

export default AllGamesTemplate;
