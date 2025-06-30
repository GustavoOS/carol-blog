import { AppSidebar } from "@/components/sidebar/app";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function SidebarLayout({ children, currentPath }: { children: React.ReactNode, currentPath: string }) {
    return <SidebarProvider>
        <AppSidebar currentPath={currentPath}/>
        <SidebarTrigger />
        {children}
    </SidebarProvider>
}