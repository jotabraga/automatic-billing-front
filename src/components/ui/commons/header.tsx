import { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <div className="flex mx-auto text-center flex-col gap-8">
      <h2 className="font-openSans   mx-auto text-center text-5xl text-green-950 font-bold">
        Seja bem-vindo
      </h2>
      <p className="flex flex-wrap font-openSans max-w-400 text-green-400 text-1xl">
        Envie seu arquivo .csv para realizar as cobranças{" "}
      </p>
    </div>
  );
}

export { Header };
