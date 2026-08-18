"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Dumbbell, Images, UserRound, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#services", label: "Programs", icon: Dumbbell },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/about", label: "Coach", icon: UserRound },
  { href: "/contact", label: "Join", icon: MapPin },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur
                 sm:inset-x-auto sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2 sm:rounded-full sm:border sm:border-line sm:bg-steel/90 sm:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
    >
      <div className="grid grid-cols-5 sm:flex sm:items-center sm:gap-1 sm:px-2 sm:py-2">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && item.href !== "/";
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-3 font-condensed text-[11px] uppercase tracking-wide transition-colors",
                "sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 sm:py-2.5 sm:text-xs",
                active ? "text-ember-light sm:bg-ink" : "text-paper-dim hover:text-paper"
              )}
            >
              <Icon className="h-5 w-5 sm:h-4 sm:w-4" strokeWidth={active ? 2.4 : 1.8} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
