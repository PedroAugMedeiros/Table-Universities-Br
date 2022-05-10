import { Api } from '../providers';
import { ApiInterface } from '../interfaces';

const getAll = () => Api.get<ApiInterface[]>('character');

export const ApiService = {
 getAll,
}