import React from "react";
import Header from "./Header";
import { render } from "../../utils/test-utils";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "",
    };
  },
}));

describe("Header tests", () => {
  it("should render header info", () => {
    const { getByText } = render(<Header />);
    expect(getByText(`Books!`)).toBeInTheDocument();
    expect(getByText("Juan Barros")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
  });
});
