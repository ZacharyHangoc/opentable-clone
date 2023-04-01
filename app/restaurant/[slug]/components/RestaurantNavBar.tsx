import Link from "next/link";

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <a href="" className="mr-7">
        {" "}
        Overview{" "}
      </a>
      <Link href="restaurant/:slug/menu" className="mr-7">
        {" "}
        Menu{" "}
      </Link>
    </nav>
  );
}
