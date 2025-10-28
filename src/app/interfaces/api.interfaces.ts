export interface Post {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  page_uuid: string;
  created_at: string;
  updated_at: string;
  description?: string;
}

export interface Page {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  posts: Post[];
}

export interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  description?: string;
}
