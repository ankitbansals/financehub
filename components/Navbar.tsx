export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
            <div className="text-2xl font-bold text-pink-600">FinanceHub</div>
            <nav className="hidden md:flex gap-8 text-sm text-gray-700">
                <div className="relative group">
                    <button className="hover:text-pink-600">Loans ▾</button>
                    {/* Dropdown if needed */}
                </div>
                <div className="relative group">
                    <button className="hover:text-pink-600">My Finance Hub ▾</button>
                </div>
                <button className="hover:text-pink-600">Resources</button>
                <button className="hover:text-pink-600">About Us</button>
            </nav>
            <a
                href="#"
                className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition"
            >
                Apply Now →
            </a>
        </header>
    );
}
