export interface ExplorerItem {
  id: string;
  name: string;
  isFolder: boolean;
  items: ExplorerItem[];
}
