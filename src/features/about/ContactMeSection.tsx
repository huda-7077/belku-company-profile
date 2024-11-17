"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message can't exceed 2000 characters." }),
});

const ContactMeSection = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { name, email, phone, message } = data;
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/+6282278061089?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.open(whatsappURL, "_blank");

    toast({
      title: "Message sent successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 p-8 text-white">
      <h1 className="mb-10 text-center text-5xl font-bold">Contact</h1>
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Info Section */}
        <div className="rounded-lg bg-red-800 p-6 text-white shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">Your Connection Matters</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-2xl" />
              <p>
                Jl. Putri Tunggal No.9-43, Harjamukti, Kec. Cimanggis, Kota
                Depok, Jawa Barat
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-2xl" />
              <p>+62 21 69696969</p>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-2xl" />
              <p>info@samarasa.com</p>
            </div>
          </div>
          <h3 className="mt-6 text-xl font-bold">SAMARASA COFFEE SHOP</h3>
        </div>

        {/* Form Section */}
        <div className="rounded-lg bg-white p-6 text-black shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-red-800">
            Send Us a Message
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        className="h-[140px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-red-700 text-white hover:bg-red-800"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
