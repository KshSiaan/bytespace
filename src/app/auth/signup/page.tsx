"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const formSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full name must be at least 5 characters.")
    .max(32, "Full name must be at most 32 characters."),

  email: z.email("Invalid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 100 characters."),
});

export default function Page() {
  const navig = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      toast.success("Please check your email for the verification code.");
      //* I usually use zustand to pass the email to the next page, but for now, I will use query params.
      navig.push(`/auth/signup/verify?email=${data.email}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="min-w-2xl mx-auto py-12! px-6 z-50">
      <CardHeader>
        <CardDescription className="text-secondary">
          Create an Account
        </CardDescription>

        <CardTitle className="text-4xl font-black">
          Welcome to <br /> ByteSpace
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Full Name */}
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>

              <Input
                id="fullName"
                placeholder="Jamie Davis"
                {...form.register("fullName")}
              />

              {form.formState.errors.fullName && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.fullName.message}
                </p>
              )}
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                id="email"
                type="email"
                placeholder="designer@example.com"
                {...form.register("email")}
              />

              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <Input
                id="password"
                type="password"
                placeholder="********"
                {...form.register("password")}
              />

              {form.formState.errors.password && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.password.message}
                </p>
              )}
            </Field>

            <div className="flex items-center justify-end">
              <Button type="submit" className="h-10 px-4 rounded-full">
                Continue
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="mt-12 flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-secondary hover:underline">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
