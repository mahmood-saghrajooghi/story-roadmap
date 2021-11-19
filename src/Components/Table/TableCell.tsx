import { Flex, Text } from "@chakra-ui/layout";
import React, { useRef } from "react";
import "./TableCell.css";

const colors = [
  "gray",
  "purple",
  "green",
  "yello",
  "red",
  "orange",
  "teal",
  "blue",
  "cyan",
  "pink",
];

export const TableCell: React.FC = ({ children }) => {
  const bg = useRef(colors[Math.floor(Math.random() * colors.length)]);
  return (
    <Flex
      bg={`${bg.current}.300`}
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
