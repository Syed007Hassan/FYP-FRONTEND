import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {props.children}
    </div>
  );
};

export default DashBoardLayout;
