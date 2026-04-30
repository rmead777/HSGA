import Link from "@ui/atoms/Link";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import GroupCodeInput from "../../../components/GroupCodeInput/index";
import Leaderstyles from "../../../components/organisms/Leaderboard/styles.module.scss";
import { PAYMENT_PREFERENCES_PATHNAME } from "../../../../pages/payment-preferences";
import { jss_msg } from "../../../clients/JSServe/helper.js";
import { useEffect, useState } from "react";
import Image from "../../../components/atoms/Image";
import client, {
  ContactUsParams,
  SyncUserSquadsParams,
} from "../../../clients/HSWM";
import { SquadInfo } from "../../../clients/HSWM/types";
import FormErrors from "@ui/organisms/forms/FormErrors";
import FormSuccess from "@ui/organisms/forms/FormSuccess";
import Button from "@ui/atoms/Button/index";
import useForm from "../../../hooks/useForm";
import Form from "@ui/organisms/forms/Form";
import styles from "./styles.module.css";
import { IMGIX_HOST } from "../../../constants";

interface PropTypes {
  errors: string[];
  success: string[];
  onSubmit(values: SyncUserSquadsParams): void;
}

function SettingsPageTemplate({ errors, onSubmit, success }: PropTypes) {
  const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
    useForm({
      onSubmit: (values) => onSubmit(values as unknown as SyncUserSquadsParams),
    });

  const [options, setOptions] = useState([]);
  const [ownHash, setOwnHash] = useState([]);

  useEffect(() => {
    client
      .getSquads("yes")
      .then((result) => {
        if (result.data?.length) {
          const { data } = result;
          setOptions(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    client
      .getOwnHash()
      .then((result) => {
        if (result.data?.length) {
          const { data } = result;
          setOwnHash(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex-1 text-center">
      <div className="title text-4xl mb-2 mt-16">SETTINGS</div>
      <div className=" bg-white w-[100px] h-[100px] mb-2 flex justify-center items-center mx-auto ">
        <Link className="chubby-choo-vertical-fix" href="/">
          <Image
            className={cx(styles.mt_29, "img-fluid")}
            src={IMGIX_HOST + "images/HS_logo.png?auto=format&auto=compress"}
            alt="HS"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div>
        <Link
          className={cx(fonts.button, "font-bold text-lg uppercase")}
          href={PAYMENT_PREFERENCES_PATHNAME}
        >{`CHANGE YOUR AVATAR`}</Link>
      </div>
      <div>
        <Link
          className={cx(fonts.button, "font-bold text-lg uppercase")}
          href={PAYMENT_PREFERENCES_PATHNAME}
        >{`> Change Paypal Email ?`}</Link>
      </div>
      <div>
        <Link
          className={cx(fonts.button, "font-bold text-lg uppercase")}
          href="/change-password"
        >{`> Change password ?`}</Link>
      </div>
      <div className="mt-5">
        <div
          className={cx(
            "container",
            Leaderstyles["table-wrapper"],
            "lg:max-w-3xl mx-auto pt-20"
          )}
          style={{
            margin: "0",
            padding: "0",
            marginBottom: "4rem",
            borderLeft: "0 !important",
            borderRight: "0 !important",
            borderBottom: "0 !important",
          }}
        ></div>
        {(() => {
          if (jss_msg("[[squad_message]]", "squad_message") != null) {
            let message = "[[squad_message]]";
            return (
              <div
                className="mb-10 max-w-md mx-auto"
                style={{
                  borderStyle: "solid",
                  borderWidth: "3px",
                  borderColor: "#09bfd5",
                }}
              >
                {message}
              </div>
            );
          }
        })()}

        <div>
          <h2 className="title text-4xl mb-10 mt-16 uppercase">
            GO TO YOUR <span className="text-[#ff8e06]">LEADERBOARD</span>
          </h2>
        </div>
        <div className="title text-4xl mb-10 mt-16 uppercase">
          Your Squad Code
        </div>
        <p className="font-bold text-lg uppercase mb-4" style={{ marginTop: "-50px" }}>
          <Link
            href="/manage-squad"
            style={{
              backgroundColor: "rgb(227, 132, 16)",
              color: "#ffffff",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              display: "inline-block",
              marginTop: "20px",
              textDecoration: "none",
              transition: "background-color 150ms ease, color 150ms ease",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgb(245, 169, 101)";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgb(227, 132, 16)";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onFocus={(e: React.FocusEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgb(245, 169, 101)";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onBlur={(e: React.FocusEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgb(227, 132, 16)";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
          >
            Manage Your Squad
          </Link>
        </p>
        <div className="random-code flex justify-center items-center w-[180px] mx-auto h-[60px]">
          {ownHash.length > 0 ? ownHash : "74f7b13"}
        </div>
        <div className="title text-4xl mb-10 mt-16 uppercase squad-link">
          Your Invite Link
        </div>
        <span className="random-code squad-link">
          https://highscoreGameArcade.com/invite/{ownHash}
        </span>
        <p
          className="font-bold text-lg uppercase"
          style={{ marginTop: "45px" }}
        >
          Give this code to friends
        </p>
        <p className="font-bold text-lg uppercase">
          Or send them the invite link
        </p>
        <p className="font-bold text-lg uppercase">
          to add them to your private high score board
        </p>
        <br />
        <p className="font-bold text-lg uppercase">
          add code below to join squad
        </p>
        <Form
          onSubmit={handleSubmit}
          acceptCharset="utf-8"
          onChange={handleFormChange}
          showInvalidFields={isDirty}
        >
          {options.map((option: SquadInfo, idx: number) => {
            const squadName = option.name.replace("'s Squad", "");
            return (
              <GroupCodeInput
                inpid={"group_code" + option.hash}
                placeholdr={option.name + "(" + option.hash + ")"}
                value={option.hash}
                name={idx}
              />
            );
          })}
          {(() => {
            let numGroups = 5;
            const retval = [];
            const message = "[[num_of_groups]]";
            if (message != "[[" + "num_of_groups" + "]]") {
              numGroups = parseInt(message);
            }

            numGroups = numGroups - options.length;
            if (numGroups < 0) numGroups = 0;

            for (let i = 0; i < numGroups; i++) {
              retval.push(
                <GroupCodeInput
                  inpid={"group_code" + i}
                  name={i + options.length}
                />
              );
            }
            return retval;
          })()}

          <FormErrors errors={errors} />
          <FormSuccess success={success} />
          <button
            type="submit"
            className={cx(styles.button, "submit-btn mb-3 save-btn")}
            style={{
              marginLeft: "0 !important",
              marginRight: "0 !important",
            }}
          >
            Save
          </button>
          <div
            style={{ fontSize: "2em", color: "var(--primary-2)" }}
            className={cx(
              fonts.button,
              "text-primary-1 mb-5 text-lg font-size-3 cancel-button"
            )}
          >
            <a href={"/"}>Cancel</a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SettingsPageTemplate;
