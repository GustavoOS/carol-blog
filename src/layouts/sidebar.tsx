import { AppSidebar } from "@/components/sidebar/app";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/ui/footer";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

type PageBreadcrumb = {
    titleWithUrl?: string
    url?: string
    title?: string
}

export function SidebarLayout({ children, currentPath, title }: { children: React.ReactNode, currentPath: string, title: PageBreadcrumb }) {
    return <SidebarProvider>
        <AppSidebar currentPath={currentPath} />
        <SidebarInset>
            <div className="flex h-16 shrink-0 items-center gap-2 border-b border-gold bg-lyellow w-full">
                <div className="flex items-center gap-2 px-3">
                    <SidebarTrigger className="hover:bg-wine hover:text-yellow-100 cursor-pointer text-wine-700" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {title.titleWithUrl &&
                                <>
                                    <BreadcrumbItem className="hidden md:block">
                                        {title.titleWithUrl === "Blog" ? <BreadcrumbLink href={title.url} className="text-xl text-wine hover:text-gold-dark">
                                            {title.titleWithUrl}
                                        </BreadcrumbLink> : <BreadcrumbPage className="text-wine text-xl">{title.titleWithUrl}</BreadcrumbPage>}
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                </>}
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-wine text-xl">{title.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <main>
                {children}
            </main>
            <Footer today={new Date()} />
        </SidebarInset>
    </SidebarProvider>
}