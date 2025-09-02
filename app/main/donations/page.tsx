import MyRequests from "@/components/MyRequests";
import RequestForm from "@/components/RequestForm";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <MyRequests />
      </div>
      <div>
        <RequestForm />
      </div>
    </div>
  );
};

export default ProfilePage;
