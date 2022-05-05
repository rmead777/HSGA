import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styles from "./styles.module.css";
import TextInput from "@ui/organisms/forms/TextInput";
import Image from "../../../atoms/Image";
import RoutesService from "../../../../services/RoutesService";

interface PropTypes
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  hideRules?: boolean;
}

function PasswordInput(props: PropTypes) {
  const [showPassword, setShowPassword] = useState(false);
  const { hideRules, label = "Password", ...rest } = props;

  const iconSrc = RoutesService.getIconPath(
    showPassword ? "eye-open" : "eye-closed"
  );

  return (
    <>
      <div className={styles["input-wrapper"]}>
        <TextInput
          name="password"
          required
          id="password"
          aria-required="true"
          label={label}
          minLength={8}
          {...{
            ...rest,
            type: !showPassword ? "password" : undefined,
          }}
        />
        <Image
          className={styles.icon}
          src={iconSrc}
          alt="featured-image"
          width={24}
          height={24}
          zoom={1}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      {!hideRules && (
        <ul className={styles.rules}>
          <li>Must have 8 characters minimum</li>
        </ul>
      )}
    </>
  );
}

export default PasswordInput;
