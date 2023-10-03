"use client";

import * as z from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "@/graphql/Mutations";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must have atleast 3 characters")
    .max(50),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must have atleast 8 characters")
    .max(50),
});

export default function SignUpForm() {
  const route = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [signUp, { error }] = useMutation(SIGNUP_USER);
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: error.message,
        description: "The user you are trying to sign up already exists",
      });
    }
  }, [error]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signUp({
        variables: {
          name: values.username,
          email: values.email,
          password: values.password,
        },
      });
      toast({
        description: "Sign up successful",
      });
      route.push("/sign-in");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
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
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>
    </Form>
  );
}
