import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  Key,
  Mail,
  Phone,
  User,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { createClient } from '@supabase/supabase-js'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  business_name: z
    .string()
    .min(2, { message: 'Business Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  work_email: z
    .string()
    .email({ message: 'Invalid work email address.' })
    .optional(),
  mobile_number: z
    .string()
    .min(10, { message: 'Mobile number must be at least 10 digits.' })
    .max(15, { message: 'Mobile number must not exceed 15 digits.' })
    .regex(/^[+]?[0-9\s-]{10,15}$/, {
      message: 'Please enter a valid mobile number.',
    }),
})

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const ContactUsFormSupa = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      business_name: '',
      mobile_number: '',
      email: '',
      work_email: '',
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
            work_email: values.work_email,
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
    <Dialog className="">
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-gradient-to-r from-secondary to-secondary/80 rounded-md text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
        >
          Get API Keys
          <ArrowRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden select-none">
        <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent p-6 pb-8 relative">
          <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(68,68,68,0.05)_50%,transparent_75%)] opacity-20" />
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight bg-clip-text text-secondary bg-gradient-to-r from-secondary to-/80 flex items-center gap-2">
              Get Your API Keys
            </DialogTitle>
            <DialogDescription className="text-left text-foreground/80 mt-2">
              Join thousands of developers building amazing applications with
              our API.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Name"
                            autocomplete
                            {...field}
                            className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="business_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Business Name"
                            {...field}
                            className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Mobile Number"
                            {...field}
                            className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="work_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Work Email"
                            {...field}
                            className="w-full pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="bg-secondary/10 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div className="text-sm text-foreground/80">
                    <p className="font-medium mb-1">Important Note</p>
                    <p>
                      Your API keys will be sent to both email addresses for
                      security purposes. Please ensure they are correct.
                    </p>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex justify-end gap-4 pt-4 border-t mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-secondary to-secondary/80 text-primary-foreground hover:opacity-90 transition-all duration-200 min-w-[140px]"
                >
                  <Key className="w-4 h-4 mr-2" />
                  Get your API key
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ContactUsFormSupa
