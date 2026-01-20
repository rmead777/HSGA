import Link from "@ui/atoms/Link";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import UserListItem from "../../../components/UserListItem/index";
import Leaderstyles from "../../../components/organisms/Leaderboard/styles.module.scss";
import { PAYMENT_PREFERENCES_PATHNAME } from "../../../../pages/payment-preferences";
import  {jss_msg} from "../../../clients/JSServe/helper.js"
import {useEffect, useState} from "react";
import client, {ContactUsParams, SyncUserSquadsParams} from "../../../clients/HSWM";
import {OwnSquadUsers, SquadInfo} from "../../../clients/HSWM/types";
import FormErrors from "@ui/organisms/forms/FormErrors";
import FormSuccess from "@ui/organisms/forms/FormSuccess";
import Button from "@ui/atoms/Button/index";
import useForm from "../../../hooks/useForm";
import Form from "@ui/organisms/forms/Form";
import styles from "./styles.module.css";

interface PropTypes {
    errors: string[];
    success: string[];
    onSubmit(values: SyncUserSquadsParams): void;
}

function ManageSquadPageTemplate({ errors, onSubmit, success }: PropTypes) {


    const { isValid, isDirty, validateForm, handleSubmit, handleFormChange } =
        useForm({
            onSubmit: (values) =>
                onSubmit(values as unknown as SyncUserSquadsParams),
        });

    const [options, setOptions] = useState([]);
    const [ownHash, setOwnHash] = useState([]);

    // fetchUsers: reused so children can trigger a reload after deletion
    async function fetchUsers() {
        try {
            const result = await client.getOwnSquadUsers();
            if (result?.data && result.data.length) {
                setOptions(result.data);
            } else {
                setOptions([]);
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchUsers();
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
      <div className="title text-4xl mb-10 mt-16">Manage Squad</div>
      <div className="mt-5">
          <div className={cx(
              "container",
              Leaderstyles["table-wrapper"],
              "lg:max-w-3xl mx-auto pt-20"
          )}
               style={{
                   margin: '0',
                   padding: '0',
                   marginBottom: '4rem',
                   borderLeft: '0 !important',
                   borderRight: '0 !important',
                   borderBottom: '0 !important'
               }}
          ></div>
          {(() => {
              if(jss_msg("[[squad_message]]", "squad_message") != null ){
                  let message = "[[squad_message]]";
                  return (
                      <div className="mb-10 max-w-md mx-auto"
                           style={{
                               borderStyle: "solid",
                               borderWidth: "3px",
                               borderColor: "#09bfd5",
                           }}
                      >{message}
                      </div>
                  )
              }
          })()}
        <div className="title text-4xl mb-10 mt-16 uppercase">Your Squad Code</div>
        <span className="random-code">{ownHash}</span>
        <div className="title text-4xl mb-10 mt-16 uppercase squad-link">Your Invite Link</div>
        <span className="random-code squad-link">https://highscoreGameArcade.com/invite/{ownHash}</span>
          <p className="font-bold text-lg uppercase" style={{marginTop: "15px"}}>&nbsp;</p>
        <p className="font-bold text-lg uppercase">Current Members</p>
          {options.map((option: OwnSquadUsers, idx: number) => {
              const userName = option.username;
              return (
                  <UserListItem
                      key={option.uuid ?? idx}
                      value={option.uuid}
                      username={userName}
                      // provide reloadUsers so the child can refresh the list after deletion
                      reloadUsers={fetchUsers}
                  />
              );
          })}

      </div>
    </div>
  );
}

export default ManageSquadPageTemplate;
