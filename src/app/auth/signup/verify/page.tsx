"use client";

import { useEffect, useState } from "react";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const otpSchema = z.object({
  otp: z.string().length(6, "Please enter the 6-digit verification code."),
});

const RESEND_TIMEOUT = 60;

export default function Page() {
  const navig = useRouter();
  const email = useSearchParams().get("email") || "";

  const [resendTimer, setResendTimer] = useState(0);

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    if (resendTimer <= 0) return;

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  function onVerifyOtp(data: z.infer<typeof otpSchema>) {
    console.log("Verify OTP:", {
      email,
      otp: data.otp,
    });

    // TODO:
    // Call your OTP verification API here.

    navig.push("/");
  }

  function handleResendOtp() {
    if (resendTimer > 0) return;

    // TODO:
    // Call your resend OTP API here.

    setResendTimer(RESEND_TIMEOUT);

    toast.success("Verification code resent. Please check your email.");
  }

  return (
    <Card className="w-full lg:min-w-2xl mx-auto py-12! px-6 z-50">
      <CardHeader>
        <CardDescription className="text-secondary">
          Verify Your Email
        </CardDescription>

        <CardTitle className="text-4xl font-black">
          Check your <br /> inbox
        </CardTitle>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          We sent a 6-digit verification code to{" "}
          <span className="font-medium text-foreground">{email}</span>. Enter it
          below to continue.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={otpForm.handleSubmit(onVerifyOtp)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp">Verification Code</FieldLabel>

              <Controller
                name="otp"
                control={otpForm.control}
                render={({ field }) => (
                  <InputOTP
                    id="otp"
                    maxLength={6}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />

              {otpForm.formState.errors.otp && (
                <p className="text-sm text-red-500">
                  {otpForm.formState.errors.otp.message}
                </p>
              )}
            </Field>

            <div className="flex items-center justify-center lg:justify-end">
              <Button type="submit" className="h-10 px-5 rounded-full">
                Verify Email
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="mt-12 flex flex-col gap-3 justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <Button
            type="button"
            variant="link"
            disabled={resendTimer > 0}
            className="text-secondary disabled:text-muted-foreground disabled:no-underline"
            onClick={handleResendOtp}
          >
            {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend code"}
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
