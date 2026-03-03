import { ActionFunctionArgs } from "@remix-run/node";
import { MetaFunction, json, useActionData, Form, useNavigation } from "@remix-run/react";
import { Loader, Mail, Phone, Pin } from "lucide-react";
import SectionHeading from "~/components/section-heading";
import { site } from "~/lib/data";
import { z } from "zod";
import * as nodemailer from "nodemailer";

export const meta: MetaFunction = () => {
    return [{ title: "Contact | IMARA PROJECT SERVICES" }];
};

type ActionData = {
    success: boolean;
    errors?: Record<string, string[]>;
    formErrors?: string;
};

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const result = formSchema.safeParse(data);

    if (!result.success) {
        return json<ActionData>({
            success: false,
            errors: result.error.flatten().fieldErrors,
        });
    }

    const validatedData = result.data;
    try {
        const transporter = nodemailer.createTransport({
            //service: "gmail",
            host: "mail.imaraps.co.za",
            port: 465,
            secure: true,
            auth: {
                user: process.env.CONTACT_TO_EMAIL,
                pass: process.env.CONTACT_NAME_PASS,
            },
        });

        const escapeHtml = (s = "") =>
            s.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        const safe = {
            name: escapeHtml(validatedData.name),
            email: escapeHtml(validatedData.email),
            phone: escapeHtml(validatedData.phone || "Not provided"),
            message: escapeHtml(validatedData.message).replace(/\n/g, "<br/>"),
        };

        const html = `
            <div style="margin:0;padding:0;background:#0B1220;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0B1220;padding:24px 0;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="width:600px;max-width:600px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:16px;overflow:hidden;">
                      
                      <!-- Header -->
                     
          
                      <!-- Body -->
                      <tr>
                        <td style="padding:22px;">
                          <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-size:16px;font-weight:700;margin-bottom:14px;">
                            Contact Details
                          </div>
          
                          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-family:Arial,Helvetica,sans-serif;">
                            <tr>
                              <td style="padding:10px 0;color:rgba(255,255,255,0.65);font-size:12px;width:140px;">Name</td>
                              <td style="padding:10px 0;color:#ffffff;font-size:14px;">${safe.name}</td>
                            </tr>
                            <tr>
                              <td style="padding:10px 0;color:rgba(255,255,255,0.65);font-size:12px;">Email</td>
                              <td style="padding:10px 0;color:#ffffff;font-size:14px;">
                                <a href="mailto:${safe.email}" style="color:#F7C66A;text-decoration:none;">${safe.email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:10px 0;color:rgba(255,255,255,0.65);font-size:12px;">Phone</td>
                              <td style="padding:10px 0;color:#ffffff;font-size:14px;">${safe.phone}</td>
                            </tr>
                          </table>
          
                          <div style="height:1px;background:rgba(255,255,255,0.10);margin:18px 0;"></div>
          
                          <div style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-size:16px;font-weight:700;margin-bottom:10px;">
                            Message
                          </div>
          
                          <div style="font-family:Arial,Helvetica,sans-serif;color:rgba(255,255,255,0.85);font-size:14px;line-height:1.6;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.10);border-radius:12px;padding:14px;">
                            ${safe.message}
                          </div>
          
                          <!-- Quick actions -->
                          <div style="margin-top:18px;">
                            <a href="mailto:${safe.email}" style="display:inline-block;background:#E8B64D;color:#070A10;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;padding:10px 14px;border-radius:12px;margin-right:10px;">
                              Reply by Email
                            </a>
                            <span style="display:inline-block;color:rgba(255,255,255,0.50);font-family:Arial,Helvetica,sans-serif;font-size:12px;">
                              Tip: use Reply-To to respond directly.
                            </span>
                          </div>
                        </td>
                      </tr>
          
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          `;

        await transporter.sendMail({
            from: process.env.MAIL_FROM || "Website <no-reply@yourdomain.com>",
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: validatedData.email, // so you can reply straight to the sender
            subject: `Website Contact Form Submission — ${validatedData.name}`,
            text: `Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone || "Not provided"}
          
          Message:
          ${validatedData.message}`,
            html,
        });

        return json<ActionData>({ success: true });
    } catch (error) {
        return json<ActionData>({
            success: false,
            formErrors: "Failed to send email. Please try again later.",
        });
    }
}

const formSchema = z.object({
    name: z.string().min(2, "Name is required").max(50),
    email: z.string().email(),
    phone: z.string(),
    message: z.string().min(2, "Message is required").max(150),
});

export default function Contact() {
    const actionData = useActionData<typeof action>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <div>
            <SectionHeading eyebrow="Contact Us" title="Request a call">
                Send your details and we’ll get back to you.
            </SectionHeading>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
                <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 h-fit">
                    <p className="text-white font-semibold">Direct contact</p>
                    <ul className="mt-4 space-y-3 text-sm text-white/75">
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-brand-primary" />
                            <a className="hover:text-white" href={`mailto:${site.contact.email}`}>
                                {site.contact.email}
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-brand-primary" />
                            <a className="hover:text-white" href={`tel:${site.contact.phone}`}>
                                {site.contact.phone}
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <a
                            className="btn-ghost w-full justify-center"
                            href={`https://wa.me/27${site.contact.phone.replace(/\D/g, "").replace(/^0/, "")}?text=${encodeURIComponent("Hi IMARAS Group, I’d like to request a call about a project.")}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp us
                        </a>
                    </div>
                </aside>
                <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
                    {actionData?.formErrors ? (
                        <div className="mb-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-white/85">
                            {actionData.formErrors}
                        </div>
                    ) : null}

                    {actionData?.success ? (
                        <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-white/85">
                            Thanks, we received your request. We’ll respond soon.
                        </div>
                    ) : (
                        <Form method="post" className="space-y-4">
                            <div>
                                <label className="text-sm text-white/80">Name</label>
                                <input
                                    name="name"
                                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5  px-4 py-3 text-white outline-none focus:border-amber-300/50"
                                    placeholder="Your name"
                                />
                                {actionData?.errors?.name ? (
                                    <p className="mt-1 text-sm text-amber-300">
                                        {actionData.errors.name}
                                    </p>
                                ) : null}
                            </div>

                            <div>
                                <label className="text-sm text-white/80">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5  px-4 py-3 text-white outline-none focus:border-amber-300/50"
                                    placeholder="you@company.com"
                                />
                                {actionData?.errors?.email ? (
                                    <p className="mt-1 text-sm text-amber-300">
                                        {actionData.errors.email}
                                    </p>
                                ) : null}
                            </div>

                            <div>
                                <label className="text-sm text-white/80">Phone (optional)</label>
                                <input
                                    name="phone"
                                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5  px-4 py-3 text-white outline-none focus:border-amber-300/50"
                                    placeholder="+27 ..."
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/80">Message</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    className="mt-2 w-full bg-white/5 rounded-2xl border border-white/10  px-4 py-3 text-white outline-none focus:border-amber-300/50"
                                    placeholder="Briefly describe what you need and your timeline..."
                                />
                                {actionData?.errors?.message ? (
                                    <p className="mt-1 text-sm text-amber-300">
                                        {actionData.errors.message}
                                    </p>
                                ) : null}
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-amber-400 px-6 py-3 font-medium text-slate-950 hover:bg-amber-300 transition"
                            >
                                {isSubmitting ? <Loader className="animate-spin" /> : "Send request"}
                            </button>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
}