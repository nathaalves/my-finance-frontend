import * as Icon from 'react-icons/md';
import type { IconType } from 'react-icons';

export type DynamicIconProps = {
  name?: string;
};

export function DynamicIcon({ name }: DynamicIconProps): JSX.Element {
  if (!name) return <></>;

  const IconComponent = Icon[name as keyof IconType] as IconType;

  return <IconComponent />;
}
