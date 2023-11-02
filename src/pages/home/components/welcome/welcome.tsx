import { Flex, Heading, Text } from "@radix-ui/themes";
import { WelcomeProps } from "./type";

import style from "./style.module.scss";

export const Welcome = ({ ...props }: WelcomeProps) => {
	return (
		<Flex direction="column" align="stretch" gap="8" {...props}>
			<Flex direction="column" align="center" gap="5">
				<Heading
					as="h1"
					size={{
						initial: "3",
						md: "6",
					}}
					className={style["title"]}
				>
					REACT FRONTEND BASE
				</Heading>

				<Text align="center" style={{ alignSelf: "center", maxWidth: "48rem" }}>
					The template includes a variety of pre-configured features, such as routing, state management, and API integration, which can be easily customized to suit the specific
					needs of any project. It also includes a set of reusable UI components, which follow best practices for accessibility and responsive design.
				</Text>
			</Flex>
		</Flex>
	);
};
