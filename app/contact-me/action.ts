"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(3, {
    message: "first Name must be more than 3 letters",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  service: z
    .string()
    .refine(
      (value) =>
        value === "web-development" ||
        value === "web-design" ||
        "seo-optimization",
      {
        message: 'Service must be either "web-development" or "web-design"',
        path: ["service"], // Optional: Specify the path for error messages
      }
    ),
  message: z.string().min(5, {
    message: "Message must be more than 5 characters",
  }),
});

export async function SendMessage(prevState: any, formData: FormData) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const validatedFields = schema.safeParse({
    firstName: formData.get("firstName"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid data",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  revalidatePath("/contact-me");
  return {
    message: "Message successfully sent!",
    status: "success",
  };
  // if (!parse.success) {
  //   return { message: "Failed to create todo" };
  // }

  // const data = parse.data;
}
