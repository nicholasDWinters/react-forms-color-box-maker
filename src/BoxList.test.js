import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const colorInput = getByLabelText("Background Color");
    const btn = queryByText("Add Box");
    expect(queryByText('X')).not.toBeInTheDocument();
    fireEvent.change(colorInput, { target: { value: 'blue' } });
    fireEvent.click(btn);
    expect(queryByText('X')).toBeInTheDocument();
})
