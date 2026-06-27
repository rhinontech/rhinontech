import {
  Rocket,
  BookOpen,
  UserCog,
  CreditCard,
  LifeBuoy,
  FileText,
  Zap,
  ShieldCheck,
  Webhook,
  KeyRound,
  BookText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Resolve a lucide icon name (from a folder `meta.json` `icon` field) to a
 * component. Falls back to a neutral file icon for unknown names.
 */
const REGISTRY: Record<string, LucideIcon> = {
  Rocket,
  BookOpen,
  UserCog,
  CreditCard,
  LifeBuoy,
  FileText,
  Zap,
  ShieldCheck,
  Webhook,
  KeyRound,
  BookText,
  Sparkles,
};

export function Icon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const Cmp = (name && REGISTRY[name]) || FileText;
  return <Cmp className={className} aria-hidden />;
}
