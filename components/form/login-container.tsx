"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

export default function LoginContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            signIn("github", {
              callbackUrl: "/",
            })
          }
        >
          <Image
            width={20}
            height={20}
            alt="github icon white"
            src={"/github-mark-white.svg"}
            className="dark:flex hidden"
          />
          <Image
            width={20}
            height={20}
            alt="github icon"
            src={"/github-mark.svg"}
            className="flex dark:hidden"
          />
          Login with Github
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
        >
          <Image width={20} height={20} alt="google" src={"/google.svg"} />
          Login with Google
        </Button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="Password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="Password" type="password" {...register("password")} />
              {errors.password?.message && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
