import { LayoutGrid } from "@components";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import { AboutUsSummaryProps } from "./type";

import styles from "./style.module.scss";

export const AboutUsSummary = ({ className, ...props }: AboutUsSummaryProps) => {
	return (
		<LayoutGrid
			gap={{
				initial: "0",
				md: "6",
			}}
			className={cls(styles["about-us-summary"], className)}
			{...props}
		>
			<LayoutGrid.Item span="1" display={{ initial: "none", md: "block" }} />

			<LayoutGrid.Item
				asChild
				span={{
					initial: "12",
					md: "3",
				}}
				className={styles["card"]}
				style={{ backgroundColor: "var(--accent-2)", borderColor: "var(--accent-11)" }}
				p="6"
			>
				<Box position="relative">
					<Box position="absolute" className={styles["decor-bar"]} style={{ backgroundColor: "var(--accent-11)" }} />
					<Flex direction="column" gap="3">
						<Heading color="green">500+</Heading>
						<Text color="gray">Orders every months.</Text>
					</Flex>
				</Box>
			</LayoutGrid.Item>

			<LayoutGrid.Item
				asChild
				span={{
					initial: "12",
					md: "3",
				}}
				className={styles["card"]}
				style={{ backgroundColor: "var(--orange-2)", borderColor: "var(--orange-11)" }}
				p="6"
				mt={{
					initial: "6",
					md: "0",
				}}
			>
				<Box position="relative">
					<Box position="absolute" className={styles["decor-bar"]} style={{ backgroundColor: "var(--orange-11)" }} />
					<Flex direction="column" gap="3">
						<Heading color="orange">100,000</Heading>
						<Text color="gray">Followers & Feedbacks.</Text>
					</Flex>
				</Box>
			</LayoutGrid.Item>

			<LayoutGrid.Item
				asChild
				span={{
					initial: "12",
					md: "3",
				}}
				className={styles["card"]}
				style={{ backgroundColor: "var(--blue-2)", borderColor: "var(--blue-11)" }}
				p="6"
				mt={{
					initial: "6",
					md: "0",
				}}
			>
				<Box position="relative">
					<Box position="absolute" className={styles["decor-bar"]} style={{ backgroundColor: "var(--blue-11)" }} />
					<Flex direction="column" gap="3">
						<Heading color="blue">650</Heading>
						<Text color="gray">Products & Collections.</Text>
					</Flex>
				</Box>
			</LayoutGrid.Item>

			<LayoutGrid.Item span="2" display={{ initial: "none", md: "block" }} />
		</LayoutGrid>
	);
};
