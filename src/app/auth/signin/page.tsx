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
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaGoogle } from "react-icons/fa";
const formSchema = z.object({
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
    <Card className="w-full lg:min-w-2xl mx-auto py-6 lg:py-12! lg:px-6 z-50">
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

            <div className="flex items-center justify-center lg:justify-end">
              <Button type="submit" className="h-10 px-4 rounded-full">
                Sign In
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="lg:mt-12 w-full flex flex-col items-center justify-center">
        <div className="mb-12 w-full">
          <div className="flex justify-between items-center w-full flex-wrap flex-row gap-4">
            <Separator className="flex-1" />
            <span>or</span>
            <Separator className="flex-1" />
          </div>

          <div className="mt-6 flex justify-center items-center gap-4">
            <Button
              size="icon-lg"
              variant="outline"
              className="size-auto p-2"
              asChild
            >
              <Link href="/">
                <FaFacebook className="size-8" />
              </Link>
            </Button>
            <Button
              size="icon-lg"
              variant="outline"
              className="size-auto p-2"
              asChild
            >
              <Link href="/">
                <FaGoogle className="size-8" />
              </Link>
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          New user?{" "}
          <Link href="/auth/signup" className="text-secondary hover:underline">
            Create an account
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
