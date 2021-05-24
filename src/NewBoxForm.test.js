import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

it("renders without crashing", function () {
    render(<NewBoxForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("should allow user input", function () {
    const { getByLabelText } = render(<NewBoxForm />);
    const colorInput = getByLabelText("Background Color");
    const widthInput = getByLabelText("Width");
    fireEvent.change(widthInput, { target: { value: 300 } });
    fireEvent.change(colorInput, { target: { value: 'blue' } });
    expect(colorInput).toHaveValue('blue');
    expect(widthInput).toHaveValue(300);
});
