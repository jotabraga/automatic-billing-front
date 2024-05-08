import { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-openSans text-5xl text-green-950 font-bold">
        Seja bem-vindo
      </h2>
      <p className="font-openSans text-green-400 text-3xl">
        Envie seu arquivo .csv para realizar as cobranças{" "}
      </p>
    </div>
  );
}

export { Header };
