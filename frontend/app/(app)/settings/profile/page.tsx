import ProfileForm from "@/components/profile-form";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-xl">Public Profile</h1>
      <Separator />
      <div className="grid grid-cols-2">
        <ProfileForm />
        <div className="flex flex-col px-8">
          <h2 className="flex justify-start">Profile picture</h2>
          <div className="mx-auto flex h-44 w-44 rounded-full bg-gray" />
        </div>
      </div>
    </div>
  );
}
