type Props = {
  children: React.ReactNode;
};

const ApplicantLayout = async (props: Props) => {
  return <div>{props.children}</div>;
};

export default ApplicantLayout;
