'use client';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Table, Thead, Tbody, Tr, Th, Td, Spinner, Button, Input, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
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
  const [newGroupName, setNewGroupName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    } else {
      setTeams(teamsData.teams);
    }
  }, [status, router]);

  useEffect(() => {
    setFilteredUsers(usersData.users);
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(usersData.users.filter(user => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)));
  };

  const handleCreateGroup = () => {
    const newTeam = { name: newGroupName, users: filteredUsers.filter(user => user.selected) };
    setTeams([...teams, newTeam]);
    onClose();
  };

  if (status === "loading") {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Accordion allowMultiple className={styles.accordion}>
          {teams.map((team) => (
            <AccordionItem key={team.name} className={styles.accordionItem} marginBottom="20px">
              <h2>
                <AccordionButton className={styles.accordionButton} width="100%">
                  <Box flex="1" textAlign="left" fontSize="xl" padding="10px" color="white">
                    {team.name}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordionPanel}>
                <Table className={styles.table}>
                  <Thead>
                    <Tr>
                      <Th className={styles.th} color="white">User</Th>
                      <Th className={styles.th} color="white">Email</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {team.users.map((user) => (
                      <Tr key={user.email}>
                        <Td className={styles.td} color="white">{user.name}</Td>
                        <Td className={styles.td} color="white">{user.email}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>Create New Group</Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create a new group</DrawerHeader>

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
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>User</Th>
                    <Th>Email</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredUsers.map((user) => (
                    <Tr key={user.email}>
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
              <Button colorScheme="teal" onClick={handleCreateGroup}>Create</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Input color="white" size="md" width="50" placeholder='Search Team' />
        <Button className={styles.searchButton}>Find</Button>
      </div>
    </>
  );
}
