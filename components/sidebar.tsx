import Image from "next/image";
import Link from "next/link";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="https://assets.website-files.com/5f6ab89b45559536fe7e0394/5f6bcbf217bcd418d7310a6b_home%20duo%20jumping.svg"
            alt="logo"
            height={40}
            width={40}
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="" />
        <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="" />
        <SidebarItem label="Quests" href="/quest" iconSrc="" />
        <SidebarItem label="Shop" href="/shop" iconSrc="" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin " />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
