// import Script from "next/script";
import raw_script from "./raw_script_tag";

const tag = (
  <script
    id="new-relic-tag"
    type="text/javascript"
    dangerouslySetInnerHTML={{ __html: raw_script }}
  />
);

export default tag;
