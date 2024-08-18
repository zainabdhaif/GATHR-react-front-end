const Dashboard = ({ user }) => {
 
  return (
    <main className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome, {user.username}!</h1>
        <p className="lead mt-4">
          This is the dashboard page where you, and only you, can see a dashboard
          of all of your things.
        </p>
      </div>
      
    </main>
    
  );
};

export default Dashboard;
