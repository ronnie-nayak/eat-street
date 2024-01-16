'use client'
import { BuiltInProviderType } from "next-auth/providers/index"
import { ClientSafeProvider, LiteralUnion, getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@repo/ui"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui"
import { Input } from "@repo/ui"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === "authenticated") {
    router.push("/homepage")
  }
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setProvider()
  }, [])

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }







  if (status === "loading") {
    return <div>Loading</div>
  }
  return (
    <div className="h-screen w-screen bg-blue-400" >
      <div className="h-screen w-4/12 bg-white">
        lsdjfldskjf
        {providers &&
          (
            <>
              <button
                type="button"
                key="Google"
                onClick={() => signIn("google")}
                className="bg-blue-600 text-black font-bold py-2 px-4 rounded mr-16 border border-black"
              >
                "Google"
              </button>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is passman.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </>
          )
        }

      </div>
    </div >
  )
}
