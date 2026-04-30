"use client";
import { UpdateUserInfo } from "@/components/UpdateUserInfo";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/signin");
    }
  }, [isPending, router, user]);

  if (isPending) {
    return <p className="mt-5 text-center text-sm text-gray-500">Loading profile...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="w-30 h-30">
          <Avatar.Image
            alt={user.name || "User"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user.name?.slice(0, 2).toUpperCase() || "U"}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-medium">{user?.name}</h2>
        <p>{user?.email}</p>
        <UpdateUserInfo />
      </Card>
    </div>
  );
};

export default ProfilePage;
