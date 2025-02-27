import { UserForm } from "../../components/UserForm";

const Contact: React.FC = () => {
  return (
    <div className="px-44 mt-10">
      <UserForm />
    </div>
  );
};
export default Contact;

export function generateMetadata() {
  return {
    title: "Contact page",
    description: "Contact page",
  };
}