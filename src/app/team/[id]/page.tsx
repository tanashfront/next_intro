import Loading from "@/app/loading";
// import getTodos from "@/app/page";
import { cache, Suspense } from "react";

type todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

const getTodo = cache(async (id: string):Promise<todo> => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`, {next:{revalidate:60}}
  ).then((res) => res.json());
  console.log(data);
  return data;
});

export async function generateStaticParams() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json());
  return data.map((td: todo) => {
    console.log("page: " + td.id)
    return {id: td.id.toString()}
  });
}

export default async function TeamMember({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  // console.log("id: "+ id);
  const { userId, title } = await getTodo(id);
  return (
    <Suspense fallback={<Loading />}>
      <h1>
        Team Member - {id}
        <br />
        Id: {userId}
        <br />
        title: {title}
      </h1>
    </Suspense>
  );
}
