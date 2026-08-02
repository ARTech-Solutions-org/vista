const SUPABASE_IMAGE_BASE_URL =
  'https://glwjdwtkbgtpdembqjlt.supabase.co/storage/v1/object/public/images';

export const getHomeImageUrl = (photo?: string | null) => {
  if (!photo) {
    return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
  }

  if (photo.startsWith('http://') || photo.startsWith('https://')) {
    return photo;
  }

  return `${SUPABASE_IMAGE_BASE_URL}/${photo}`;
};