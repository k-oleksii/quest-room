import { IFormData } from '@/app/_util/types';

export async function postQuest(data: IFormData) {
  const response = await fetch('http://localhost:3001/quests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
