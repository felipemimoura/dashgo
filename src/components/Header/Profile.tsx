import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Moura</Text>
          <Text color="gray.300" fontSize="small">
            felipemimoura@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Felipe Moura"
        src="https://github.com/felipemimoura.png"
      />
    </Flex>
  );
}
