//import { render } from "@testing-library/react";
import MainLayout from "../MainLayout";

const children = "hello world"

it("render attributes correctly", () => {
  const dom = (<MainLayout children={children} />)
  //dom.getByTestId() 
  
  const input = dom.getElemenById('main-layout-content-0');

  expect(input).toHaveTextContent("hello world")
  // expect(getByTestId("tweet_id-0")).toHaveTextContent("@WFLA")
})

