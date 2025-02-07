export type Image = {
  src: string,
  alt: string,
};

export type OmitBasicApparence<T> = Omit<T, 'width' | 'height'>;