import { redirect } from "next/navigation";

// The help center now lives on the home page; keep this path working.
export default function HelpHomePage() {
  redirect("/");
}
