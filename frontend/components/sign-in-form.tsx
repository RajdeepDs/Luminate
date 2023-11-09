"use client";

import * as z from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "@/graphql/Mutations";

import { useCreateSession } from "@/lib/session";

const formSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Password must have atleast 8 characters")
    .max(50),
});

export default function SignInForm() {
  const route = useRouter();
  const { toast } = useToast();
  const { createSessionWithUserDetails } = useCreateSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [signIn, { error }] = useMutation(SIGNIN_USER);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: error.message,
        description: "Please try again.",
      });
    }
  }, [error]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data } = await signIn({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      if (data && data.signIn.accessToken) {
        sessionStorage.setItem("token", data.signIn.accessToken);
        const session = await createSessionWithUserDetails();
      }
      toast({
        title: "Sign in successful",
        description: "You have successfully signed in.",
      });
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  autoComplete="off"
                  {...field}
                />
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
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="text-md w-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
