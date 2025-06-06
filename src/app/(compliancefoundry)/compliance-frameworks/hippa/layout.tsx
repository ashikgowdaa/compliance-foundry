
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Foundry Website",
  description: "Generated by create next app",
  keywords: [
    "Compliance",
    "Risk Management",
    "Policy Automation",
    "Regulatory Framework",
    "Governance",
    "Enterprise Compliance",
    "Audit Tools",
    "Compliance Software",
    "Corporate Risk",
    "Compliance Foundry"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
