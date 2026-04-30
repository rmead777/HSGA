/**
 *
 * @param message string in the format of "[[message_variable_name]]". This is important and cannot be done programmatically
 * @param check string in the format of "message_variable_name". This will not work if both aren't the same name, and cnanot be done programmatically
 * @returns {*}
 */
export function jss_msg(message, check) {
    if (message != "[[" + check + "]]") {
        return message;
    }
    else
        return null;
}