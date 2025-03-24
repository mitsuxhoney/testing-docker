import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { BorderBeam } from '@/components/ui/magic-border-beam'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import toast from 'react-hot-toast'
import { cn } from '../lib/utils'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  business_name: z
    .string()
    .min(2, { message: 'Business Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  mobile_number: z
    .string()
    .min(10, { message: 'Mobile number must be at least 10 digits.' })
    .max(15, { message: 'Mobile number must not exceed 15 digits.' })
    .regex(/^[+]?[0-9\s-]{10,15}$/, {
      message: 'Please enter a valid mobile number.',
    }),
})

export function BorderBeamForm({ borderExists }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile_number: '',
      business_name: '',
      email: '',
    },
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(values) {
    try {
      // Insert the form data into your Supabase table
      const { data, error } = await supabase
        .from('contact_messages') // Replace with your table name
        .insert([
          {
            name: values.name,
            business_name: values.business_name,
            mobile_number: values.mobile_number,
            email: values.email,
          },
        ])

      if (error) throw error

      // Show success message with react-hot-toast
      toast.success("Thank you for your message! We'll get back to you soon.")

      // Reset the form
      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)

      // Show error message with react-hot-toast
      toast.error('Something went wrong. Please try again later.')
    }
  }
  return (
    <div className="w-full lg:w-[75%]">
      <Card
        className={cn('relative flex flex-col items-start overflow-hidden')}
      >
        <CardHeader>
          <CardTitle>Contact us</CardTitle>
          <CardDescription>
            Request a callback by filling the details below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile_number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Mobile Number"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="business_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Business Name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-secondary">
                Get your API key
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter />
        <BorderBeam
          duration={8}
          size={100}
          className="from-transparent via-red-500 to-transparent"
        />

        <BorderBeam
          duration={8}
          delay={3}
          size={100}
          className="from-transparent via-blue-500 to-transparent"
        />
      </Card>
    </div>
  )
}
