import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = { title: "Join | Iron Therapy Gym" };

export default function ContactPage() {
  return <ContactPageContent />;
}
