export interface IQuestCard {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: string;
  level: string;
  peopleCount: number[];
  duration: number;
}

export interface IFilterItem {
  name: string;
  icon: string;
  type: string;
}

export interface IFormData {
  name: string;
  phone: string;
  peopleCount: number;
  isLegal: boolean;
}
