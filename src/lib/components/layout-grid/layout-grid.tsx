import { Box, Grid, withBreakpoints } from "@radix-ui/themes";
import { MAX_LAYOUT_GRID_COLUMNS } from "./constants";
import { LayoutGridItemProps, LayoutGridProps } from "./type";
import cls from "classnames";

import "./style.scss";

export const LayoutGrid = ({ columns = MAX_LAYOUT_GRID_COLUMNS, children, ...props }: LayoutGridProps) => {
	return (
		<Grid columns={columns} {...props}>
			{children}
		</Grid>
	);
};

LayoutGrid.Item = ({ span = "1", className, children, ...props }: LayoutGridItemProps) => {
	return (
		<Box className={cls("cs-lgi", withBreakpoints(span, "cs-lgi-span"), className)} {...props}>
			{children}
		</Box>
	);
};
