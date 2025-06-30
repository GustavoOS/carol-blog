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
  SidebarMenuButton,
  SidebarRail,
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
      isActive: true,
      items: [
        {
          title: "Presencial",
          url: "#",
        },
        {
          title: "Online",
          url: "#",
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
          url: "#",
        },
        {
          title: "Grupo de Desafios",
          url: "#",
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
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="text-accent-700">
        Carolina Souza
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild>
              <a href="https://www.instagram.com/carolinasouza.psi/" target="_blank" rel="noopener noreferrer">
                <Instagram />
                <span>Instagram</span>
              </a>
            </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
