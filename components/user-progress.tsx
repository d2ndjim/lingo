import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: any;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};
export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src={activeCourse.imageSrc}
            alt="Points"
            className="mr-2"
            width={32}
            height={32}
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src={activeCourse.imageSrc}
            alt="Hearts"
            className="mr-2"
            width={32}
            height={32}
          />
          {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
        </Button>
      </Link>
    </div>
  );
};