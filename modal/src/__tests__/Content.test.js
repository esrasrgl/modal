import { fireEvent, render, screen } from "@testing-library/react";
import { Content } from "../components/Content/Content";
import { Texts } from "../text/tr";

const mockResponseData = [
  {
    Description: "String",
    Id: 1,
    Name: "String",
    DescriptionStatus: false,
  },
];

describe("Content Component Tests", () => {
  let mockOnClose;
  let mockSetResponseData;
  let mockSetMessage;
  let consoleSpy;

  beforeEach(() => {
    mockOnClose = jest.fn();
    mockSetMessage = jest.fn();
    mockSetResponseData = jest.fn();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(
      <Content
        onClose={mockOnClose}
        responseData={mockResponseData}
        setResponseData={mockSetResponseData}
        setMessage={mockSetMessage}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", async () => {
    const checkTitle = screen.getByText(Texts.title_2);
    expect(checkTitle).toBeInTheDocument();

    const commentTitle = screen.getByText(Texts.title_2);
    expect(commentTitle).toBeInTheDocument();
  });

  it("should map data correctly", () => {
    const checkItems = screen.getAllByTestId("check-item");
    expect(checkItems).toHaveLength(mockResponseData.length);
    expect(
      screen.getByPlaceholderText(Texts.placeHolder_comment)
    ).toBeInTheDocument();
  });

  it("should check item", () => {
    const checkItems = screen.getAllByTestId("check-item");
    fireEvent.click(checkItems[0].querySelector("span"));
    expect(mockSetResponseData).toHaveBeenCalled();

    const updateFunction = mockSetResponseData.mock.calls[0][0];
    const updateData = updateFunction(mockResponseData);
    expect(updateData).toEqual([
      {
        Description: "String",
        Id: 1,
        Name: "String",
        DescriptionStatus: true,
      },
    ]);
  });

  it("should set message", () => {
    const textArea = screen.getByPlaceholderText(Texts.placeHolder_comment);
    const value = "new text";
    fireEvent.change(textArea, { target: { value: value } });
    expect(mockSetMessage).toHaveBeenCalledWith(value);
  });
});
