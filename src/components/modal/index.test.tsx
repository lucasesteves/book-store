import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent } from "@testing-library/react";
import { Modal } from "~/components";
import customRender from "~/config/customRender";

describe("Modal component", () => {
  afterEach(cleanup);
  it("Should render correctly", () => {
    expect(
      customRender(
        <Modal open title="Modal Title" onClose={jest.fn()}>
          Action
        </Modal>
      )
    ).toBeDefined();
  });

  it("Close modal", () => {
    let isOpen = true;
    const { getByTestId } = customRender(
      <Modal
        open={isOpen}
        title="Modal Title"
        onClose={() => {
          isOpen = false;
        }}
      >
        Action
      </Modal>
    );
    const button = getByTestId("button-close");
    fireEvent.click(button);
    expect(isOpen).toEqual(false);
  });
});
