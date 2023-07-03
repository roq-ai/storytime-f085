import { VoteInterface } from 'interfaces/vote';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ContinuationInterface {
  id?: string;
  content: string;
  user_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  vote?: VoteInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    vote?: number;
  };
}

export interface ContinuationGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  company_id?: string;
}
