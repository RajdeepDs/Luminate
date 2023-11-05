import PageHeader from "@/components/page-header";
import { ProfileForm } from "@/components/profile-form";

export default function ProfilePage() {
  return (
    <div className="mx-auto mt-14 w-1/2">
      <PageHeader title={"Profile"} desc={"Manage your Luminate Profile."} />
      <div className="space-y-10">
        <div className="">
          <h1 className="text-lg">Profile picture</h1>
          <div className="h-40 w-40 rounded-full bg-gray" />
        </div>
        <div className="">
          <h1 className="text-lg">Email</h1>
          <p className="text-base font-light text-gray">
            rajdeepds626@gmail.com
          </p>
        </div>
        <ProfileForm />
      </div>
    </div>
  );
}
