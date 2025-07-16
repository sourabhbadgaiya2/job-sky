import { useState } from 'react';
import { 
  FaTh, 
  FaUserTie, 
  FaUser, 
  FaFileAlt, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaEdit, 
  FaCog,
  FaBars
} from 'react-icons/fa';
import Employers from './Employers';
import Candidates from './Candidates';
import JobPosts from './JobPosts';
import Leads from './Leads';
import Payments from './Payments';
import AddCategory from './AddCategory';
import SubCategory from './SubCategory';
// import Content from './Content';
// import Settings from './Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const menuItems = [
    { id: 'dashboard', icon: <FaTh />, label: 'Dashboard' },
    { id: 'employers', icon: <FaUserTie />, label: 'Employers' },
    { id: 'candidates', icon: <FaUser />, label: 'Candidates' },
    { id: 'jobPosts', icon: <FaFileAlt />, label: 'Job Posts' },
    { id: 'leads', icon: <FaChartLine />, label: 'Leads' },
    { id: 'AddCategory', icon: <FaEdit />, label: 'AddCategory' },
    { id: 'SubCategory', icon: <FaCog />, label: 'SubCategory' },
    { id: 'payments', icon: <FaMoneyBillWave />, label: 'Payments' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'employers':
        return <Employers />;
      case 'candidates':
        return <Candidates />;
      case 'jobPosts':
        return <JobPosts />;
      case 'leads':
        return <Leads />;
      case 'AddCategory':
        return <AddCategory/>;
      case 'SubCategory':
        return <SubCategory/>;
        case 'payments':
        return <Payments />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className={`bg-[#009688] text-white transition-all duration-300 
        ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
        
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {!isSidebarCollapsed && (
            <h1 className="text-xl font-bold">Admin</h1>
          )}
          <button 
            onClick={toggleSidebar}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            <FaBars />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center p-3 mx-2 my-1 rounded-md cursor-pointer 
                ${activeTab === item.id ? 'bg-black' : 'hover:bg-black'}`}
            >
              <span className="text-lg">{item.icon}</span>
              {!isSidebarCollapsed && (
                <span className="ml-3">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Right Dashboard Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
          </h2>
        </header>
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const DashboardOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Employers</h3>
          <p className="text-3xl font-bold">124</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Candidates</h3>
          <p className="text-3xl font-bold">856</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Job Posts</h3>
          <p className="text-3xl font-bold">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Earnings</h3>
          <p className="text-3xl font-bold">12,450</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p>New employer registered: Tech Solutions Inc.</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="border-b pb-2">
            <p>New job posted: Senior React Developer</p>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
          <div className="border-b pb-2">
            <p>Payment received from Design Studio</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;