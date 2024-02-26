import ApplicantHeader from "@/components/applicant/applicantHeader";
type Props = {
  children: React.ReactNode;
};

const ApplicantLayout = async (props: Props) => {
  return (
    <div>
      <ApplicantHeader />
      {props.children}
    </div>
  );
};

export default ApplicantLayout;
