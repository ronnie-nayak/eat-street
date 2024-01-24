"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Loading } from "@repo/ui";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.replace("/homepage");
  }

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);

  if (status === "loading" || status === "authenticated")
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );

  return (
    <div className="relative">
      <div
        className="h-screen w-screen grid place-items-center"
        style={{
          background: "url('/login/preview.png') center no-repeat",
          backgroundSize: "cover",
          filter: "blur(4px)",
        }}
      ></div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2/6 w-max sm:w-1/3 rounded-3xl bg-white p-8 flex flex-col"
        style={{
          borderRadius: "50px",
          boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.75)",
        }}
      >
        {!providers ? (
          <div className="text-center font-bold sm:text-[1vw] p-4">
            Loading...
          </div>
        ) : (
          <>
            <div className="flex gap-2 justify-center items-center">
              <button
                type="button"
                key="Github"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: `/homepage`,
                  })
                }
                className="loginbutton"
              >
                <img src="/login/github.svg" className="h-12" />
                <h2>Github</h2>
              </button>
              <button
                type="button"
                key="Discord"
                onClick={() =>
                  signIn("discord", {
                    callbackUrl: `/homepage`,
                  })
                }
                className="loginbutton"
              >
                <img src="/login/discord.png" className="h-12" />
                <h2>Discord</h2>
              </button>

            </div>
            <Button
              onClick={() =>
                signIn("credentials", {
                  callbackUrl: `/homepage`,
                })
              }
              className="w-3/4 m-auto h-1/3 sm:text-[1.75vw] font-bold"
            >
              Guest User
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
