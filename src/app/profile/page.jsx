"use client";
import { UpdateUserInfo } from "@/components/UpdateUserInfo";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="w-30 h-30">
          <Avatar.Image
            alt="Raiyan Zannat"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>RZ</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-medium">{user?.name}</h2>
        <p>{user?.email}</p>
        <UpdateUserInfo />
      </Card>
    </div>
  );
};

export default ProfilePage;
