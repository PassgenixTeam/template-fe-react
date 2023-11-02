import { Image } from "@components";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import { AboutUsMissionAndVisionProps } from "./type";

import { randomImgUrl } from "@utilities";
import styles from "./style.module.scss";
import { useAppSelector } from "@store";

export const AboutUsMissionAndVision = ({ className, ...props }: AboutUsMissionAndVisionProps) => {
	const { breakpoints } = useAppSelector((state) => state.responsive);
	const isMd = breakpoints.includes("md");

	return (
		<Flex direction="column" align="stretch" className={cls(styles["about-us-mission-and-vision"], className)} {...props}>
			<Flex
				direction="column"
				align={{
					initial: "start",
					md: "center",
				}}
				gap="5"
			>
				<Flex align="center" gap="5" className={styles["subtitle"]}>
					<Box className={styles["line"]} display={{ initial: "none", md: "block" }} />
					<Text size="2" weight="bold" className={styles["text"]}>
						MISSION & VISION
					</Text>
					<Box className={styles["line"]} />
				</Flex>
				<Heading size="6" weight="bold" className={styles["title"]}>
					Make Our Life {!isMd && <br />}Great Again
				</Heading>
			</Flex>

			<Flex
				direction="column"
				gap="6"
				mt={{
					initial: "6",
					md: "0",
				}}
			>
				<Flex position="relative" className={styles["left-content"]}>
					<Box position="absolute" className={styles["circle"]} style={{ width: isMd ? "18rem" : "14rem", height: isMd ? "18rem" : "14rem" }} />
					<Image
						position="absolute"
						src={randomImgUrl({ width: 236, height: 236 })}
						width={{
							initial: "12rem",
							md: "16rem",
						}}
						height={{
							initial: "12rem",
							md: "16rem",
						}}
						className={styles["image"]}
					/>
					<Flex position="relative" direction="column" className={styles["card"]} style={{ margin: isMd ? "9rem 0 0 9rem" : "9rem 0 0 2rem" }} gap="2" p="6">
						<Text weight="bold">More than a tea business, our mission is towards the community</Text>
						<Text>
							As you guys may know, the Covid19 pandemic has devastated much of the US and Vietnamese economies, a lot of people lost their jobs and had difficulty maintaining
							their businesses, hence we tried our best to boost our business so as to help improve unemployment in both countries. For us, a successful business is not making much
							money, it is "sharing to be shared" along with contributing humanitarian values to society.
						</Text>
					</Flex>
				</Flex>

				<Flex position="relative" justify="end" className={styles["right-content"]}>
					<Box position="absolute" className={styles["circle"]} style={{ width: isMd ? "16rem" : "10rem", height: isMd ? "16rem" : "10rem" }} />
					<Image
						position="absolute"
						src={randomImgUrl({ width: 236, height: 236 })}
						width={{
							initial: "8rem",
							md: "14rem",
						}}
						height={{
							initial: "8rem",
							md: "14rem",
						}}
						className={styles["image"]}
					/>
					<Flex position="relative" direction="column" className={styles["card"]} style={{ margin: isMd ? "8rem 8rem 0 0" : "8rem 2rem 0 0" }} gap="2" p="6">
						<Text weight="bold" align="right">
							From experienced customers to loyal customers
						</Text>
						<Text align="right">
							In the past, we have cooperated with KOLs by giving away best-selling tea products, listening to their honest feedback and reviews and thereby finding ways to better
							manage product quality. As a result, these KOLs all become our regular customers and give positive feedback.
						</Text>
						<Text align="right" style={{ fontStyle: "italic" }}>
							"Keep up your good work" - They said.
						</Text>
					</Flex>
				</Flex>

				<Flex
					position="relative"
					className={styles["left-content"]}
					ml={{
						initial: "0",
						md: "9",
					}}
				>
					<Box position="absolute" className={styles["circle"]} style={{ width: isMd ? "16rem" : "10rem", height: isMd ? "16rem" : "10rem" }} />
					<Image
						position="absolute"
						src={randomImgUrl({ width: 236, height: 236 })}
						width={{
							initial: "8rem",
							md: "14rem",
						}}
						height={{
							initial: "8rem",
							md: "14rem",
						}}
						className={styles["image"]}
					/>
					<Flex position="relative" direction="column" className={styles["card"]} style={{ margin: isMd ? "8rem 0 0 8rem" : "8rem 0 0 2rem" }} gap="2" p="6">
						<Text weight="bold">More than a tea business, our mission is towards the community</Text>
						<Text>
							As you guys may know, the Covid19 pandemic has devastated much of the US and Vietnamese economies, a lot of people lost their jobs and had difficulty maintaining
							their businesses, hence we tried our best to boost our business so as to help improve unemployment in both countries. For us, a successful business is not making much
							money, it is "sharing to be shared" along with contributing humanitarian values to society.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
