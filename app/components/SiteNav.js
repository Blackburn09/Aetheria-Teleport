"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", shortLabel: "Home" },
  { href: "/telemetry", label: "Terminals", shortLabel: "Telemetry" },
  { href: "/booking", label: "Dispatch & Quantum Booking", shortLabel: "Booking" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <div className="container">
      <Link href="/" className="nav-brand" aria-label="Aetheria home">
        <span className="brand-mark">A</span>
        <span className="brand-copy">
          <strong>AETHERIA</strong>
          <small>QUANTUM TRANSIT</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Primary navigation">
        <ul>
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="nav-label-full">{item.label}</span>
                  <span className="nav-label-short">{item.shortLabel}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <span className="nav-status"><i /> CORE ONLINE</span>
    </div>
  );
}