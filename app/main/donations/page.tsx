import MyRequests from "@/components/MyRequests";
import RequestForm from "@/components/RequestForm";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-700 via-gray-950 to-slate-800 p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
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
