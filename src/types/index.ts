export interface ChecklistItem {
  id: string;
  text: string;
}

export interface Day {
  id: string;
  title: string;
  checklist: ChecklistItem[];
}

export interface Domain {
  id: string;
  title: string;
  days: Day[];
}

export interface StudyPlan {
  domains: Domain[];
}
