import { Image } from "@components";
import { Box, Flex, Text } from "@radix-ui/themes";
import cls from "classnames";
import { AboutUsMessage2Props } from "./type";
import TeaImg from "./images/tea.jpg";

import styles from "./style.module.scss";

export const AboutUsMessage2 = ({ className, ...props }: AboutUsMessage2Props) => {
	return (
		<Flex
			position="relative"
			direction={{
				initial: "column",
				md: "row",
			}}
			align="center"
			className={cls(styles["about-us-message2"], className)}
			{...props}
		>
			<Box
				position={{
					initial: "relative",
					md: "absolute",
				}}
			>
				<Box position="relative">
					<Box position="absolute" className={styles["rect-back"]} />
					<Image
						position="relative"
						src={TeaImg}
						width={{
							initial: "18rem",
							md: "24rem",
						}}
						height={{
							initial: "18rem",
							md: "24rem",
						}}
						className={styles["image"]}
					/>
				</Box>
			</Box>
			<Box position="relative" grow="1" className={styles["content-area"]}>
				<Flex direction="column" gap="3" p="6" style={{ backgroundColor: "white" }}>
					<Text>
						<strong color="green">Vietnam</strong> has strengths in the production of perennial industrial crops due to its{" "}
						<strong>diverse soil, climate and crop ecosystems</strong>.
					</Text>
					<Text>
						Restructuring crops in the direction of <strong>improving quality and efficiency</strong> is affirming the practicality and correctness in order to effectively{" "}
						<strong>exploit potentials and advantages, responded to climate change</strong>.
					</Text>
					<Text>
						Successful transformation has contributed to the development of{" "}
						<strong>modern agricultural production, increasing income for farmers and building new rural areas in the localities</strong>.
					</Text>
				</Flex>
			</Box>
		</Flex>
	);
};
