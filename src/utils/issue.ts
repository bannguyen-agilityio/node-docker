// Constants
import { IssueStatus, MediaPlatform } from '@/constants';
import { timeAgo } from './time';

interface GetIssueDetailsParams {
  account: string;
  status: IssueStatus;
  mediaPlatform?: MediaPlatform;
  time?: Date;
}

export const getIssueDetails = ({
  status,
  account,
  mediaPlatform = MediaPlatform.INSTAGRAM,
  time = new Date(Date.now()),
}: GetIssueDetailsParams) => {
  const issueDetails: Record<
    IssueStatus,
    {
      title: string;
      message: string;
    }
  > = {
    [IssueStatus.BANNED]: {
      title: `${mediaPlatform} Account Banned`,
      message: `The account ${account} banned by ${mediaPlatform}.`,
    },
    [IssueStatus.FAILED]: {
      title: 'Failed to Post Content',
      message: `The account ${account} has failed to post content.`,
    },
  };

  return {
    ...issueDetails[status],
    time: timeAgo.format(time),
  };
};
