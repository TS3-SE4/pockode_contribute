import { Menu, Palette, Settings } from "lucide-react";
import { useState } from "react";
import { ConnectionStatus } from "../../../components/ui";
import type { HeaderContentProps } from "../../../lib/registries/headerUIRegistry";

const ACCENT_COLORS = [
	{ name: "Blue", class: "bg-blue-500" },
	{ name: "Green", class: "bg-emerald-500" },
	{ name: "Purple", class: "bg-purple-500" },
	{ name: "Orange", class: "bg-orange-500" },
];

export default function CustomHeader({
	onOpenSidebar,
	onOpenSettings,
	title,
}: HeaderContentProps) {
	const [accentIndex, setAccentIndex] = useState(0);
	const accent = ACCENT_COLORS[accentIndex];

	const cycleAccent = () => {
		setAccentIndex((i) => (i + 1) % ACCENT_COLORS.length);
	};

	return (
		<header className="flex h-12 shrink-0 items-center justify-between border-b border-th-border bg-th-bg-secondary px-4">
			<div className="flex items-center gap-3">
				{onOpenSidebar && (
					<button
						type="button"
						onClick={onOpenSidebar}
						className="-ml-1 flex h-9 w-9 items-center justify-center rounded text-th-text-muted hover:bg-th-bg-tertiary hover:text-th-text-primary md:hidden"
						aria-label="Open menu"
					>
						<Menu className="h-5 w-5" />
					</button>
				)}
				<div className="flex items-center gap-2">
					<div className={`h-2.5 w-2.5 rounded-full ${accent.class}`} />
					<span className="text-sm font-semibold tracking-wide text-th-text-primary">
						{title}
					</span>
					<span className="rounded bg-th-bg-tertiary px-1.5 py-0.5 text-[10px] font-medium text-th-text-muted">
						CUSTOM
					</span>
				</div>
			</div>
			<div className="flex items-center gap-1">
				<button
					type="button"
					onClick={cycleAccent}
					className="flex h-8 w-8 items-center justify-center rounded text-th-text-muted hover:bg-th-bg-tertiary hover:text-th-text-primary"
					aria-label={`Change accent color (current: ${accent.name})`}
				>
					<Palette className="h-4 w-4" />
				</button>
				<ConnectionStatus />
				{onOpenSettings && (
					<button
						type="button"
						onClick={onOpenSettings}
						className="flex h-8 w-8 items-center justify-center rounded text-th-text-muted hover:bg-th-bg-tertiary hover:text-th-text-primary"
						aria-label="Settings"
					>
						<Settings className="h-4 w-4" />
					</button>
				)}
			</div>
		</header>
	);
}
