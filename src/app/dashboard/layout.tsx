import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  console.log('authOptions', authOptions);
  const session = await getServerSession(authOptions);
  console.log('session!!', session);
  return (
    <div>
      <Link href={`/dashboard/user/${session?.user.id}`}>User Profile</Link>
      <div>{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
