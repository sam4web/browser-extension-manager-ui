export interface IExtension {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export type IExtensionMap = Map<string, boolean>;
