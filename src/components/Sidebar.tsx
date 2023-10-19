// Sidebar.tsx
import Link from 'next/link';
import { FaUser, FaSignOutAlt, FaUserPlus, FaBuilding } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-blue-900 z-50 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:hidden`}
    >
      <ul className="p-4 space-y-4">
        <li>
          <Link href="/dashboard/my_profile" legacyBehavior>
            <a className="block text-white hover:text-blue-500">
              Your Profile
            </a>
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signout" legacyBehavior>
            <a className="block text-white hover:text-blue-500">Logout</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/addemployee" legacyBehavior>
            <a className="block text-white hover:text-blue-500">Add Employee</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/company_profile" legacyBehavior>
            <a className="block text-white hover:text-blue-500">Company Profile</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
