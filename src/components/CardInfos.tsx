import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box minHeight="120px" padding={8}>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {mainContent}
      </Text>
      <Text fontSize={"x"}>{content}</Text>
    </Box>
  );
};

export default CardInfo;
