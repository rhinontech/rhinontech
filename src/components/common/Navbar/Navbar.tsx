"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { CircleUserRound, MenuIcon, User, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AnimationContainer from "./AnimatedContainer/AnimatedContainer";
import Image from "next/image";
import RHLogo from "@/assets/logo/RH-Logo.png";
import RichHarbor from "@/assets/logo/Rich Harbor R.png";
import RhinonLogo from '@/assets/logo/RhinonTechLogo.png'
import { useRouter } from "next/navigation";

export const NAV_LINKS = [
  { name: "Process", link: "/#process" },
  { name: "Services", link: "/#services" },
  { name: "Benefits", link: "/#benefits" },
  { name: "Plans", link: "/#plans" },
  { name: "Contact", link: "/#contactus" },
  // { name: "Academy", link: "#" },
  // { name: "Pricing", link: "#pricing" },
];

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

const Navbar = () => {
  const { user } = { user: "user" };

  const route = useRouter();

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false);
  });

  // Track page scroll instead of element scroll
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <header className="fixed max-w-screen top-0 inset-x-0 z-50">
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          width: visible ? "40%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        style={{
          minWidth: "800px",
        }}
        className={cn(
          "hidden lg:flex bg-transparent self-start items-center justify-between py-4 rounded-2xl relative z-[50] mx-auto w-full backdrop-blur",
          visible &&
          "bg-background/60 py-2 border border-t-foreground/20 border-b-foreground/10 border-x-foreground/15 w-full"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={RhinonLogo}
                alt="Rhinon Tech Logo"
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Center Links */}
          <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-2 text-sm text-muted-foreground font-medium">
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => (
                <AnimationContainer
                  key={index}
                  animation="fadeDown"
                  delay={0.1 * index}
                >
                  <div className="relative">

                    <Link
                      href={link.link}
                      className="hover:text-foreground transition-all duration-500 hover:bg-accent rounded-[10px] px-4 py-2"
                    >
                      {link.name}
                    </Link>
                  </div>

                </AnimationContainer>
              ))}

            </AnimatePresence>
          </div>

          {/* Right Button */}
          {/* <ContactUs /> */}

          <div>
            <Button className="cursor-ponter text-white rounded-[8px]" >Get in touch</Button>
          </div>

          {/* {authUser && <div className=""><CircleUserRound /></div>}
          {!authUser && <div className="flex gap-3">
            <Button className="cursor-pointer" onClick={() => route.push('/login')}>Log in</Button>
            <Button className="cursor-pointer" onClick={() => route.push('/signup')}>Sign up</Button>
          </div>} */}
          {/* <AnimationContainer animation="fadeLeft" delay={0.1}>
            <div className="flex items-center gap-x-4">
              {user ? (
                <Link href="#">
                  <Button>Dashboard</Button>
                </Link>
              ) : (
                <Link href="/signup">
                  <Button size="sm">Get started</Button>
                </Link>
              )}
            </div>
          </AnimationContainer> */}
        </Wrapper>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
          borderTopLeftRadius: open ? "0.75rem" : "2rem",
          borderTopRightRadius: open ? "0.75rem" : "2rem",
          borderBottomLeftRadius: open ? "0" : "2rem",
          borderBottomRightRadius: open ? "0" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-4 z-50",
          visible && "bg-neutral-950 w-11/12 border",
          open && "border-transparent"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <div className="flex items-center justify-between gap-x-4 w-full">
            <AnimationContainer animation="fadeRight" delay={0.1}>
              <Link href="/">
                <Image
                  src={RhinonLogo}
                  alt="Rhinon Tech Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </AnimationContainer>

            <AnimationContainer animation="fadeLeft" delay={0.1}>
              <div className="flex items-center justify-between gap-x-4 w-full">
                {/* <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={RichHarbor}
                    alt="Rich Harbor Logo"
                    className="h-10 w-auto"
                  />
                </Link> */}
                <div>
                  <Button className="cursor-ponter rounded-[10px] text-white" onClick={() => route.push('/partner-with-us')}>Join us</Button>
                </div>
                {open ? (
                  <XIcon
                    className="text-white"
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <MenuIcon
                    className="text-white"
                    onClick={() => setOpen(!open)}
                  />
                )}
              </div>
            </AnimationContainer>
          </div>
        </Wrapper>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-b-xl absolute top-16 bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-2 w-full px-4 py-8 shadow-xl shadow-neutral-950"
            >
              {NAV_LINKS.map((navItem, idx) => (
                <AnimationContainer
                  key={`link-${idx}`}
                  animation="fadeRight"
                  delay={0.1 * (idx + 1)}
                  className="w-full"
                >
                  <Link
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative text-neutral-300 hover:bg-neutral-800 w-full px-4 py-2 rounded-lg"
                  >
                    <motion.span>{navItem.name}</motion.span>
                  </Link>
                </AnimationContainer>
              ))}
              {/* <AnimationContainer
                animation="fadeUp"
                delay={0.5}
                className="w-full"
              >
                {user ? (
                  <Link href="/dashboard" className="w-full">
                    <Button
                      onClick={() => setOpen(false)}
                      variant="default"
                      className="block md:hidden w-full"
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/signin" className="w-full">
                      <Button
                        onClick={() => setOpen(false)}
                        variant="secondary"
                        className="block md:hidden w-full"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" className="w-full">
                      <Button
                        onClick={() => setOpen(false)}
                        variant="default"
                        className="block md:hidden w-full"
                      >
                        Start for free
                      </Button>
                    </Link>
                  </>
                )}
              </AnimationContainer> */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
