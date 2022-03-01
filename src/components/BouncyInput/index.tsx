import React from "react";

import { NumberInput, NumberInputProps } from "@mantine/core";

export const BouncyInput: React.FC<NumberInputProps> = ({ ...props }) => {
  return <NumberInput size="md" min={1} hideControls={true} {...props} />;
};
