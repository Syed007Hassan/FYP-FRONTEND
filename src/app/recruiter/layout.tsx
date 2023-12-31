import NavBar from "@/components/NavBar";
type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default DashBoardLayout;
