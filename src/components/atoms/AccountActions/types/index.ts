/**
 *
 * @format
 *
 */

type Actions = {
  label: string;
  icon: React.ReactElement;
  onPress: () => void;
};

export type Props = {
  actions: Actions[];
};
