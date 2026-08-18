import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SmartImage({
  src,
  alt,
  ready,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  ready: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!ready) {
    return (
      <div className={cn("flex h-full w-full items-center justify-center bg-steel", className)}>
        <ImageIcon className="h-8 w-8 text-paper-dim/40" strokeWidth={1.3} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("duotone object-cover", className)}
    />
  );
}
