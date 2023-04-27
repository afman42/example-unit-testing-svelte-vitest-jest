import Counter from "../src/lib/Counter.svelte";
import { tick } from "svelte";

let host;

afterEach(() => {
  host.remove();
});
test("mount component Counter", () => {
  host = document.createElement("div");
  host.setAttribute("id", "host");
  document.body.appendChild(host);
  const instance = new Counter({ target: host });
  expect(instance).toBeTruthy();
});

test("show text button", () => {
  host = document.createElement("div");
  host.setAttribute("id", "host");
  document.body.appendChild(host);
  const instance = new Counter({ target: host });
  const btn = host.getElementsByTagName("button")[0];
  expect(btn.textContent).toBe("count is 0");
});

test("change text button on click", async () => {
  host = document.createElement("div");
  host.setAttribute("id", "host");
  document.body.appendChild(host);
  const instance = new Counter({ target: host });
  const btn = host.getElementsByTagName("button")[0];
  btn.click();
  await tick();
  expect(btn.textContent).toBe("count is 1");
});
