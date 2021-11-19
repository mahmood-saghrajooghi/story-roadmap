import { Box, Flex, Text, Tag } from "@chakra-ui/react";

interface CellMoreInfoProps {
  issueKey?: string;
  summary?: string;
  description?: string | null;
  labels?: string[];
  estimation?: number | null;
  dueDate?: Date | string | number | null;
}

export const CellMoreInfo: React.FC<CellMoreInfoProps> = ({
  issueKey,
  description,
  dueDate,
  estimation,
  labels,
  summary,
}) => {
  return (
    <Box w="300px" background="white" shadow="md" borderRadius="5px" p={3}>
      <Flex justifyContent="space-between">
        <Text fontSize="xs" fontWeight="bold">
          {summary}
        </Text>
        <Text fontSize="xs" fontWeight="bold">
          {issueKey}
        </Text>
      </Flex>
      <Box pt={2} mt={2} borderTop="1px solid #ddd">
        <Text fontSize="xs" mb={2}>
          {description}
        </Text>
      </Box>
      <Box>
        <Text fontSize="xs" fontWeight="bold">
          Due Date: {dueDate}
        </Text>
      </Box>
      <Flex
        flex={1}
        justifyContent="space-between"
        w="100%"
        pt={2}
        mt={2}
        borderTop="1px solid #ddd"
      >
        <Text fontSize="xs" fontWeight="Bold">
          Labels:
        </Text>
        <Flex>
          {labels?.map((l) => (
            <Tag
              key="l"
              size="sm"
              fontWeight="bold"
              bg="purple.500"
              color="white"
              ml={1}
            >
              {l}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
