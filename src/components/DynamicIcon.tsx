import * as Icon from 'react-icons/md';
import type { IconType } from 'react-icons';

type Props = {
  name?: string;
};

export default function DynamicIcon({ name }: Props): JSX.Element {
  if (!name) return <></>;

  const IconComponent = Icon[name as keyof IconType] as IconType;

  return <IconComponent />;
}
