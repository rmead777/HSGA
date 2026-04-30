import type { NextPage } from "next";
import ManageSquadPageTemplate from "@ui/templates/pages/ManageSquad";
import DefaultPage from "../src/Default";
import {useState} from "react";
import {useRouter} from "next/router";
import client, {ContactUsParams, SyncUserSquadsParams} from "../src/clients/HSWM";

export const MANAGE_SQUAD_PATH = "/manage-squad";

const ManageSquadPage: NextPage = () => {

    const router = useRouter();
    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string[]>([]);

    function onSubmit(values: SyncUserSquadsParams) {
        client
            .syncUserSquads(values)
            .then((res) => {
                //  console.log(res);

                if (res.errors?.length) {
                    setErrors(res.errors);
                } else {
                    // goNext();
                    setSuccess(["Squads have been updated"]);
                    setTimeout(() => {
                        router.replace("/");
                    }, 4000);
                }
            })
            .catch((err) => {
                console.error(err);
                setErrors([
                    "There was an error submitting your request, please check your internet connection.",
                ]);
            });
    }

  return <DefaultPage body={<ManageSquadPageTemplate onSubmit={onSubmit}
                                                  errors={errors}
                                                  success={success}/>} />;
};

export default ManageSquadPage;
