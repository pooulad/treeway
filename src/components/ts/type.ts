export interface ITreeWay {
  name: string;
  children?: ITreeWay[];
  type: "directory" | "file";
}
