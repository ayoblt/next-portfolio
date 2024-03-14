import Link from "next/link";
import { Button } from "./button";
import SendPlaneIcon from "../icons/send-plane";
import { cn } from "@/lib/utils";

const SendMessageBtn = ({ className }: { className?: string }) => {
  return (
    <Button className={cn("w-fit", className)} asChild>
      <Link href="/contact-me" className="flex items-center gap-2">
        send-a-message <SendPlaneIcon className="fill-white" />
      </Link>
    </Button>
  );
};

export default SendMessageBtn;
