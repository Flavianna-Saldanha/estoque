import { Boxes } from "lucide-react";

export const Logo = () => {
	return (
		<div className="flex items-center gap-3 text-left">
			<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground shadow-sm">
				<Boxes className="size-5" />
			</div>
			<div className="min-w-0">
				<span className="block truncate text-sm font-bold tracking-tight">Casa de Queijo</span>
				<span className="block truncate text-[0.65rem] font-semibold tracking-[0.16em] text-sidebar-foreground/60 uppercase">Araçar • Estoque</span>
			</div>
		</div>
	);
};
  