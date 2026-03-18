import { Navbar } from "@/components/sections/Navbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cosmic-black text-foreground selection:bg-cosmic-violet/30 selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24">
        {children}
      </div>
    </div>
  );
}
