import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const email = "greenbechsolutions@gmail.com"
        const email2 = formData.get("email")
        const number = formData.get("number");
        const body = formData.get("message");
        const tlf = formData.get("tlf")

        let html = `<h3>Telefon nummer: ${tlf}</h3>Email: ${email2}<h3>${body}</h3>`;

        const message = {
            from: GOOGLE_EMAIL,
            to: email,
            bcc: "greenbechsolutions@gmail.com",
            subject: number,
            text: body,
            html: html,
        };

        const sendEmail = async (message) => {
            await new Promise((resolve, reject) => {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        };

        await sendEmail(message);

        return {
            success: "Email is sent",
        };

    }
}