import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialMediaData = [
  {
    title: "YouTube",
    href: "#",
    icon: <Youtube className="socialMediaIcon" />,
  },
  { title: "Github", href: "#", icon: <Github className="socialMediaIcon" /> },
  {
    title: "LinkedIn",
    href: "#",
    icon: <Linkedin className="socialMediaIcon" />,
  },
  {
    title: "Facebook",
    href: "#",
    icon: <Facebook className="socialMediaIcon" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center justify-between gap-4", className)}>
        {socialMediaData?.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-center border-white p-2 rounded-full border-1 group",
                  iconClassName,
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-dark font-semibold",
                tooltipClassName,
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
