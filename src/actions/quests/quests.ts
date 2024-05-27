'use server';

export async function getQuests() {
  const response = await fetch('http://localhost:3001/quests', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
