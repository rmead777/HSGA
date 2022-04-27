import type { NextPage } from "next";
import cx from "classnames";
import NextHead from "next/head";
import Footer from "../src/templates/Footer";
import Header from "../src/templates/Header";
import Image from "../src/components/atoms/Image";
import Link from "../src/components/atoms/Link";
import fonts from "../styles/fonts.module.css";
import Button from "../src/components/atoms/Button";
import headtags from "../src/_headtags";

const Signup: NextPage = () => {
  return (
    <>
      <NextHead>{headtags}</NextHead>

      <Header />
      <main
        className={cx("container", "mx-auto", "text-center", "mt-20 flex-col")}
      >
        <Image
          className="mx-auto"
          src={"./images/logo_dropshadow.png"}
          alt="HighScoreWinsMoney Logo"
          width={120 * 3}
          height={94 * 3}
        />
        <div className="flex flex-col">
          <Button>
            <span>SIGNUP</span>
          </Button>
          <div
            className={cx(
              fonts.button,
              "text-primary-1 mb-5 text-lg font-size-3"
            )}
          >
            <Link href="/login">OR LOGIN INSTEAD</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
