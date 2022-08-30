import Link from "@ui/atoms/Link";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import RedomInput from "../../../components/RedomInput/index";
import { PAYMENT_PREFERENCES_PATHNAME } from "../../../../pages/payment-preferences";

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
        <h1 className="main-title my-3">Your Group Code</h1>
        <span className="random-code">XCRY535MC87H</span>
        <form className="redem-form mt-4">
          <p className="desc">Give this code to friends add them to private high score board</p>
        </form>
        <p className="desc">add code below to join groups.</p>
        <RedomInput />
        <RedomInput />
        <RedomInput />
        <RedomInput />
        <button type="submit" className='submit-btn'>Save</button>
      </div>
    </div>
  );
}

export default SettingsPageTemplate;
