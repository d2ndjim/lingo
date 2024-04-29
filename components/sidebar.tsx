import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      Sidebar
    </div>
  );
};
