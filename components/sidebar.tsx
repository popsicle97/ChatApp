import { Menu, Divider, Text, ActionIcon, Input, Stack } from '@mantine/core';
import { styled } from '@stitches/react';
import { Plus, Search } from 'tabler-icons-react';
import UserChat from './userchat';

export default function Sidebar() {

    const AddHeader = styled("div", {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '80px',
        padding: 'auto'
    })

    const H3 = styled('h3', {
        color: "#877BAE",
        fontSize: '23px'
    })

    return (
        <div>
            <AddHeader>
                <H3>
                    Chats
                </H3>
                <ActionIcon variant="filled" color='grape' size={40} sx={{ borderRadius: '20px', width: '70px', height: '30px', color: '#ebddf1', margin: 'auto 0px auto auto' }}>
                    <Plus />
                </ActionIcon>
            </AddHeader>
            <Input icon={<Search />} variant="filled" size="sm" radius="md" placeholder="Search person or coversations" />
            <h4 style={{ color: "#877BAE" }}>Recent chats</h4>
            <Stack>
                <UserChat></UserChat>
            </Stack>
        </div>
    );
}