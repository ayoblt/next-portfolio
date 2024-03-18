"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import db from "@/prisma/db";

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

async function createMessage(service: string, message: string, id: number) {
  const newMessage = await db.message.create({
    data: {
      service: service as string,
      content: message as string,
      sender: {
        connect: {
          id: id,
        },
      },
    },
  });

  if (!newMessage) throw new Error("Error creating new message!");

  return newMessage;
}

export async function SendMessage(prevState: any, formData: FormData) {
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

  const data = validatedFields.data;

  try {
    const newMessage = await db.message.create({
      data: {
        service: data.service,
        content: data.message,
        sender: {
          connectOrCreate: {
            where: {
              email: data.email,
            },
            create: {
              email: data.email,
              name: data.firstName,
            },
          },
        },
      },
    });

    console.log(newMessage);
    revalidatePath("/contact-me");
    return {
      message: "Message successfully sent!",
      status: "success",
    };
  } catch (err) {
    return {
      message: "There was an error sending your message!",
      status: "failed",
    };
  }
}
