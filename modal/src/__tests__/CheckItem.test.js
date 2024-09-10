import { screen, render, fireEvent } from "@testing-library/react";
import CheckItem from "../components/Content/CheckItem";

jest.mock("../Svg/SquareSvg", () => () => <div>SquareSvg Mock</div>);
jest.mock("../Svg/SquareCheckSvg", () => () => (
  <div>SquareCheckSvg Mock</div>
));

describe("checkItem component", () => {
  let setIsCheckedMock;
  beforeEach(() => {
    setIsCheckedMock = jest.fn();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should calls setIsChecked with item.Id when span is clicked", () => {
    const itemMock = { Id: 1, Name: "String", DescriptionStatus: false };
    render(<CheckItem item={itemMock} setIsChecked={setIsCheckedMock} />);

    const span = screen.getByText(itemMock.Name);
    fireEvent.click(span);
    expect(setIsCheckedMock).toHaveBeenCalledWith(itemMock.Id);

    const label = screen.getByText("SquareSvg Mock");
    fireEvent.click(label);
    expect(setIsCheckedMock).toHaveBeenCalledWith(itemMock.Id);

    expect(screen.getByText("SquareSvg Mock")).toBeInTheDocument();
  });

  it("should calls setIsChecked with item.Id when span is clicked", () => {
    const itemMock = { Id: 1, Name: "String", DescriptionStatus: true };
    render(<CheckItem item={itemMock} setIsChecked={setIsCheckedMock} />);

    const span = screen.getByText(itemMock.Name);
    fireEvent.click(span);
    expect(setIsCheckedMock).toHaveBeenCalledWith(itemMock.Id);

    const label = screen.getByText("SquareCheckSvg Mock");
    fireEvent.click(label);
    expect(setIsCheckedMock).toHaveBeenCalledWith(itemMock.Id);

    expect(screen.getByText("SquareCheckSvg Mock")).toBeInTheDocument();
  });
});
