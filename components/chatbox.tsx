import { ActionIcon, Group, Textarea, Tooltip } from '@mantine/core';
import { MoodSmile, Paperclip, Send } from 'tabler-icons-react';
import EmojiPicker from './emojipicker';



export default function ChatBox(this: any) {

    return (
        <div style={{ display: "flex", flexDirection: "column", height: '100%' }}>
            <div style={{ flexGrow: 30, background: 'white', padding: '5px 5px 5px 5px' }}>
                Chat
                {/* <EmojiPicker /> */}
            </div>
            <div style={{ flexGrow: 1, height: '50px', borderTop: '1px solid lightgray' }}>
                <Group sx={{ height: '100%', width: '100%', padding: '10px 5px 10px 5px' }} noWrap direction='row' spacing={5}>
                    <Textarea placeholder="Enter message" sx={{ width: '100%' }}>
                    </Textarea>
                    <Tooltip position="top" placement="end" gutter={10} label={"Attach File"}>
                        <ActionIcon variant="transparent" color='grape' sx={{ height: '100%', width: '4%', minWidth: '40px', borderRadius: '5px' }}>
                            <Paperclip />
                        </ActionIcon>
                    </Tooltip>

                    <Tooltip position="top" placement="end" gutter={10} label={"Send"}>
                        <ActionIcon variant="filled" color='grape' sx={{ height: '100%', width: '4%', minWidth: '40px', borderRadius: '5px', color: '#ebddf1' }}>
                            <Send />
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </div>
        </div>
    );
}