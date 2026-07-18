export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export interface SlideManagementProps extends BaseProps {
  children?: React.ReactNode;
}
