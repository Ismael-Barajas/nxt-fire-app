import Link from "next/link";
import Image from "next/image";

//top navbar
export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`${username}`} passHref>
                <img src={user?.photoURL} alt="meme" />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li>
            <Link href="/enter" passHref>
              <button className="btn-blue"> Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
