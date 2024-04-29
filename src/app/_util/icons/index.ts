import { FC } from 'react';
import { IconAdventures } from './IconAdventures';
import { IconAllQuest } from './IconAllQuest';
import { IconClock } from './IconClock';
import { IconClose } from './IconClose';
import { IconDetective } from './IconDetective';
import { IconHorror } from './IconHorror';
import { IconInst } from './IconInst';
import { IconLocation } from './IconLocation';
import { IconMystic } from './IconMystic';
import { IconPerson } from './IconPerson';
import { IconPuzzle } from './IconPuzzle';
import { IconSciFi } from './IconSciFi';
import { IconTw } from './IconTw';
import { IconYb } from './IconYb';

interface IIcons {
  [key: string]: FC;
}

export const ICONS = {
  clock: 'clock',
  close: 'close',
  adventures: 'adventures',
  allQuest: 'allQuest',
  detective: 'detective',
  horror: 'horror',
  location: 'location',
  mystic: 'mystic',
  person: 'person',
  puzzle: 'puzzle',
  yb: 'yb',
  tw: 'tw',
  inst: 'inst',
  sciFi: 'sciFi',
};

export const ICONS_MAP: IIcons = {
  clock: IconClock,
  close: IconClose,
  adventures: IconAdventures,
  allQuest: IconAllQuest,
  detective: IconDetective,
  horror: IconHorror,
  location: IconLocation,
  mystic: IconMystic,
  person: IconPerson,
  puzzle: IconPuzzle,
  tw: IconTw,
  yb: IconYb,
  inst: IconInst,
  sciFi: IconSciFi,
};
