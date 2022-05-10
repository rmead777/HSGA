import Link from "@ui/atoms/Link";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
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
    </div>
  );
}

export default SettingsPageTemplate;
