"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function AccountCard() {
  const { data: session } = useSession();

  return (
    <Card className="flex justify-center items-center py-4 w-[480px]">
      <CardTitle className="text-2xl font-bold">Account Actions</CardTitle>
      <CardContent className="flex flex-row justify-between items-center gap-8">
        <Avatar className="h-[120px] w-[120px]">
          <AvatarImage src={session?.user?.image || ""} />
        </Avatar>
        <section className="flex flex-col">
          <h1 className="text-xl font-bold">
            Username:{" "}
            <span className="text-lg font-normal dark:text-white/80 text-black/80">
              {session?.user?.name}
            </span>
          </h1>
          <h1 className="text-xl font-bold">
            Email:{" "}
            <span className="text-lg font-normal dark:text-white/80 text-black/80">
              {session?.user?.email || "None"}
            </span>
          </h1>
        </section>
      </CardContent>
      <CardFooter>
        <Button onClick={() => signOut()}>Logout</Button>
      </CardFooter>
    </Card>
  );
}
