// export type ImageSrc = string | { [key: string]: string };

export interface TypewriterClass {
  typeString: (text: string) => TypewriterClass;
  callFunction: (fn: () => void) => TypewriterClass;
  pauseFor: (time: number) => TypewriterClass;
  deleteAll: () => TypewriterClass;
  start: () => void;
}

export interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  pdfLink?: string;
  tools: string[];
  summary: string;
  course: string;
}

export interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: CardData | null;
}
