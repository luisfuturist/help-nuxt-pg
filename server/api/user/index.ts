import db from "~/server/utils/db";

export default defineEventHandler(async (event) => {
  const users = await db.query('SELECT * FROM users');
  console.log(users.rows);
  return users.rows
});