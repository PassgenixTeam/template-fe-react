import { Breakpoints } from "@radix-ui/themes";
import { useAppSelector } from "@store";

export const useResponsive = (value: Partial<Record<Breakpoints, any>>) => {
	const breakpoints = useAppSelector((state) => state.responsive.breakpoints);

	if (value.xl && breakpoints.includes("xl")) return value.xl;
	if (value.lg && breakpoints.includes("lg")) return value.lg;
	if (value.md && breakpoints.includes("md")) return value.md;
	if (value.sm && breakpoints.includes("sm")) return value.sm;
	if (value.xs && breakpoints.includes("xs")) return value.xs;

	return value.initial || value;
};
