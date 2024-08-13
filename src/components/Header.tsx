import React from "react";
import Section from "./Section";
import { Button, buttonVariants } from "./ui/button";
import { GithubIcon } from "./icons/GitHubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TwitterIcon } from "./icons/TwitterIcon";

const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary">Matthieu.com</h1>
        <p className="text-lg text-muted">Software Engineer</p>
        <div className="flex-1" />
        <ul>
          <Link
            href=""
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href=""
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};

export default Header;
