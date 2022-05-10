import { Api } from '../providers';
import { ApiInterface } from '../interfaces';

const getAll = () => Api.get<ApiInterface[]>('/universities');

export const ApiService = {
 getAll,
}
