import Link from "next/link";

export async function Header() {
  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <Link href="/panel">Panel (Protected Route)</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
