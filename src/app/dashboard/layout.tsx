
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import NavBar from "@/components/NavBar";
type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {

  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default DashBoardLayout;
