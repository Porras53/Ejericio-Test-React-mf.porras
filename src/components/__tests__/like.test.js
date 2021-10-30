import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../like";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing like component", () => {
  //verificando el label
  it("p inactive by default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  //probar el evento increase
  it("el número de likes se incremente en uno.", () => {
    const p = container.querySelector("p");
    const buttoni = document.getElementById("increment");

    act(() => {
      buttoni.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(p.textContent).toBe("Likes: 1");
  });

  //probar el evento decrease
  it("el número de likes se decrementa en uno.", () => {
    const p = container.querySelector("p");
    const buttond = document.getElementById("decrement");

    act(() => {
      buttond.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(p.textContent).toBe("Likes: -1");
  });
});