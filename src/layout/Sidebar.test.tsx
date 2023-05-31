import { screen, render } from "@testing-library/react";
import Sidebar from "./Sidebar";

test("Sidebar should render", () => {
  render(<Sidebar />);
  const el = screen.getByTestId("sidebar-render");
  expect(el).toBeInTheDocument();
});
