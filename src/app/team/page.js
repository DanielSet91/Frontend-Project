'use client'

import { List, ListItem, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import teamData from "../data/team.json";
import styles from './team.module.css'
import { Button } from "@chakra-ui/react";

export default function TeamPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar />
      <Button colorScheme="green" variant="solid" onClick={toggleDrawer}>Create Team</Button>
        {isDrawerOpen && (
          <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
            Drawer Content
          </div>
        )}
      <div className={styles.pageContainer}>
        <h2 className={styles.teamsHeader}>Teams</h2>
        {teamData.teams.map((team, index) => (
          <div key={index}>
            <h3 className={styles.teamHeader}>{team.name}</h3>
            <Text>Members:</Text>
            <List>
              {team.users.map((user, i) => (
                <ListItem key={i}>
                  <Text>{i+1}. {user}</Text>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </div>
    </>
  );
}
