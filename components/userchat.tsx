import { Avatar, Group, UnstyledButton, Text, Badge } from "@mantine/core";
import image from "next/image";
import { forwardRef } from "react";
import { ChevronRight } from "tabler-icons-react";

interface UserChatProps extends React.ComponentPropsWithoutRef<'button'> {
    avatar: string;
    name: string;
    message: string;
    time: string;
    icon?: React.ReactNode;
}


const UserChatButton = forwardRef<HTMLButtonElement, UserChatProps>(
    ({ avatar, name, message, time, icon, ...others }: UserChatProps, ref) => (
        <UnstyledButton ref={ref} sx={(theme) => ({
            display: 'block',
            width: '100%',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            padding: '5px 5px 5px 3px',
            borderRadius: '15px',
            '&:hover': {
                backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#fdf2fe',
            },
        })}>
            <Group>
                <Avatar src={avatar} radius="xl" />

                <div style={{ flex: 1 }}>
                    <Text size="sm" weight={500}>
                        {name}
                    </Text>

                    <Text color="dimmed" size="xs">
                        {message}
                    </Text>
                </div>
                <div>
                    <Text size="xs" color="dimmed">
                        {time}
                    </Text>
                    {icon || <Badge color="red" variant="filled">3</Badge>}
                </div>

            </Group>
        </UnstyledButton>
    )
);

export default function UserChat() {



    return (
        <div>
            <UserChatButton name='Amery Tan' message="Hi, how are you" time="1:15pm" avatar="https://static.wixstatic.com/media/97accc_ec04cad33c254b32bb9163100046ae88~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/97accc_ec04cad33c254b32bb9163100046ae88~mv2.jpg">

            </UserChatButton>
        </div>
    );
}