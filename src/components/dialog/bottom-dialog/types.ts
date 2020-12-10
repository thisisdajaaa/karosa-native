
export type BottomDialogProps = {
  listener : React.RefObject<ListenerProps>;
} 

export type ListenerProps = {
  open : (component : React.ReactElement) => void;
  close : () => void;
} 