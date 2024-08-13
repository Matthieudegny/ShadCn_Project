import React, { ComponentPropsWithoutRef } from "react";
import Section from "./Section";

import { GithubIcon } from "./icons/GitHubIcon";

import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 transition-colors font-mono border border-accent px-1 py-0.5 rounded-sm text-primary",
        className
      )}
      {...props}
    />
  );
};

const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="text-5xl text-primary font-bold">Software Engineer</h2>
        <h3 className="text-3xl">Full stack develope</h3>
        <p className="text-base">
          I love creating content on{" "}
          <Code className="inline-flex items-center gap-1">
            <GithubIcon size={16} className="inline" />
            GitHub
          </Code>{" "}
          and <Code>Twitter</Code>.
        </p>
      </div>
      <div className="flex-1">
        <img
          className="w-full h-auto max-w-xs rounded-full"
          src="https://avatars.githubusercontent.com/u/104087150?v=4&size=64"
          alt=""
        />
      </div>
    </Section>
  );
};

export default Hero;
