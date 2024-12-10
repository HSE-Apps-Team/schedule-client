import React, { useState, useContext, useEffect } from "react";

import {
  Text,
  Image,
  Box,
  HStack,
  Flex,
  Spacer,
  useDisclosure,
  IconButton,
  Button,
  useColorMode,
  Switch,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  extendTheme,
} from "@chakra-ui/react";

import {
  SettingOutlined,
  GithubOutlined,
  InstagramOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { ChatIcon } from "@chakra-ui/icons";

import logo from "../Assets/hseapps.png";
import useMedia from "../Hooks/useMedia";
import { ThemeContext } from "../Contexts/ThemeContext";
import { hi } from "date-fns/locale";
import { set } from "date-fns";

const Navbar = ({ fullView, setFullView }) => {
  const mobile = useMedia(
    ["(min-width: 750px)", "(max-width: 750px)"],
    [false, true]
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { theme, setThemeSettings, snowSettings } = useContext(ThemeContext);

  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem("scheduleSettings"))
  );
  console.log(`snowSettings: ${snowSettings}`);
  const [snow, setSnow] = useState(snowSettings !== undefined ? snowSettings : true);

  const [settingsPending, setSettingsPending] = useState(settings);

  const handleSave = () => {
    setThemeSettings(settings);
  };
  const closeModal = () => {
    onClose();
    setSettingsPending(settings);
  };

  const handleSnow = () => {
    console.log(`Snow before change: ${snow}`)
    setSnow(!snow);
    console.log(`Snow after change: ${snow}`)
    console.log(`settingsPending before change ${settingsPending}`)
    setSettingsPending({ ...settingsPending, snow: !snow });
    console.log(`settingsPending after change ${settingsPending}`)
  }

  const toggleFullView = () => {
    if (fullView) {
      setFullView(false);
      document.exitFullscreen().catch(() => {});
    } else {
      setFullView(true);
      const screen = document.documentElement;
      screen.requestFullscreen().catch(() => {});
    }
  };

  return (
    <div style={{ zIndex: "2" }}>
      <Flex>
        <HStack style={{ padding: "10px" }}>
          <Box>
            <Image h="40px" src={logo} />
          </Box>
          <Text fontWeight="550" fontSize="2xl">
            HSE Schedule
          </Text>
        </HStack>

        <Spacer />

        <Box style={{ padding: "15px 15px 10px 10px" }}>
          <IconButton
            onClick={onOpen}
            className="button"
            isRound="True"
            icon={<SettingOutlined />}
            aria-label="settings"
          />
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={closeModal} >
        <ModalOverlay />
        <ModalContent className="container shadow">
          <ModalHeader>Settings</ModalHeader>
          <ModalBody>
            <Stack
              direction="column"
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                marginTop: "3px",
              }}
            >
              <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                <Text strong style={{ fontSize: "10px", marginBottom: "10px" }}>
                  ROYAL DAY LUNCH
                </Text>
                <RadioGroup
                  onChange={(e) => {
                    setSettingsPending({ ...settingsPending, royalDay: e });
                  }}
                  value={settingsPending["royalDay"]}
                >
                  <Stack direction="row">
                    <Radio className="radio" value="A">A Lunch</Radio>
                    <Radio className="radio" value="B">B Lunch</Radio>
                    <Radio className="radio" value="C">C Lunch</Radio>
                    <Radio className="radio" value="D">D Lunch</Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                <Text strong style={{ fontSize: "10px", marginBottom: "10px" }}>
                  GRAY DAY LUNCH
                </Text>
                <RadioGroup
                  onChange={(e) => {
                    setSettingsPending({ ...settingsPending, grayDay: e });
                  }}
                  value={settingsPending["grayDay"]}
                >
                  <Stack direction="row">
                    <Radio className="radio" value="A">A Lunch</Radio>
                    <Radio className="radio" value="B">B Lunch</Radio>
                    <Radio className="radio" value="C">C Lunch</Radio>
                    <Radio className="radio" value="D">D Lunch</Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                <Text strong style={{ fontSize: "10px", marginBottom: "10px" }}>
                  DISPLAY
                </Text>
                <RadioGroup
                  onChange={(e) => {
                    setSettingsPending({ ...settingsPending, display: e });
                  }}
                  value={settingsPending["display"]}
                >
                  <Stack direction="row">
                    <Radio className="radio" value="Period">Period</Radio>
                    <Radio className="radio" value="Timer">Timer</Radio>
                  </Stack>
                </RadioGroup>
              </div>

              <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                <Text strong style={{ fontSize: "10px", marginBottom: "10px" }}>
                  SNOW{" "}
                </Text>

                <Switch
                  isChecked={snow}
                  onChange={handleSnow}
                  size="lg"
                ></Switch>
              </div>

              <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                <Text strong style={{ fontSize: "10px", marginBottom: "10px" }}>
                  DARK MODE{" "}
                </Text>

                <Switch
                  isChecked={colorMode == "dark" ? true : false}
                  onChange={toggleColorMode}

                  size="lg"
                ></Switch>
              </div>

              {/* <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                <Text strong style={{ fontSize: "10px", marginBottom: "10px" }}>
                  THEME
                </Text>
                <RadioGroup
                  onChange={(e) => {
                    setSettingsPending({ ...settingsPending, theme: e });
                  }}
                  value={settingsPending["theme"]}
                >
                  <Stack direction="row">
                    <Radio className="radio" value="Basic">Basic</Radio>
                    <Radio className="radio" value="Fall">Fall</Radio>
                    <Radio className="radio" value="Winter">Winter</Radio>
                  </Stack>
                </RadioGroup>
              </div> */}

              {!mobile && (
                <div style={{ marginTop: "3px", marginBottom: "20px" }}>
                  <Text
                    strong
                    style={{ fontSize: "10px", marginBottom: "10px" }}
                  >
                    FULL SCREEN MODE{" "}
                  </Text>

                  <Switch
                    isChecked={fullView ? true : false}
                    onChange={toggleFullView}
                    size="lg"
                  ></Switch>
                </div>
              )}
            </Stack>

            <div
              style={{ width: "100%", textAlign: "center", marginTop: "30px" }}
            >
              <Text style={{ fontSize: "12px" }}>Made by HSE Apps</Text>

              <a target="_blank" href="https://hseapps.org/about">
                <TeamOutlined
                  style={{ marginRight: "8px", color: "#1890ff" }}
                ></TeamOutlined>
              </a>
              <a target="_blank" href="https://github.com/HSE-Apps">
                <GithubOutlined
                  style={{ marginRight: "8px", color: "#1890ff" }}
                ></GithubOutlined>
              </a>
              <a target="_blank" href="https://forms.gle/89AcvDmLDaX8qgu86">
                <ChatIcon
                  style={{ marginRight: "8px", color: "#1890ff" }}
                ></ChatIcon>
              </a>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={2}
              variant="ghost"
              onClick={() => {
                onClose();
                setSettingsPending(settings);
              }}
            >
              Cancel
            </Button>
            <Button
              className="button"
              mr={3}
              onClick={() => {
                onClose();
                setSettings(settingsPending);
                localStorage.setItem(
                  "scheduleSettings",
                  JSON.stringify(settingsPending)
                );
                handleSave();
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
