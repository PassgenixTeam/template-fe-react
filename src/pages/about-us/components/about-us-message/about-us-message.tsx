import { LayoutGrid } from "@components";
import { Box, Flex, Text } from "@radix-ui/themes";
import cls from "classnames";
import { AboutUsMessageProps } from "./type";

import styles from "./style.module.scss";

export const AboutUsMessage = ({ className, ...props }: AboutUsMessageProps) => {
	return (
		<LayoutGrid
			gap={{
				initial: "0",
				md: "6",
			}}
			className={cls(styles["about-us-message"], className)}
			{...props}
		>
			<LayoutGrid.Item span="4" display={{ initial: "none", md: "block" }} />

			<LayoutGrid.Item
				asChild
				span={{
					initial: "12",
					md: "7",
				}}
				className={styles["card"]}
			>
				<Box position="relative">
					<Box position="absolute" className={styles["rect-back"]} />
					<Flex position="relative" direction="column" gap="3" className={styles["main-rect"]} p="6">
						<Text color="gray">
							We realize that <strong>Asia</strong> is a potential exporting market for{" "}
							<strong>high-quality organic herbal tea with top experts, experienced farmers, and young students</strong> who are always eager to run a meaningful start-up project
							for the community.
						</Text>
						<Text color="gray">
							Our mission is to help <strong>Americans improve their physical and mental health with royal quality at an affordable price</strong>, instead of paying a substantial
							annual budget for their health care.
						</Text>
					</Flex>
				</Box>
			</LayoutGrid.Item>

			<LayoutGrid.Item span="2" />
		</LayoutGrid>
	);
};
