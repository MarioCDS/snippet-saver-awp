import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import connectDb from "~/db/connectDb.server";

export async function loader(snippet) {
  const db = await connectDb();
  const snippets = await db.models.Snippet.find({
    _id: snippet._id,
  });
  return json(snippets);
}

export default function Snippets() {
  const snippets = useLoaderData();
  return snippets.map((snippet) => <li key={snippet._id}>{snippet.title}</li>);
}
