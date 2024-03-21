"use client";

import { Button } from "@/components/ui/button";
import { ContactFormData } from "@/data/contact-me/contact-form";
import { useFormState, useFormStatus } from "react-dom";
import { SendMessage } from "./action";
import { cn } from "@/lib/utils";
import Spinner from "@/components/icons/spinner";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  message: "",
  status: "",
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
    if (Boolean(state.status)) {
      const status = state.status;

      if (status === "success") {
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
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Bukola"
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
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            defaultValue=""
            placeholder="bukolaawele@email.com"
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
          <Label htmlFor="service">Project Type</Label>
          <Select name="service">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {ContactFormData.projectTypes.map((item, idx) => (
                  <SelectItem value={item.value} key={idx}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
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
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your project here..."
            className="h-32"
            required
          />
          <p
            className={cn(
              "text-transparent scale-0 text-xs",
              state.errors?.message &&
                "text-destructive dark:text-red-500 scale-1"
            )}
          >
            {state.errors?.message ? state.errors.message[0] : "message"}
          </p>
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}
