import { FlexProps } from "@radix-ui/themes/dist/cjs/components/flex";

export type PaginationProps = FlexProps & {
	page?: number;
	totalPages?: number;
	onPageChange?: (newPage: number) => void;
};
