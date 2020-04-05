import React from "react";
import { PostItem } from "./";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

test("PostItem renders", () => {
  const component = renderer.create(
    <PostItem
      id={1}
      title="Test title"
      body="Test body"
      user={{ id: 1, name: "User 1" }}
      showMoreButton={false}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("PostItem renders with View More Button", () => {
  const component = renderer.create(
    <MemoryRouter>
      <PostItem
        id={1}
        title="Test title"
        body="Test body"
        user={{ id: 1, name: "User 1" }}
        showMoreButton={true}
      />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(
    component.root.findByProps({ className: "MuiButton-label" }).children
  ).toEqual(["View more"]);
});
