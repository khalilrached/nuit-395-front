import { render } from "@testing-library/react";
import App from "./App";

test("RENDER WITHOUT CRACH", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

/*
it("render attributes correctly", () => {
  const { getByTestId } = render(<ListTweets data={data} loadMore={() => { }} tags={tags} />)
  expect(getByTestId("username-0")).toHaveTextContent("WFLA NEWS")
  expect(getByTestId("tweet_id-0")).toHaveTextContent("@WFLA")
})
*/
