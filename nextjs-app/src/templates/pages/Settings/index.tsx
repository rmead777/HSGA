import Link from "@ui/atoms/Link";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import GroupCodeInput from "../../../components/GroupCodeInput/index";
import { PAYMENT_PREFERENCES_PATHNAME } from "../../../../pages/payment-preferences";
import  {jss_msg} from "../../../clients/JSServe/helper.js"

function SettingsPageTemplate() {
  return (
    <div className="flex-1 text-center">
      <div className="title text-4xl mb-10 mt-16">SETTINGS</div>
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
      <div className="container mt-5">
        <hr style={{ backgroundColor: '#fff' }} />
        <div className="title text-4xl mb-10 mt-16 uppercase">Your Group Code</div>
        <span className="random-code">XCRY535MC87H</span>
          <p className="font-bold text-lg uppercase" style={{marginTop: "20px"}}>Give this code to friends</p>
          <p className="font-bold text-lg uppercase">add them to private high score board</p>
        <p className="font-bold text-lg uppercase">add code below to join groups.</p>
          {(()=> {
              let numGroups = 5;
              const retval = [];
              const message = "[[num_of_groups]]";
              if (message != "[[" + "num_of_groups" + "]]") {
                  numGroups = parseInt(message);
              }
              for (let i = 0; i < numGroups; i++) {
                  retval.push(<GroupCodeInput />);
              }
              return (retval);
          })()}


        <button type="submit" className='submit-btn'>Save</button>
      </div>
    </div>
  );
}

export default SettingsPageTemplate;
