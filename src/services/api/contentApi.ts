import type { Content } from '../../types';
import { instance } from './instance';

export async function requestContent(): Promise<Content> {
  const response = await instance.get<Content>('/content');
  return response.data;
}
