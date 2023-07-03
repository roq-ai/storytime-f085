import axios from 'axios';
import queryString from 'query-string';
import { ContinuationInterface, ContinuationGetQueryInterface } from 'interfaces/continuation';
import { GetQueryInterface } from '../../interfaces';

export const getContinuations = async (query?: ContinuationGetQueryInterface) => {
  const response = await axios.get(`/api/continuations${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createContinuation = async (continuation: ContinuationInterface) => {
  const response = await axios.post('/api/continuations', continuation);
  return response.data;
};

export const updateContinuationById = async (id: string, continuation: ContinuationInterface) => {
  const response = await axios.put(`/api/continuations/${id}`, continuation);
  return response.data;
};

export const getContinuationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/continuations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteContinuationById = async (id: string) => {
  const response = await axios.delete(`/api/continuations/${id}`);
  return response.data;
};
