import React from "react";
import { CommentItem } from "./";
import renderer from "react-test-renderer";

test("List gets populated with items", () => {
  const component = renderer.create(
    <CommentItem
      postId={1}
      id={1}
      name="Name"
      email="email@sample.com"
      body="body"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
