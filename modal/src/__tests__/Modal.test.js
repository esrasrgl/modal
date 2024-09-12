import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Modal from "../components/Modal/Modal";
import { toast } from "react-toastify";
import { BookSectionCropReport } from "../api/requests";

jest.mock("../Svg/CloseModalSvg.js", () => () => <div>CloseModalSvg Mock</div>);

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
  },
}));

jest.mock("../api/requests.js", () => ({
  BookSectionCropReport: jest.fn(),
}));

const mockResponseData = [
  { Id: 1, DescriptionStatus: true },
  { Id: 2, DescriptionStatus: false },
];

describe("modal test ", () => {
  let mockOnClose;
  beforeEach(() => {
    mockOnClose = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("should close when click onClose ", async () => {
    render(<Modal onClose={mockOnClose} responseData={mockResponseData} />);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("modal"));
    expect(mockOnClose).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("modal-content"));
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  it("should close when click X ", async () => {
    render(<Modal onClose={mockOnClose} responseData={mockResponseData} />);
    const XBtn = screen.getByText("CloseModalSvg Mock");
    fireEvent.click(XBtn);
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  test("should call the API when selectedItems array is not empty", async () => {
    const mockResponseData = [
      { Id: 1, DescriptionStatus: true },
      { Id: 2, DescriptionStatus: false },
    ];

    render(<Modal onClose={mockOnClose} responseData={mockResponseData} />);
    const submitBtn = screen.getByText(/Gönder/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(BookSectionCropReport).toHaveBeenCalledWith({
        AdminPanelPage: expect.any(Number),
        BookSectionCropId: expect.any(Number),
        Issues: expect.any(Array),
        Message: expect.any(String),
      });
    });
  });

  test("should call the API when selectedItems array is empty", async () => {
    const mockResponseData = [
      { Id: 1, DescriptionStatus: false },
      { Id: 2, DescriptionStatus: false },
    ];

    render(<Modal onClose={mockOnClose} responseData={mockResponseData} />);
    const submitBtn = screen.getByText(/Gönder/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(toast.warning).toHaveBeenCalledWith("Lütfen seçim yapınız");
    });
  });
});
