import { ActionFunctionArgs } from "@remix-run/node";
import { MetaFunction, json, useActionData, Form } from "@remix-run/react";
import { Mail, Phone, Pin } from "lucide-react";
import SectionHeading from "~/components/section-heading";
import { site } from "~/lib/data";

export const meta: MetaFunction = () => {
    return [{ title: "Contact | IMARA PROJECT SERVICES" }];
};

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function action({ request }: ActionFunctionArgs) {
    const form = await request.formData();
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Please enter your name.";
    if (!email || !isEmail(email)) errors.email = "Please enter a valid email.";
    if (!message) errors.message = "Please enter a message.";

    if (Object.keys(errors).length) {
        return json({ ok: false, errors }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || site.contact.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || site.contact.email;
    const fromName = process.env.CONTACT_FROM_NAME || "Website Contact";

    if (!apiKey) {
        return json(
            { ok: false, errors: { form: "Email service is not configured." } },
            { status: 500 }
        );
    }


}

export default function Contact() {
    const actionData = useActionData<typeof action>();

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
                    {actionData?.errors?.form ? (
                        <div className="mb-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-white/85">
                            {actionData.errors.form}
                        </div>
                    ) : null}

                    {actionData?.ok ? (
                        <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-white/85">
                            Thanks — we received your request. We’ll respond soon.
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
                                {/* {actionData?.errors?.name ? (
                  <p className="mt-1 text-sm text-amber-300">
                    {actionData.errors.name}
                  </p>
                ) : null} */}
                            </div>

                            <div>
                                <label className="text-sm text-white/80">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5  px-4 py-3 text-white outline-none focus:border-amber-300/50"
                                    placeholder="you@company.com"
                                />
                                {/* {actionData?.errors?.email ? (
                  <p className="mt-1 text-sm text-amber-300">
                    {actionData.errors.email}
                  </p>
                ) : null} */}
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
                                {/* {actionData?.errors?.message ? (
                  <p className="mt-1 text-sm text-amber-300">
                    {actionData.errors.message}
                  </p>
                ) : null} */}
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-amber-400 px-6 py-3 font-medium text-slate-950 hover:bg-amber-300 transition"
                            >
                                Send request
                            </button>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
}