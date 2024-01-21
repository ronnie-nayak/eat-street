import { Items } from "@repo/db";
import { connectToDatabase } from "../../../utils/database";

export async function PATCH(req: Request) {
  await connectToDatabase();
  let temp = "aaaa";
  const { search } = await req.json();
  if (search) temp = search;
  let pipeline = [
    {
      $search: {
        index: "autocompleteProducts",
        autocomplete: {
          query: `${temp}`,
          path: "name",
          tokenOrder: "sequential",
          fuzzy: {
            prefixLength: 3,
          },
        },
      },
    },
  ];
  const yal = await Items.aggregate(pipeline);
  return new Response(JSON.stringify(yal), { status: 200 });
}
