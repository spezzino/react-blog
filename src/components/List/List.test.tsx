import React from "react";
import { List } from "./";
import renderer from "react-test-renderer";

const SampleComponent = (props: any) => {
  return <div>{props.id}</div>;
};

test("List gets populated with items", () => {
  const component = renderer.create(
    <List items={[{ id: 1 }]} component={SampleComponent} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree?.children?.length).toEqual(1);
});
