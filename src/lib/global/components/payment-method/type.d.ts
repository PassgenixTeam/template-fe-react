import { FlexProps } from "@radix-ui/themes/dist/cjs/components/flex";

export type PaymentMethodType = "paypal" | "googlepay";

export type PaymentMethodProps = FlexProps & {
	type: PaymentMethodType;
	isSelected?: boolean;
};
