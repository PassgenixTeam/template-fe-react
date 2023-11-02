import { TileBackground } from "@components";
import { Seo } from "@global/components";
import { Container, Flex, Section } from "@radix-ui/themes";
import { useEffect } from "react";
import { AboutUsChannels, AboutUsHeader, AboutUsIntroduce, AboutUsMessage, AboutUsMessage2, AboutUsMissionAndVision, AboutUsSummary, AboutUsWhy } from "./components";
import { AboutUsPageProps } from "./type";

export const AboutUsPage = ({}: AboutUsPageProps) => {
	useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

	return (
		<>
			<Flex direction="column" align="stretch">
				<Section size="1">
					<Container>
						<AboutUsHeader />
					</Container>
				</Section>

				<Section size="2">
					<Container>
						<AboutUsIntroduce />
					</Container>
				</Section>

				<Section size="2">
					<Container>
						<AboutUsSummary />
					</Container>
				</Section>

				<Section size="1">
					<Container>
						<AboutUsMessage />
					</Container>
				</Section>

				<Section size="1">
					<Container>
						<AboutUsMessage2 />
					</Container>
				</Section>

				<Section size="2">
					<Container>
						<AboutUsMissionAndVision />
					</Container>
				</Section>

				<Section size="2" pb="0" style={{ zIndex: 1 }}>
					<Container>
						<AboutUsChannels />
					</Container>
				</Section>

				<TileBackground style={{ marginTop: "calc(var(--space-5) * -1)" }}>
					<Section size="3">
						<Container>
							<AboutUsWhy />
						</Container>
					</Section>
				</TileBackground>
			</Flex>

			<Seo title="About Us" />
		</>
	);
};

// Using for lazy loading page
export default AboutUsPage;
