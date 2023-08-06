import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminProfile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Profile</h1>
      <h1>{user?.userMail}</h1>
      <h1>{user?.role}</h1>
      <Button
        onClick={() => {
          signOut();
          navigate('/admin-login');
        }}
      >
        Sign out
      </Button>
    </div>
  );
}

export default AdminProfile;
