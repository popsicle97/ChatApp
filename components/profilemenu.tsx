import { Menu, Divider, Text, ActionIcon } from '@mantine/core';
import { Settings, Search, Photo, MessageCircle, Trash, ArrowsLeftRight, UserCircle, AlignCenter, Logout, ClearAll } from 'tabler-icons-react';

export default function ProfileMenu() {
    return (
        <Menu transition="slide-left" transitionDuration={300} placement='center' sx={{ display: 'flex' }} control={<ActionIcon sx={{ alignSelf: 'center', justifySelf: 'center' }}>
            <UserCircle size={60}></UserCircle>
        </ActionIcon>}>
            <Menu.Label>Profile</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>Change name</Menu.Item>

            <Divider />
            <Menu.Item color="yellow" icon={<ClearAll size={14} />}>Clear messages</Menu.Item>
            <Menu.Item color="red" icon={<Trash size={14} />}>Delete account</Menu.Item>
        </Menu>
    );
}