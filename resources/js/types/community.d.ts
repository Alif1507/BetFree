export type Community = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_private: boolean;
};

export type CommunityPost = {
  id: number;
  title: string;
  body: string;
  author: { id: number; name: string } | null;
  created_at: string | null;
  created_at_human: string | null;
};

export type CommunityComment = {
  id: number;
  body: string;
  author: { id: number; name: string } | null;
  created_at: string | null;
  created_at_human: string | null;
  can_delete: boolean;
};

