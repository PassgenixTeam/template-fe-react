import { Seo } from "@global/components";
import { Box, Container, Flex, Section } from "@radix-ui/themes";
import { useEffect } from "react";
import { Welcome } from "./components";
import { HomePageProps } from "./type";

export const HomePage = ({}: HomePageProps) => {
	useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

	return (
		<>
			<Flex direction="column" align="stretch" gap="5">
				<Section size="1" pb="0">
					<Box py="9" style={{ backgroundColor: "var(--accent-2)" }}>
						<Container>
							<Welcome />
						</Container>
					</Box>
				</Section>
			</Flex>

			<Seo title="Home" />
		</>
	);
};

// Using for lazy loading page
export default HomePage;
