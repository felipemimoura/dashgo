import { Box, Button, Stack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing="2" direction="row">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bgColor: "pink", cursor: "default" }}
        >
          1
        </Button>
        <Button size="sm" fontSize="xs" width="4" colorScheme="pink">
          2
        </Button>
        <Button size="sm" fontSize="xs" width="4" colorScheme="pink">
          3
        </Button>
        <Button size="sm" fontSize="xs" width="4" colorScheme="pink">
          4
        </Button>
      </Stack>
    </Stack>
  );
}
