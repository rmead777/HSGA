import { ReactNode } from "react";
import cx from "classnames";
import Image from "@ui/atoms/Image";
import styles from "./styles.module.css";
import RoutesService from "../../../services/RoutesService";
import { IMGIX_HOST } from "../../../constants";

interface PropTypes {
  form: ReactNode;
}

function FormPageTemplate({ form }: PropTypes) {
  return (
    <main
      className={cx(
        "container",
        "mx-auto  max-w-7xl px-3",
        "text-center",
        "lg:mt-20 flex-col"
      )}
    >
      <Image
        className={cx("mx-auto mb-3", styles.logo)}
        src={IMGIX_HOST+"images/HS_reverse_portrait.png?auto=format&auto=compress"}
        alt="HighScoreWinsMoney Logo"
        width={120}
        height={94}
        zoom={2.5}
      />
      <div className="flex flex-col">{form}</div>
    </main>
  );
}

export default FormPageTemplate;
