"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Checkbox,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./team.module.css";
import teamsData from "../data/teams.json";
import usersData from "../data/users.json";
import React from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [teams, setTeams] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    } else {
      setTeams(teamsData.teams);
    }
  }, [status, router]);

  useEffect(() => {
    setFilteredUsers(
      usersData.users.map((user) => ({ ...user, selected: false })),
    );
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(
      usersData.users
        .filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query),
        )
        .map((user) => ({ ...user, selected: false })),
    );
  };

  const handleCheckboxChange = (email) => {
    setFilteredUsers(
      filteredUsers.map((user) =>
        user.email === email ? { ...user, selected: !user.selected } : user,
      ),
    );
  };

  const handleCreateGroup = () => {
    const selectedUsers = filteredUsers.filter((user) => user.selected);
    if (selectedUsers.length === 0) {
      setErrorMessage(
        "Error: Must have at least one user to create a new team",
      );
      return;
    }
    if (newGroupName.length === 0) {
      setErrorMessage("Error: Team must have a name");
      return;
    }
    const newTeam = { name: newGroupName, users: selectedUsers };
    setTeams([...teams, newTeam]);
    onClose();
  };

  const handleSearchTeam = (value) => {
    const query = value.toLowerCase();
    const filteredTeams = teamsData.teams.filter((team) =>
      team.name.toLowerCase().includes(query),
    );
    setTeams(filteredTeams);
  };

  if (status === "loading") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.searchButtons}>
          <Button
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            className={styles.createButton}
          >
            Create New team
          </Button>
          <Input
            color="white"
            size="md"
            width="50"
            placeholder="Search Team"
            onChange={(e) => handleSearchTeam(e.target.value)}
          />
        </div>
        <Accordion allowMultiple className={styles.accordion}>
          {teams.map((team) => (
            <AccordionItem
              key={team.name}
              className={styles.accordionItem}
              marginBottom="20px"
            >
              <h2>
                <AccordionButton
                  className={styles.accordionButton}
                  width="100%"
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="xl"
                    padding="10px"
                    color="white"
                  >
                    {team.name}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordionPanel}>
                <Table className={styles.table}>
                  <Thead>
                    <Tr>
                      <Th className={styles.th} color="white">
                        User
                      </Th>
                      <Th className={styles.th} color="white">
                        Email
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {team.users.map((user) => (
                      <Tr key={user.email}>
                        <Td className={styles.td} color="white">
                          {user.name}
                        </Td>
                        <Td className={styles.td} color="white">
                          {user.email}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="lg"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create a new team</DrawerHeader>

            <DrawerBody>
              <Input
                placeholder="Group Name"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                mb={4}
              />
              <Input
                placeholder="Search Users"
                value={searchQuery}
                onChange={handleSearch}
                mb={4}
              />
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Select</Th>
                    <Th>User</Th>
                    <Th>Email</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredUsers.map((user) => (
                    <Tr key={user.email}>
                      <Td>
                        <Checkbox
                          isChecked={user.selected}
                          onChange={() => handleCheckboxChange(user.email)}
                        />
                      </Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={handleCreateGroup}>
                Create
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
