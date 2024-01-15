"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "@apollo/client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
  Input,
  Button,
} from "@repo/ui";

import { UPDATE_PROFILE_MUTATION } from "@/graphql/Mutations";

const formSchema = z.object({
  Name: z.string().min(2).max(25),
  Username: z.string().min(2).max(25),
  Email: z.string().email(),
  Bio: z.string().min(15).max(100),
});

interface ProfileFormProps {
  name: string;
  username: string;
  email: string;
  bio: string;
}

export default function ProfileForm({
  name,
  username,
  email,
  bio,
}: ProfileFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: name || "",
      Username: username || "",
      Email: email || "",
      Bio: bio || "",
    },
  });

  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      await updateProfile({
        variables: {
          name: values.Name,
          username: values.Username,
          bio: values.Bio,
        },
      });
      router.refresh();
    } catch (error) {
      console.error("Error updating user :", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input id="Name" placeholder="Full Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input id="Username" placeholder="username" {...field} />
              </FormControl>
              <FormDescription>This is your public username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Write about yourself..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </form>
    </Form>
  );
}
