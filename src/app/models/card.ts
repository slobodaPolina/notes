export interface Id {
  id: number;
}

export interface Card extends Id {
  title: string;
  text: string;
  likes: number;
  dislikes: number;
}
