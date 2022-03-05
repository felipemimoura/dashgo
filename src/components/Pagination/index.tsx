import { Box, Button, Stack } from "@chakra-ui/react";
import PaginationIcon from "./PaginationIcon";

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
        <PaginationIcon isCurrent pageNumber={1} />
        <PaginationIcon pageNumber={2} />
        <PaginationIcon pageNumber={3} />
        <PaginationIcon pageNumber={4} />
        <PaginationIcon pageNumber={5} />
      </Stack>
    </Stack>
  );
}
