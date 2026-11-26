import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { authService } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function PainelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { data: user } = await authService.getMe();

    if (!user) {
        redirect("/login");
    }

    return (
        <SidebarProvider>
            <AppSidebar user={user} />
            <main className="app-main flex-1">
                <div className="app-topbar">
                    <div className="app-topbar-label">
                        <SidebarTrigger className="rounded-xl border border-border bg-card shadow-sm" />
                        <span>Casa de Queijo Araçar</span>
                    </div>
                    <span className="app-status">Estoque atualizado</span>
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}
