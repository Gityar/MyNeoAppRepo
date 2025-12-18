
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

export interface OutlineItem {
  title: string;
  content: string;
}

export interface TopicSection {
  id: string;
  title: string;
  outline: OutlineItem[];
  summary: string;
  detailedContent: string;
  quiz: QuizQuestion[];
}

export interface NursingCourse {
  id: string;
  title: string;
  sections: TopicSection[];
}
