import Link from "next/link";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="lesson/lesson">Lesson</Link>
        </li>
        <li>
          <Link href="/">Blog Post</Link>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
