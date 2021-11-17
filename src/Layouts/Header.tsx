import { Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";

export const Header: React.FC = () => {
  const [monthList] = useState(moment.monthsShort());
  return (
    <div className="template">
      <Flex
        p={1}
        alignItems="center"
        justifyContent="center"
        fontSize="sm"
        fontWeight="bold"
      >
        Labels
      </Flex>
      {monthList.map((m) => (
        <Flex
          p={1}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          key={m}
          fontSize="xs"
          fontWeight="bold"
        >
          {m}
          <Text fontSize="xs" fontWeight="bold">
            2019
          </Text>
        </Flex>
      ))}
      {monthList.map((m) => (
        <Flex
          p={1}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          key={m}
          fontSize="sm"
          fontWeight="bold"
        >
          {m}
          <Text fontSize="xs" fontWeight="bold">
            2020
          </Text>
        </Flex>
      ))}
    </div>
  );
};
