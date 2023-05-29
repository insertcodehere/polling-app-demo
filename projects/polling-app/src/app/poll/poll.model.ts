export interface Poll {
  id: string;
  name: string;
  description: string;
  status: 'Opened' | 'Closed';
  createdBy: string;
  options: PollOption[];
}

interface PollOption {
  text: string;
  votes: string[]; // User ids of who voted to this poll option
}

export interface PollVoteDTO {
  option: number;
  votedBy: string;
};
