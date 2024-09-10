import { fireEvent, render, screen } from "@testing-library/react";
import { Buttons } from "../components/Footer/Buttons";

describe("buttons component", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should calls the onClose function when the "Kapat" button is clicked', () => {
    const onCloseMock = jest.fn();
    const submitMock = jest.fn();

    render(<Buttons onClose={onCloseMock} submit={submitMock} />);

    const closeBtn = screen.getByText("Kapat");
    fireEvent.click(closeBtn);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
