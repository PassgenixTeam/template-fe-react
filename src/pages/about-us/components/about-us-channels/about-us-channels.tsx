import { Icon, Link } from "@components";
import { Flex, Text } from "@radix-ui/themes";
import cls from "classnames";
import { AboutUsChannelsProps } from "./type";

import styles from "./style.module.scss";

export const AboutUsChannels = ({ className, ...props }: AboutUsChannelsProps) => {
	return (
		<Flex position="relative" direction="column" align="center" className={cls(styles["about-us-channels"], className)} gap="5" {...props}>
			<Text color="gray">FOR MORE DETAIL, PLEASE VISIT OUR CHANNEL</Text>
			<Flex
				direction={{
					initial: "column",
					md: "row",
				}}
				align="stretch"
				gap={{ initial: "4", md: "6" }}
			>
				<Flex asChild align="center" px="6" py="4" className={styles["card-link"]} gap="3">
					<Link to="https://facebook.com/therikeinc">
						<Icon shrink="0" ri="ri-facebook-circle-fill ri-lg" color="blue" />
						<Text weight="medium" className={styles["text"]}>
							facebook.com/therikeinc
						</Text>
						<Icon shrink="0" ri="ri-external-link-line" />
					</Link>
				</Flex>

				<Flex asChild align="center" px="6" py="4" className={styles["card-link"]} gap="3">
					<Link to="https://facebook.com/therikeinc">
						<Icon shrink="0" ri="ri-facebook-circle-fill ri-lg" color="blue" />
						<Text weight="medium" className={styles["text"]}>
							facebook.com/therikeherb
						</Text>
						<Icon shrink="0" ri="ri-external-link-line" />
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};
