export default function Footer() {
    return (
        <footer className="footer items-center p-4 text-base-content border-t border-gray-700">
            <div className="flex justify-center items-center w-full">
                <p>© {new Date().getFullYear()} Offentlig ITU</p>
            </div>
        </footer>
    );
}