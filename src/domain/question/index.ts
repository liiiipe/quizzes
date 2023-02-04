export type Question = {
  id: string;
  title: string;
  alternatives: Alternative[];
}

export type Alternative = {
  id: string;
  content: string;
  isAnswer: boolean;
}