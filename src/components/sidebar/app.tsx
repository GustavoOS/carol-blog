"use client"

import * as React from "react"
import {
  Brain,
  CircleUser, Home, Newspaper, Users
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { Instagram } from "@/components/ui/instagram"


// This is sample data.
const data = {
  projects: [
    {
      name: "Início",
      url: "/",
      icon: Home,
    },
    {
      name: "Blog",
      url: "/blog",
      icon: Newspaper,
    },
    {
      name: "Sobre mim",
      url: "/about",
      icon: CircleUser,
    },
  ],
  navMain: [
    {
      title: "Terapia",
      url: "#",
      icon: Brain,
      items: [
        {
          title: "Online",
          url: "/terapia/online",
        },
        {
          title: "Presencial",
          url: "/terapia/presencial",
        }
      ],
    },
    {
      title: "Grupos",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Grupo Terapêutico",
          url: "/group",
        },
      ],
    }
  ]
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentPath: string;
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const projects = data.projects.map(item => ({...item, isActive: props.currentPath === item.url}));
  const navMain = data.navMain.map(group => ({...group, items: group.items.map(item => ({...item, isActive: props.currentPath === item.url}))}));
  return (
    <Sidebar collapsible="offcanvas" {...props} style={{ borderImage: "linear-gradient(to bottom, #b08d57,#f9d976,#d4af37,#b08d57,#f9d976,#d4af37 ) 0.5" }}>
      <SidebarHeader className="text-wine-700 vibes text-3xl mt-2">
        Carolina Souza
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={projects} />
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild>
              <a href="https://www.instagram.com/carolinasouza.psi/" target="_blank" rel="noopener noreferrer">
                <Instagram />
                <span>Instagram</span>
              </a>
            </SidebarMenuButton>
      </SidebarFooter>
      {/* <SidebarRail className=""/> */}
    </Sidebar>
  )
}
