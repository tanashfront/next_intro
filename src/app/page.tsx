import { Fragment, cache, Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
// import { title } from "process";

type todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

// import Image from "next/image";
const getTodos = cache(async():Promise<todo[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos", 
                  {next:{revalidate:10}})
                  .then(res => res.json());
    return data;
});

// export async function getTodos() {
//       const data = await fetch("https://jsonplaceholder.typicode.com/todos")
//                   .then(res => res.json());
//       return data;
// }

<Suspense fallback={<Loading/>}>
  <Home/>
</Suspense>

export default async function Home() {
  const todos = await getTodos();
  return (
   <div>
      {/* <h1>Home - {todos.length}</h1> */}
      {todos.map((td) => (
        <Fragment key={td.id}>
          <Link href={`/team/${td.id}`}>
            {td.title}
          </Link>
          <br/>
        </Fragment>
      ))}
   </div>
  );
}



