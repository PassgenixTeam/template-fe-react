import { Image } from "@components";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import ArrowImg from "./images/arrow.png";
import { AboutUsWhyProps } from "./type";

import styles from "./style.module.scss";

export const AboutUsWhy = ({ className, ...props }: AboutUsWhyProps) => {
	return (
		<Flex direction="column" className={cls(styles["about-us-why"], className)} {...props} gap="6">
			<Flex direction="column" gap="5">
				<Flex align="center" className={styles["subtitle"]} gap="4">
					<Box className={styles["line"]} />
					<Text size="1" weight="bold" className={styles["text"]}>
						THE RIKE STORE
					</Text>
				</Flex>

				<Heading size="7" weight="bold" className={styles["title"]}>
					Why Choose Us?
				</Heading>
			</Flex>

			<Flex
				direction={{
					initial: "column",
					md: "row",
				}}
				className={styles["content"]}
				align="start"
				gap="6"
			>
				<Box position="relative">
					<Text color="gray" className={styles["description"]}>
						We focus on spiritual care for something everyone can experience, helps people to find meaning and purpose in the things we value.
					</Text>
					<Image position="absolute" src={ArrowImg} className={styles["arrow"]} objectFit="contain" width="6rem" height="6rem" display={{ initial: "none", md: "block" }} />
				</Box>
				<Flex direction="column" gap="5">
					<Flex direction="column" className={styles["card"]} style={{ borderLeft: "4px solid var(--accent-9)" }} p="6">
						<Text>
							Not only bringing fresh healthy tea products, but we are also always eager to learn about rare healing teas that can only be grown in Asia. For example, Crinum
							latifolium, Panax Ginseng, Anamu Tea... These kinds of teas have been studied by trustworthy scientists and doctors for their ability to support women's health.
						</Text>
					</Flex>

					<Flex direction="column" className={styles["card"]} style={{ borderLeft: "4px solid var(--orange-9)" }} p="6">
						<Text>
							We focus on spiritual care for something everyone can experience, helps people to find meaning and purpose in the things we value, can bring them to hope in times of
							suffering and loss, and encourages them to seek peace with themselves, others, and what lies beyond.
						</Text>
					</Flex>

					<Flex direction="column" className={styles["card"]} style={{ borderLeft: "4px solid var(--blue-9)" }} gap="3" p="6">
						<Text>
							Customers are the basic value of any business, the only reason for businesses to survive and grow. The "customer-centric" policy only guides the way for all
							activities of the company.
						</Text>
						<Text>
							We listen, analyze and understand the needs of each customer and apply our experience, skills in order to optimize those needs. Each customer is a brick that builds
							up the company's value.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
