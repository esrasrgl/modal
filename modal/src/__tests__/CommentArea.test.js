import { render, screen } from "@testing-library/react";
import { CommentArea } from "../components/Content/CommentArea";

describe("commenArea component", () => {
  let message = "";
  let mockHandle;
  beforeEach(() => {
    mockHandle = jest.fn();
  });

  it("shoul render correctly", () => {
    render(<CommentArea message={message} handleChange={mockHandle} />);

    const textarea = screen.getByPlaceholderText("yorumlarını ", {
      exact: false,
    });
    expect(textarea).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

});
