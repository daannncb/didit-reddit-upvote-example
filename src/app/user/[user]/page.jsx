import { db } from "@/db";

export default async function UserPage({ params }) {
  const userId = await params.user;
  const userData = (
    await db.query(`SELECT name, description FROM users WHERE id=${userId}`)
  ).rows[0];

  return (
    <div>
      <p>User Page</p>
      <h1>Username: {userData.name}</h1>
      <p>Bio:</p>
      <p>{userData.description}</p>
    </div>
  );
}
