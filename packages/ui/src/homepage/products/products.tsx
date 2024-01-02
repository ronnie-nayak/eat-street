'use client'
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../components/ui/button"
import { useForm } from "react-hook-form"

export function Products({ filterItems }) {
  const formSchema = z.object({
    lower: z.coerce.number().min(0),
    upper: z.coerce.number().max(1000),
    rating: z.coerce.number().min(5).max(5)
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lower: 0,
      upper: 1000,
      rating: 5
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="bg-white">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="lower"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lower</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter lower level" {...field} />
                </FormControl>
                <FormDescription>
                  Lower level of the product
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
                <FormLabel>Upper</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter upper level" {...field} />
                </FormControl>
                <FormDescription>
                  Upper level of the product
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
                  <Input type="number" placeholder="Enter rating level" {...field} />
                </FormControl>
                <FormDescription>
                  Rating of the product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

    </div>
  )
}

