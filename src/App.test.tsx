import { screen, waitFor } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

//Search Test
test("Search Bar should mount, have no initial value, and re-render properly", async () => {
  const { store, user, rerender } = renderWithProviders(<App />)

  //Find search-bar and ensrue that initial value is empty
  expect(screen.getByRole("textbox")).toBeInTheDocument()
  expect(screen.getByRole("textbox")).toHaveValue("")

  //get the ui-component and emulate user typing
  const inputUI = screen.getByRole("textbox")
  await user.type(inputUI, "Bowjeet is King")

  //screen debug info after typing
  screen.debug()
  console.log(store.getState())

  // Rerender the component (issue: the store does not clear)
  rerender(<App />)

  // Screen debug after re-render
  screen.debug()

  // Ensure the value is reset (issue: the component clears but the store does not)
  expect(screen.getByRole("textbox")).toHaveValue("")
  console.log(store.getState())
})
