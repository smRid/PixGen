"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          router.refresh();
        },
      },
    });
  };

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          {user && (
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
          )}
        </ul>

        <div>
          {!isPending && !user && (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}
          {!isPending && user && (
            <ul className="flex items-center gap-4 text-sm">
              <Avatar>
                <Avatar.Image
                  alt={user.name || "User"}
                  src={user.image}
                  referrerPolicy = "no-referrer"

                />
                <Avatar.Fallback>{user.name?.slice(0, 2).toUpperCase() || "U"}</Avatar.Fallback>
              </Avatar>
              <p>Welcome, <br />{user.name}!</p>
              <li>
                <Button variant="danger" onClick={handleSignOut}>SignOut</Button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
