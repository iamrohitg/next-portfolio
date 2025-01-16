"use client";

import { Download, Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { MagicCard } from "./ui/MagicCard";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rohitghosh76@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0118]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white flex items-center justify-center gap-2">
              <User className="size-8" />
              About <span className="text-purple-400">Me</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <MagicCard
            className="relative overflow-hidden rounded-lg border bg-[#161A31] p-2"
            glowClassName="!from-purple-500/20 !via-purple-400/20 !to-purple-300/20"
          >
            <Image
              alt="Profile picture"
              className="aspect-square object-cover w-full rounded-lg"
              height={400}
              width={400}
              src="/placeholder.svg"
              priority
            />
          </MagicCard>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter text-white">
                Rohit Ghosh
              </h3>
              <p className="text-purple-400">Web Developer | AI</p>
            </div>
            <p className="text-gray-400 max-w-[600px]">
              Under Graduate student in Computer Science & Engineering, planning
              to be a data scientist and interested in all technologies related
              to AI such as machine learning and deep learning and also web
              development. Always trying to improve my coding skills & knowledge
              in this field.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <User className="size-4" />
                  <span className="font-medium">Age:</span> 23
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="size-4" />
                  <span className="font-medium">Phone:</span> +91 9073060115
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="size-4" />
                  <span className="font-medium">Email:</span>{" "}
                  rohitghosh76@gmail.com
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="size-4" />
                  <span className="font-medium">Location:</span> Kolkata, India
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <MagicButton
                title="Download Resume"
                icon={<Download className="size-4" />}
                position="left"
                handleClick={() => window.open("/resume.pdf", "_blank")}
                otherClasses="!bg-[#161A31] hover:!bg-[#1f2543]"
              />
              <MagicButton
                title={copied ? "Email Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] hover:!bg-[#1f2543]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
