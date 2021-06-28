import React from "react";
import Breadcrumb from "./Breadcrumb";
import { render } from "../../utils/test-utils";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockNextUseRouter = (pathname: string) =>
  useRouter.mockImplementation(() => ({ pathname }));

describe("Breadcrumb tests", () => {
  it("should render header info", () => {
    mockNextUseRouter("/");
    const { getByText } = render(<Breadcrumb />);
    expect(getByText("Home")).toBeInTheDocument();
  });

  it("should render child path", () => {
    mockNextUseRouter("/231");
    const { getByText } = render(<Breadcrumb />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Livro")).toBeInTheDocument();
  });
});
