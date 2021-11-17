import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import "./TableCell.css";

export const TableCell: React.FC = ({ children }) => {
  return (
    <Flex
      bg="purple.100"
      color="gray.800"
      w="100%"
      h="100%"
      className="table-cell"
      alignItems="center"
      p="5px"
    >
      <Text fontSize="xs" fontWeight="bold" whiteSpace="nowrap">
        {children}
      </Text>
    </Flex>
  );
};
