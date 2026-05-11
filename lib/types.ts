export interface Review {
  id: string;
  name: string;
  message: string;
  stars: number;
  photo_url: string | null;
  approved: boolean;
  created_at: string;
}
