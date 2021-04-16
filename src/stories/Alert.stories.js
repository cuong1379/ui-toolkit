import React from "react";

import { Alert } from "./Alert";

export default {
  title: "Example/Alert",
  component: Alert,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  size: "large",
  label: "Thành công, mình là Tiểu Cường",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  size: "large",
  label: "Xin chào mn, mình là Tiểu Cường",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  size: "large",
  label: "Thông báo, mình là Tiểu Cường",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  size: "large",
  label: "Nguy hiểm, mình là Tiểu Cường",
};
