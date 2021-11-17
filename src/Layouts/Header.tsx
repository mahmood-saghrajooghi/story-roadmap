import { Flex } from "@chakra-ui/react";
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
        <Flex p={1} alignItems="center" justifyContent="center" key={m}>
          {m}
        </Flex>
      ))}
    </div>
  );
};
