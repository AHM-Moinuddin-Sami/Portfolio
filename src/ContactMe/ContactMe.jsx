import { useForm } from "react-hook-form";
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function ContactMe() {
  const [submitting, setSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      company: "", // honeypot
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      setServerMsg("");
      setSubmitting(true);

      // Honeypot check
      if (data.company) {
        setServerMsg("Sorry, something went wrong.");
        setSubmitting(false);
        return;
      }

      const formData = {
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phoneNumber || "",
        consent: data.consent,
      };

      const res = await fetch("https://portfolio-server-five-jet.vercel.app/contacts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const maybe = await res.json().catch(() => null);
        const errText = maybe?.error || `Request failed with ${res.status}`;
        throw new Error(errText);
      }

      reset();
      setServerMsg("Thanks. Your message has been sent.");
    } catch (err) {
      setServerMsg(`Sorry. Something went wrong: ${err.message || "Unknown error"}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-gray-900 py-14">
      <div className="container mx-auto px-4">
        <SectionTitle title={"Contact Me"} />

        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          {/* Gradient border glow */}
          <div className="relative rounded-2xl bg-gray-950/60 p-6 backdrop-blur">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 transition focus:border-cyan-300"
                  placeholder="Jane Doe"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Please enter at least 2 characters" },
                  })}
                />
                {errors.name && <p className="mt-1 text-sm text-rose-400">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 transition focus:border-cyan-300"
                  placeholder="you@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="mt-1 text-sm text-rose-400">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-white">
                  Contact No. <span className="text-white/60">(optional)</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  inputMode="tel"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 transition focus:border-cyan-300"
                  placeholder="+61 4xx xxx xxx"
                  {...register("phoneNumber", {
                    pattern: {
                      value: /^[0-9+\-\s()]{7,}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-rose-400">{errors.phoneNumber.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 transition focus:border-cyan-300"
                  placeholder="Tell me about your project or role"
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Please write at least 10 characters" },
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-rose-400">{errors.message.message}</p>
                )}
              </div>

              {/* Honeypot, hidden from users */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("company")}
              />

              {/* Consent */}
              <label className="mt-2 flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-cyan-400 focus:ring-cyan-300"
                  {...register("consent", { required: "Consent is required" })}
                />
                <span className="text-sm text-white/80">
                  I consent to being contacted using the details provided
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-sm text-rose-400">{errors.consent.message}</p>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#00ffd0] px-6 py-3 font-semibold text-gray-900 shadow-lg transition hover:from-[#00ffd0] hover:to-[#00d4ff] disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status line */}
              <p
                role="status"
                aria-live="polite"
                className="mt-3 min-h-[1.25rem] text-center text-sm text-white"
              >
                {serverMsg}
              </p>

              {/* Privacy note */}
              <p className="mt-2 text-center text-xs text-white/70">
                I only use your details to reply to this inquiry. No sharing or marketing lists.
              </p>
            </form>

            {/* Soft corner glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(1200px_400px_at_10%_-10%,rgba(0,212,255,0.15),transparent),radial-gradient(1200px_400px_at_90%_110%,rgba(0,255,208,0.15),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
