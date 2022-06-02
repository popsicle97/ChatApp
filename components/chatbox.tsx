import { ActionIcon, Group, Textarea, Tooltip, Modal } from "@mantine/core";
import { MoodSmile, Paperclip, Send } from "tabler-icons-react";
import EmojiPicker from "./emojipicker";
import { useState } from "react";
import Dropfile from "./dropfile";

export default function ChatBox(this: any) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          flexGrow: 30,
          background: "white",
          padding: "5px 5px 5px 5px",
        }}
      >
        Chat
        {/* <EmojiPicker /> */}
        {/* <Modal
          opened={opened}
          transition="slide-down"
          onClose={() => setOpened(false)}
          title="Choose file"
        >
        </Modal> */}
      </div>
      <div
        style={{
          flexGrow: 1,
          height: "50px",
          borderTop: "1px solid #e9ecef",
          backgroundColor: "white",
        }}
      >
        <Group
          sx={{ height: "100%", width: "100%", padding: "10px 5px 10px 5px" }}
          noWrap
          direction="row"
          spacing={5}
        >
          <Textarea
            variant="unstyled"
            placeholder="Enter message"
            sx={{
              width: "100%",
            }}
          ></Textarea>
          <Tooltip
            position="top"
            placement="end"
            gutter={10}
            label={"Attach File"}
          >
            <ActionIcon
              variant="transparent"
              color="grape"
              onClick={() => <Dropfile opened={true}></Dropfile>}
              sx={{
                height: "100%",
                width: "4%",
                minWidth: "40px",
                borderRadius: "5px",
              }}
            >
              <Paperclip />
            </ActionIcon>
          </Tooltip>

          <Tooltip position="top" placement="end" gutter={10} label={"Send"}>
            <ActionIcon
              variant="filled"
              color="grape"
              sx={{
                height: "100%",
                minHeight: "50px",
                width: "4%",
                minWidth: "45px",
                borderRadius: "5px",
                color: "#ebddf1",
              }}
            >
              <Send />
            </ActionIcon>
          </Tooltip>
        </Group>
      </div>
    </div>
  );
}
