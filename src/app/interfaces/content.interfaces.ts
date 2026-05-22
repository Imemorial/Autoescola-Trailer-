export type ContentType = 'gallery' | 'news';

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  description?: string;
  image_url: string;
  storage_path?: string;
  created_at: string;
  updated_at: string;
  source: 'firebase' | 'api';
}

export interface UploadContentPayload {
  title: string;
  description?: string;
  content?: string;
  file: File;
}
