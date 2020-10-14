type Press = {
  left?: VoidFunction;
  right?: VoidFunction;
};

type Text = {
  left?: string;
  right?: string;
};

export type Props = {
  title?: string;
  iconName?: string;
  text?: Text;
  press?: Press;
};
