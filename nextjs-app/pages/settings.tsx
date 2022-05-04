import type { NextPage } from "next";
import SettingsPageTemplate from "@ui/templates/pages/Settings";
import DefaultPage from "../src/Default";

const Settings: NextPage = () => {
  return <DefaultPage body={<SettingsPageTemplate />} />;
};

export default Settings;
