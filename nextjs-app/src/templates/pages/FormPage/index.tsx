import { ReactNode } from "react";
import cx from "classnames";
import Link from "@ui/atoms/Link";
import Image from "@ui/atoms/Image";
import fonts from "@ui/styles/fonts.module.css";
import Form from "@ui/organisms/forms/Form";
import TextInput from "@ui/organisms/forms/TextInput";
import Button from "@ui/atoms/Button/index";
import { HSWM_API } from "@services/HSWM_API";
import { FormEventHandler } from "react";
import styles from "./styles.module.css";

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
        src={"./images/HS_reverse_portrait.png"}
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
