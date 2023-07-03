import { UserInterface } from 'interfaces/user';
import { ContinuationInterface } from 'interfaces/continuation';
import { GetQueryInterface } from 'interfaces';

export interface VoteInterface {
  id?: string;
  user_id?: string;
  continuation_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  continuation?: ContinuationInterface;
  _count?: {};
}

export interface VoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  continuation_id?: string;
}
