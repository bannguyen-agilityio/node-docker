// Constants
import { ISSUE_STATUS, MediaPlatform } from '@/constants';

interface GetIssueDetailsParams {
  account: string;
  status: keyof typeof ISSUE_STATUS;
  mediaPlatform?: MediaPlatform;
  time?: Date;
}

export const getIssueDetails = ({
  status,
  account,
  mediaPlatform = MediaPlatform.INSTAGRAM,
}: GetIssueDetailsParams) => {
  const issueDetails: Record<
    keyof typeof ISSUE_STATUS,
    {
      title: string;
      message: string;
    }
  > = {
    banned: {
      title: `${mediaPlatform} Account Banned`,
      message: `The account ${account} banned by ${mediaPlatform}.`,
    },
    failed: {
      title: 'Failed to Post Content',
      message: `The account ${account} has failed to post content.`,
    },
  };

  return {
    ...issueDetails[status],
    time: '2 hours ago', // TODO: will update it to be dynamic later
  };
};
