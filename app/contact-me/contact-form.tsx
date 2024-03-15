"use client";

import { Button } from "@/components/ui/button";
import { ContactFormData } from "@/data/contact-me/contact-form";
import { useFormState, useFormStatus } from "react-dom";
import { SendMessage } from "./action";
import { cn } from "@/lib/utils";
import Spinner from "@/components/icons/spinner";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const initialState = {
  message: "",
  status:
    {
      ok: false,
    } || undefined,
  errors: null || undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  // console.log(pending);
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      variant="secondary"
      className={cn(
        "text-white flex items-center text-center text-sm px-5 py-2.5 transition",
        pending
          ? "bg-[#1C2B3A]/90 hover:bg-[#1C2B3A]/90 dark:bg-gray-400 dark:hover:bg-gray-400 "
          : ""
      )}
    >
      {pending && <Spinner />}
      Send Your Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(SendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status) {
      const ok = state.status.ok;

      if (ok) {
        if (formRef?.current) {
          toast.success(
            "Your message has been sent successfully! We'll be in touch soon."
          );
          formRef.current.reset();
        }
      } else {
        toast.error(
          "There was an error submitting your form. Please try again later."
        );
      }
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="w-full px-4 sm:w-96 mx-auto"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-headerFg text-small">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            className="border text-sm rounded-md h-10 px-2 focus:ring-0 focus:outline-none placeholder:text-xs bg-backgroundDark focus:bg-backgroundDarker focus:text-headerFg"
            required
          />
          <p
            className={cn(
              "text-transparent scale-0 text-xs",
              state.errors?.firstName &&
                "text-destructive dark:text-red-500 scale-1"
            )}
          >
            {state.errors?.firstName ? state.errors.firstName[0] : "first name"}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-headerFg text-small">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue=""
            placeholder="Enter Email"
            className="border text-sm rounded-md h-10 px-2 focus:ring-0 focus:outline-none placeholder:text-xs bg-backgroundDark focus:bg-backgroundDarker focus:text-headerFg"
            required
          />
          <p
            className={cn(
              "text-transparent scale-0 text-xs",
              state.errors?.email &&
                "text-destructive dark:text-red-500 scale-1"
            )}
          >
            {state.errors?.email ? state.errors.email[0] : "email"}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="service" className="text-headerFg text-small">
            Project Type
          </label>
          <select
            id="service"
            name="service"
            className="border text-sm rounded-md h-10 px-2 focus:ring-0 focus:outline-none placeholder:text-xs bg-backgroundDark focus:bg-backgroundDarker focus:text-headerFg"
          >
            {ContactFormData.projectTypes.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <p
            className={cn(
              "text-transparent scale-0 text-xs",
              state.errors?.service &&
                "text-destructive dark:text-red-500 scale-1"
            )}
          >
            {state.errors?.service ? state.errors.service[0] : "service"}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-headerFg text-small">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter First Name"
            className="border text-sm rounded-md py-2 px-2 focus:ring-0 focus:outline-none placeholder:text-xs bg-backgroundDark focus:bg-backgroundDarker focus:text-headerFg h-32 resize-y"
            required
          />
          <p
            className={cn(
              "text-transparent scale-0 text-xs",
              state.errors?.message &&
                "text-destructive dark:text-red-500 scale-1"
            )}
            // hidden={!state.errors?.message}
          >
            {state.errors?.message ? state.errors.message[0] : "message"}
          </p>
        </div>
        {/* <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p> */}
        <SubmitButton />
      </div>
    </form>
  );
}
