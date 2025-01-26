// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  available: boolean;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
    available: true,
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
    available: true,
  },
  {
    id: 'deepseek-r1',
    label: 'Deep Seek R1',
    apiIdentifier: 'deepseek-r1',
    description: 'Uses advanced reasoning',
    available: false,
  },
  {
    id: 'claude-35',
    label: 'Claude 3.5',
    apiIdentifier: 'claude-35',
    description: 'For complex, multi-step tasks',
    available: false,
  },
  {
    id: 'dall-e-3',
    label: 'Dall E 3',
    apiIdentifier: 'dall-e-3',
    description: 'Generate highly detailed and creative images',
    available: false,
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
