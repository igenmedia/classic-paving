// John's own job photos, processed from images/raw/ into public/images/.
// Empty until the photos are in - the gallery and hero image hide themselves.

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const hero: Photo | null = null;
export const gallery: Photo[] = [];
