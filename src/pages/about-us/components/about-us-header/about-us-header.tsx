import { Center } from "@components";
import { Box, Button, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import { AboutUsHeaderProps } from "./type";

import styles from "./style.module.scss";

export const AboutUsHeader = ({ className, ...props }: AboutUsHeaderProps) => {
	return (
		<Box position="relative" className={cls(styles["about-us-header"], className)} {...props}>
			<Box position="absolute" top="0" left="0" width="100%" height="100%"></Box>
			<Center position="relative" direction="column" py="8" gap="6">
				<Text trim="both" size="1" weight="medium" className={styles["badge"]}>
					THE RIKE INC
				</Text>
				<Heading className={styles["title"]}>We Are Tea Lover.</Heading>
				<Button variant="outline">Explore Our Story</Button>
			</Center>
		</Box>
	);
};
