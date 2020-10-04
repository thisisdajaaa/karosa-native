import React from "react";

import { Text } from "../atoms";

interface ErrorMessageProps {
  error?: string;
  visible?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  } else {
    return <Text variant="validatorError">{error}</Text>;
  }
};

export default ErrorMessage;
