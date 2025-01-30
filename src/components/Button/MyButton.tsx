import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
}

export const MyButton = ({ label, onClick }: CustomButtonProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        colorScheme="red"
        size="sm"
        width="30%"
        marginTop="20px"
      >
        {label}
      </Button>
    </>
  );
};
