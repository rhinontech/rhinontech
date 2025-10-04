import { Spotlight } from "@/components/ui/spotlight";
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RhinonLogo from '@/assets/logo/RhinonTechLogo.png'

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden relative border-t text-white py-20 px-6 md:px-16">
            <Spotlight
                className="-top-32 left-1/2 -translate-x-1/2 -rotate-10"
                fill="oklch(37.9% 0.146 265.522)"
                rx={1800}
                ry={200}
            />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                {/* Left Section */}
                <div className="flex flex-col gap-4 max-w-sm">
                    {/* Logo + Name */}
                    <Link href="/">
                        <Image
                            src={RhinonLogo}
                            alt="Rhinon Tech Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your trusted partner in AI solutions, creating smarter systems for
                        smarter businesses.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Section - Links */}
                <div className="flex gap-16">
                    {/* Sections */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white">Sections</h4>
                        <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                            <li><a href="#">Process</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Plans</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Pages */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white">Pages</h4>
                        <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Coming soon</a></li>
                            <li><a href="#">404</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
