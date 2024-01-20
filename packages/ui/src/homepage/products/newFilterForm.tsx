
'use client'
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../components/ui/button"
import { useForm } from "react-hook-form"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { Checkbox } from "@repo/ui"

const formSchema = z.object({
  lower: z.coerce.number().min(0).optional(),
  upper: z.coerce.number().max(1000).optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  new: z.boolean().optional(),
  sale: z.boolean().optional(),
  sold: z.boolean().optional(),
})
export function NewFilterForm() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const createQueryString = useCallback(
    (values: z.infer<typeof formSchema>) => {
      const params = new URLSearchParams(searchParams.toString())
      for (const [key, value] of Object.entries(values)) {
        if (value === undefined || value === null || value === 0) {
          params.delete(key)
          continue
        }
        params.set(key, value.toString())
      }
      // params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  function onSubmit1(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    router.replace(pathname + "?" + createQueryString(values))
    // @ts-ignore
    // form.reset({ lower: "", upper: "", rating: "" })
  }
  return (
    <div className="bg-white">
      <Button onClick={() => {
        router.replace(pathname)
        // @ts-ignore
        form.reset({ lower: "", upper: "", rating: "", new: false, sale: false, sold: false })
      }} className="flex gap-2 text-[0.85vw] hover:bg-red-300 rounded-full mb-7">
        <h4>X</h4>
        <h2>Clear</h2>
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit1)} className="space-y-8">
          <FormField
            control={form.control}
            name="lower"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Min Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter min price" {...field} />
                </FormControl>
                <FormDescription>
                  Min Price of the product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="upper"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter max price" {...field} />
                </FormControl>
                <FormDescription>
                  Max Price of the product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter rating level" min={1} {...field} />
                </FormControl>
                <FormDescription>
                  Rating of the product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="new"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-[0.85vw] font-bold pb-1">
                    New
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sale"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-[0.85vw] font-bold pb-1">
                    Sale
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sold"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-[0.85vw] font-bold pb-1">
                    Sold
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>

    </div >
  )
}

