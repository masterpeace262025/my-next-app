import { AdminNav } from "@/app/components/ui/AdminNav";

// Rootlayout for Admin
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full" >
      <AdminNav />
      {children}
    </div>
  );
}
