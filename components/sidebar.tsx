"use client"

import { CalendarSearch, Inbox, LayoutDashboard, LogOut, Search, User as UserIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { Button } from "./ui/button"
import { logoutAction } from "@/actions/auth"
import { usePathname } from "next/navigation"

type Props = {
  user: {
    name: string;
    email: string;
    avatar: string;
  }
}

export function AppSidebar({ user }: Props) {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Sidebar className="app-sidebar">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard">
                  <SidebarMenuButton isActive={isActive("/dashboard")}>
                    <LayoutDashboard /> <span>Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Gestão</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/categories">
                  <SidebarMenuButton isActive={isActive("/categories")}>
                    <Search /> <span>Categorias</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/users">
                  <SidebarMenuButton isActive={isActive("/users")}>
                    <UserIcon /> <span>Usuários</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Estoque</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/products">
                  <SidebarMenuButton isActive={isActive("/products")}>
                    <Inbox /> <span>Produtos</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/moves">
                  <SidebarMenuButton isActive={isActive("/moves")}>
                    <CalendarSearch /> <span>Entrada/Saída</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3 mb-4">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-primary" />
            </div>
          )}
          <div className="flex-1 min-w-0">
              <p className="sidebar-user-name text-sm font-medium truncate">{user.name}</p>
              <p className="sidebar-user-email text-xs truncate">{user.email}</p>
          </div>
          <ThemeToggle />
          <Button onClick={logoutAction} size="icon" variant="outline" className="sidebar-control-button sidebar-logout-button hover:bg-destructive hover:text-white">
            <LogOut />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
