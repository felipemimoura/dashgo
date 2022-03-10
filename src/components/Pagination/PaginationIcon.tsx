import { Button } from "@chakra-ui/react";

interface PaginationIconProps {
  isCurrent?: boolean;
  pageNumber: number;
  onPageChange: (page: number) => void;
}

export default function PaginationIcon({
  isCurrent,
  pageNumber,
  onPageChange,
}: PaginationIconProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
}
