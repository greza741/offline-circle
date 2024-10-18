export interface IThread {
  id: number;
  content?: string;
  images?: IThreadImage[];
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  mainThreadId: number;
  user: Omit<IUser>;
  _count: {
    likes: number;
    replies: number;
  };
}

export interface IThreadImage {
  id: number;
  url: string;
  threadId: number;
}

export interface ThreadDTO {
  userId: number;
  content?: string;
  images?: FileList;
  mainThreadId?: number;
}
