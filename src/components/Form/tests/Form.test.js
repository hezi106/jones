import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "../index.js";

test("rendering and submitting a basic form", async () => {
  const onSubmit = jest.fn().mockImplementation((values) => {
    return values;
  });
  render(<Form onSubmit={onSubmit} />);

  userEvent.type(screen.getByLabelText(/First name/i), "John");
  userEvent.type(screen.getByLabelText(/Last name/i), "Dee");
  userEvent.type(screen.getByLabelText(/Email Address/i), "john.dee@someemail.com");
  userEvent.type(screen.getByLabelText(/Phone number/i), "1234567890");


  userEvent.click(screen.getByRole("button", {name: /SUBMIT/i}));

  await waitFor(() =>
    expect(onSubmit).toReturnWith({
      email: "john.dee@someemail.com",
      firstName: "John",
      lastName: "Dee",
      phoneNumber: "1234567890"
    })
  )
})