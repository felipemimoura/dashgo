import { Button } from "@chakra-ui/react";

interface PaginationIconProps {
  isCurrent?: boolean;
  pageNumber: number;
}

export default function PaginationIcon({
  isCurrent,
  pageNumber,
}: PaginationIconProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink", cursor: "default" }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button size="sm" fontSize="xs" width="4" colorScheme="pink">
      {pageNumber}
    </Button>
  );
}
