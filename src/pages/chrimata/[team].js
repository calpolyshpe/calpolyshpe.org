import ProtectedRoute from '../../components/chrimata/ProtectedRoute';
import { useRouter } from 'next/router';

export default function TeamBudgetPage() {

  const router = useRouter();
  const teamName = router.query.team

  return (
    <ProtectedRoute>
      <div>
        <h1 className='capitalize'>{teamName} Budget</h1>
      </div>
    </ProtectedRoute>
  );
};
