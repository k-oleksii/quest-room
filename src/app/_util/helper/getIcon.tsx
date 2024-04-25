import { ICONS_MAP } from '../icons';

export const getIcon = (icon: string) => {
  const IconComponent = ICONS_MAP[icon];

  if (!IconComponent) {
    throw new Error(`Icon ${icon} not found`);
  }

  return <IconComponent />;
};
