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

  if (status === "authenticated") {
    router.replace("/homepage");
  }
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
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2/6 sm:w-2/6 rounded-3xl bg-white p-8 flex flex-col"
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
          <div className="flex flex-col justify-center h-full w-full">
            <div className="flex gap-2 justify-center items-center h-4/6">
              <button
                type="button"
                key="Github"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: `/homepage`,
                  })
                }
                className="text-black font-bold py-4 px-4 h-3/4 rounded border border-black w-5/12 flex justify-center items-center sm:text-[1.5vw]"
              >
                <img src="/login/github.svg" className="h-16" />
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
                className="text-black font-bold py-4 px-4 h-3/4 rounded border border-black w-5/12 flex justify-center items-center sm:text-[1.5vw]
"
              >
                <img src="/login/discord.png" className="h-16" />
                <h2>Discord</h2>
              </button>

            </div>

            <div className="h-full flex flex-col justify-around items-center">
              <Button
                onClick={() =>
                  signIn("credentials", {
                    callbackUrl: `/homepage`,
                  })
                }
                className=" w-3/4 h-[16vw] sm:h-[5vw] sm:text-[1.75vw] font-bold"
              >
                Guest User
              </Button>

              <h2 className=" w-max mx-auto my-4 text-[4vw] sm:text-[1.5vw] font-bold">Kindly wait 5-10 sec for Login to complete</h2>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}
