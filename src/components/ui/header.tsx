import { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <div>
      <h2 className="text-2xl font-medium">Seja bem-vindo</h2>
      <p className="font-extrabold text-green-300">
        Envie seu arquivo .csv para realizar as cobranças{" "}
      </p>
    </div>
  );
}

export { Header };
