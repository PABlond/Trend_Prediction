import { render, screen } from "@testing-library/react";
import { App, AppLayout } from "./App";

test("renders learn react link", () => {
  render(
    <AppLayout>
      <App />
    </AppLayout>
  );
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
