import { SideNav } from "../components/ui/SideNav";

// Rootlayout for dashboard
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <div className="w-[15%]">
        <SideNav />
      </div>
      <div className="w-[85%]">{children}</div>
    </div>
  );
}
