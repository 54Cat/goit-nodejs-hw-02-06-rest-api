const css = require("./email.css")
console.log(css)

const verifyMail = (email, verificationToken) => {
    const mail = {
        to: email,
        subject: "confirm your mail",
        html: `<div className={css.es-wrapper-color}>
            <table className={css.es-wrapper} width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td className={css.esd-email-paddings} valign="top">
                            <table cellpadding="0" cellspacing="0" className={css.es-content css.esd-footer-popover} align="center">
                                <tbody>
                                    <tr>
                                        <td className={css.esd-stripe} align="center">
                                            <table bgcolor="#ffffff" className={css.es-content-body} align="center" cellpadding="0"
                                                cellspacing="0" width="700">
                                                <tbody>
                                                    <tr>
                                                        <td className={css.esd-structure css.es-p40t css.es-p20b css.es-p20r css.es-p20l} align="left"
                                                            esd-custom-block-id="334499">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="660" className={css.esd-container-frame}
                                                                            align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            className={css.esd-block-image}
                                                                                            style="font-size: 0px;"><a
                                                                                                target="_blank"><img
                                                                                                    src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png"
                                                                                                    alt style="display: block;"
                                                                                                    width="100"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            className={css.esd-block-text}>
                                                                                            <h2>Verify your email to finish
                                                                                                signing up</h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            className={css.esd-block-spacer css.es-p10t css.es-p10b css.es-m-txt-c}
                                                                                            style="font-size:0">
                                                                                            <table border="0" width="40%"
                                                                                                height="100%" cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                style="width: 40% !important; display: inline-table;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;">
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            className={css.esd-block-text css.es-p5t css.es-p5b css.es-p40r css.es-m-p0r}
                                                                                            esd-links-underline="none">
                                                                                            <p>Please confirm that
                                                                                                <strong>${email}</strong>&nbsp;is
                                                                                                your email address by
                                                                                                clicking on the button
                                                                                                below.<br><br>If not, please
                                                                                                disregard this email.
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            className={css.esd-block-spacer css.es-p10t css.es-p10b css.es-m-txt-c}
                                                                                            style="font-size:0">
                                                                                            <table border="0" width="40%"
                                                                                                height="100%" cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                style="width: 40% !important; display: inline-table;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;">
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            className={css.esd-block-button css.es-p10t css.es-p10b css.es-m-txt-l}>
                                                                                            <span className={css.es-button-border}
                                                                                                style="background: #ffffff;"><a
                                                                                                    href="http://localhost:3000/api/users/verify/${verificationToken}"
                                                                                                    className={css.es-button}
                                                                                                    target="_blank"
                                                                                                    style="background: #ffffff; border-color: #ffffff;">Verify
                                                                                                    my email</a></span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
    }
    return mail
}

module.exports = verifyMail