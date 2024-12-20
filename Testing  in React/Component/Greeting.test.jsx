import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders a default greeting when no name is provided", () => {
    render(<Greeting />);
    const defaultText = screen.getByText(/Hello, Guest!/i);
    expect(defaultText).toBeInTheDocument();
  });

  test("renders a personalized greeting when a name is provided", () => {
    render(<Greeting name="Alice" />);
    const personalizedText = screen.getByText(/Hello, Alice!/i);
    expect(personalizedText).toBeInTheDocument();
  });
});
