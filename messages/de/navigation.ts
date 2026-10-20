import { navigation as english } from '../en/navigation';
import type { MessageShape } from '@/i18n/message-types';

export const navigation = {
  home: 'Start',
  history: 'Verlauf',
  progress: 'Fortschritt',
  coach: 'Coach',
  chat: 'Chat',
  programs: 'Programme',
  catalog: 'Katalog',
  settings: 'Einstellungen',
} satisfies MessageShape<typeof english>;
