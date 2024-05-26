"use client";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {Table, Thead, Tbody, Tfoot,Tr,Th,Td,TableContainer,} from "@chakra-ui/react";
import { LineChart, XAxis, YAxis, Line, Tooltip, Legend } from "recharts";
import styles from "./dashboard.module.css";
import sales from '../data/sales.json';
import '../../styles/global.css'

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const products = [...new Set(sales.map(sale => sale.product))];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
      <Flex flexDirection="column" alignItems="center">
        {products.map(product => {
          const filteredData = sales.filter(sale => sale.product === product);
          return (
            <Box key={product} mt={8} p={4} bg="gray.100" borderRadius="md" width="100%">
              <Text fontSize='40' fontWeight="bold" color="" mb={20}>
                {product} Sales
              </Text>
              <LineChart width={800} height={300} data={filteredData} className={styles.lineChart}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
              </LineChart>
              <div className={styles.tableContainer}>
              <TableContainer mt={4} style={{width: "90%"}}>
                <Table variant="striped" className={styles.tableProduct} >
                  <Thead>
                    <Tr textAlign="left">
                      <Th >Month</Th>
                      <Th isNumeric>Quantity</Th>
                      <Th isNumeric>Revenue</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredData.map((sale, index) => (
                      <Tr key={index}>
                        <Td>{sale.month}</Td>
                        <Td isNumeric>{sale.quantity}</Td>
                        <Td isNumeric>{sale.revenue}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                  <Tfoot>
                    <Tr textAlign="left">
                      <Th>Month</Th>
                      <Th isNumeric>Quantity</Th>
                      <Th isNumeric>Revenue</Th>
                    </Tr>
                    <Text size='sm'>{product} Sales</Text>
                  </Tfoot>
                </Table>
              </TableContainer>
              </div>
            </Box>
          );
        })}
      </Flex>
      </div>
    </>
  );
}
