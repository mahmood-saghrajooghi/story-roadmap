import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { TableRow } from "./TableRow";
import "./TableRow.css";

interface TableHeaderProps {
  label: string;
  issues: any[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ label, issues }) => {
  return (
    <>
      <div className="table-row">
        <Flex
          p={5}
          fontWeight="bold"
          fontSize="12px"
          alignItems="center"
          w="400px"
          borderRight="1px solid #aaa"
        >
          {label}
        </Flex>
      </div>
      {issues.map((issue: any) => (
        <TableRow issue={issue} />
      ))}
    </>
  );
};
