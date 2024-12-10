import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    alert("You have been logged out.");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-4 text-center font-bold text-lg">Dashboard</div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Settings
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-800">Welcome Back!</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg text-gray-600 focus:outline-none"
            />
            <button className="p-2 bg-blue-600 text-white rounded-full">
              Notifications
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-bold text-xl text-gray-800">Revenue</h2>
              <p className="text-gray-600 mt-2">$12,345</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-bold text-xl text-gray-800">Users</h2>
              <p className="text-gray-600 mt-2">1,234</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-bold text-xl text-gray-800">Orders</h2>
              <p className="text-gray-600 mt-2">567</p>
            </div>
          </div>

          {/* Example Charts/Graphs Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="font-bold text-lg text-gray-800">Analytics</h2>
            <div className="mt-4 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Replace this with a chart component */}
              <p className="text-gray-600">Chart goes here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
