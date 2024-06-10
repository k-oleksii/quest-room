'use server';

export async function getQuestByID(id: string) {
  const response = await fetch(`http://localhost:3001/quests/${id}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
