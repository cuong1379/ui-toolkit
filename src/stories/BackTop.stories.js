import React from "react";

import { BackTop } from "./BackTop";

export default {
  title: "Example/BackTop",
  component: BackTop,
};

const Template = (args) => <BackTop {...args} />;

export const Up = Template.bind({});
Up.args = {
  label: "Lên nào em!",
};
