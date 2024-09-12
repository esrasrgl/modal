import { render, screen } from "@testing-library/react";
import { CommentArea } from "../components/Content/CommentArea";
import { Texts } from "../text/tr";

describe("commenArea component", () => {
  let message = "";
  let mockHandle;
  beforeEach(() => {
    mockHandle = jest.fn();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shoul render correctly", () => {
    render(<CommentArea message={message} handleChange={mockHandle} />);

    const textarea = screen.getByPlaceholderText(Texts.placeHolder_comment);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

});
