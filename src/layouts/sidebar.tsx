import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
    return <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
    </SidebarProvider>
}