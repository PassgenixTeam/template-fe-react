import { Image, LayoutGrid } from "@components";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import TeaImg from "./images/decors/tea.png";
import { AboutUsIntroduceProps } from "./type";

import { randomImgUrl } from "@utilities";
import styles from "./style.module.scss";

export const AboutUsIntroduce = ({ className, ...props }: AboutUsIntroduceProps) => {
	return (
		<LayoutGrid className={cls(styles["about-us-introduce"], className)} {...props}>
			<LayoutGrid.Item span="1" display={{ initial: "none", md: "block" }} />

			<LayoutGrid.Item
				asChild
				span={{
					initial: "12",
					md: "5",
				}}
			>
				<Flex direction="column" gap="6">
					<Flex direction="column" gap="5">
						<Flex align="center" className={styles["subtitle"]} gap="4">
							<Box className={styles["line"]} />
							<Text size="1" weight="bold" className={styles["text"]}>
								INTRODUCE
							</Text>
						</Flex>

						<Box position="relative" className={styles["title"]}>
							<Image position="absolute" src={TeaImg} width="3.2rem" object-fit="cover" className={styles["image"]} />
							<Heading size="6" weight="bold" className={styles["text"]}>
								About The Rike. Inc
							</Heading>
						</Box>
					</Flex>

					<Flex direction="column" className={styles["description"]} gap="4">
						<Text color="gray">An herbal company and most of our team members are nature lovers, royal design concepts, and passionate about healthy products business.</Text>
						<Text weight="bold" color="gray">
							We decided to start a business in herbal teas, based on royal values.
						</Text>
					</Flex>
				</Flex>
			</LayoutGrid.Item>

			<LayoutGrid.Item span="1" display={{ initial: "none", md: "block" }} />

			<LayoutGrid.Item
				asChild
				span={{
					initial: "12",
					md: "5",
				}}
				mt={{
					initial: "6",
					md: "0",
				}}
			>
				<Box position="relative" className={styles["image-area"]}>
					<Box position="absolute" width="100%" height="100%" className={styles["backdrop"]} />
					<Image position="relative" src={randomImgUrl({ width: 1000, height: 600 })} object-fit="cover" />
				</Box>
			</LayoutGrid.Item>
		</LayoutGrid>
	);
};
