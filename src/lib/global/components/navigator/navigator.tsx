import { Icon, Image, LayoutGrid } from "@components";
import { LogoImg } from "@global/images";
import { Box, Button, Container, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import cls from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigatorProps } from "./type";

import styles from "./style.module.scss";

const navigationItems = [
	{
		title: "HOME",
		to: "/",
	},
	{
		title: "ABOUT US",
		to: "/about-us",
	},
];

export const Navigator = ({ ...props }: NavigatorProps) => {
	const [isShownSearchBar, setIsShownSearchBar] = useState<boolean>(false);

	return (
		<Container py="6" {...props}>
			<LayoutGrid width="100%" justify="center" align="center">
				<LayoutGrid.Item span="3">
					<NavLink to="/">
						<Image
							src={LogoImg}
							alt="Logo"
							width={{
								initial: "4rem",
								md: "7rem",
							}}
							height={{
								initial: "4rem",
								md: "7rem",
							}}
							objectFit="contain"
						/>
					</NavLink>
				</LayoutGrid.Item>

				<LayoutGrid.Item asChild span="6">
					<Flex
						display={{
							initial: "none",
							md: "flex",
						}}
						direction="column"
						align="stretch"
						gap="4"
					>
						<TextField.Root size="3">
							<TextField.Slot>
								<Icon ri="ri-search-2-line ri-md" />
							</TextField.Slot>
							<TextField.Input placeholder="Search your key..." />
						</TextField.Root>

						<Flex justify="center" align="center" gap="4">
							{navigationItems.map(({ title, to }) => (
								<NavLink key={title} to={to} className={styles["nav-link"]}>
									{({ isActive }) => <Text className={cls(styles["text"], isActive && styles["active"])}>{title}</Text>}
								</NavLink>
							))}
						</Flex>
					</Flex>
				</LayoutGrid.Item>

				<LayoutGrid.Item
					asChild
					span={{
						initial: "9",
						md: "3",
					}}
				>
					<Flex justify="end" align="center" gap={{ initial: "3", md: "5" }}>
						<Box display={{ initial: "block", md: "none" }}>
							<IconButton variant={isShownSearchBar ? "solid" : "outline"} color="green" size="3" onClick={() => setIsShownSearchBar(!isShownSearchBar)}>
								<Icon ri="ri-search-2-line ri-md" />
							</IconButton>
						</Box>
						<Button variant="ghost" size="4" color="gray" disabled={true}>
							<Icon ri="ri-google-fill ri-md" />
							<Text weight="medium" size="3">
								Sign In
							</Text>
						</Button>
					</Flex>
				</LayoutGrid.Item>
			</LayoutGrid>

			<Flex
				display={{
					initial: "flex",
					md: "none",
				}}
				direction="column"
				align="stretch"
				gap="4"
				mt="4"
			>
				<Box display={isShownSearchBar ? "block" : "none"}>
					<TextField.Root size="3">
						<TextField.Slot>
							<Icon ri="ri-search-2-line ri-md" />
						</TextField.Slot>
						<TextField.Input placeholder="Search your key..." />
					</TextField.Root>
				</Box>

				<Flex justify="center" align="center" gap="4" wrap="wrap">
					{navigationItems.map(({ title, to }) => (
						<NavLink key={title} to={to} className={styles["nav-link"]}>
							{({ isActive }) => <Text className={cls(styles["text"], isActive && styles["active"])}>{title}</Text>}
						</NavLink>
					))}
				</Flex>
			</Flex>
		</Container>
	);
};
