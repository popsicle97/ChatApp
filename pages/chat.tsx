import {
  ActionIcon,
  AppShell,
  Aside,
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Footer,
  Grid,
  Header,
  Input,
  MediaQuery,
  Navbar,
  useMantineTheme,
  Text,
  Transition,
  Stack,
  Textarea,
  Group,
  Divider,
} from "@mantine/core";
import { heights } from "@mantine/core/lib/components/Badge/Badge.styles";
import { styled } from "@stitches/react";
import { NextPage } from "next";
import { useState } from "react";
import {
  Icons,
  Plus,
  Search,
  Send,
  Settings,
  UserCircle,
} from "tabler-icons-react";
import ChatBox from "../components/chatbox";
import ProfileMenu from "../components/profilemenu";
import Sidebar from "../components/sidebar";

function Chat() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openedAside, setOpenAside] = useState(true);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
        body: {},
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      padding={0}
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          zIndex={1}
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Sidebar></Sidebar>
        </Navbar>
      }
      aside={
        openedAside ? (
          <div></div>
        ) : (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        )
      }
      header={
        <Header height={60} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <h2>ChatMe</h2>
            Test
            <div>
              <ProfileMenu></ProfileMenu>
            </div>
          </div>
        </Header>
      }
    >
      {/* <Button onClick={() => setOpenAside(o => !o)}></Button> */}
      <ChatBox></ChatBox>
    </AppShell>
  );
}

export default Chat;
