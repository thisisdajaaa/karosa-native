/**
 *
 * @format
 *
 */
import { Props as HeaderProps } from "@app/components/header/types";

export type NavigationType = {
  navigation: {
    navigate: (path: string) => void;
    goBack: (path?: string) => void;
  };
};

export type LoginHeaderProps = Omit<HeaderProps, "customStyles" | "text">;
