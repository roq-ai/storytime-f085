import axios from 'axios';
import queryString from 'query-string';
import { VoteInterface, VoteGetQueryInterface } from 'interfaces/vote';
import { GetQueryInterface } from '../../interfaces';

export const getVotes = async (query?: VoteGetQueryInterface) => {
  const response = await axios.get(`/api/votes${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createVote = async (vote: VoteInterface) => {
  const response = await axios.post('/api/votes', vote);
  return response.data;
};

export const updateVoteById = async (id: string, vote: VoteInterface) => {
  const response = await axios.put(`/api/votes/${id}`, vote);
  return response.data;
};

export const getVoteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/votes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVoteById = async (id: string) => {
  const response = await axios.delete(`/api/votes/${id}`);
  return response.data;
};
