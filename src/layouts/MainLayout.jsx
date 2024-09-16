
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
