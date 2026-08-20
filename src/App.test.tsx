import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("SnapShotMini landing page directions", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/v1/");
    window.scrollTo = () => undefined;
  });

  it("switches between all five complete visual directions", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /一坪的拍貼體驗/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: /版本二/ }));
    expect(screen.getByRole("heading", { name: /把店裡的今天/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: /版本三/ }));
    expect(screen.getByRole("heading", { name: /完整拍貼體驗/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: /版本四/ }));
    expect(screen.getByRole("heading", { name: /一坪的拍貼機/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: /版本五/ }));
    expect(screen.getByRole("heading", { name: /不用騰出一坪/ })).toBeInTheDocument();
  });

  it("uses V5 as the public landing page", () => {
    window.history.replaceState({}, "", "/");
    render(<App />);

    expect(screen.getByRole("heading", { name: /不用騰出一坪/ })).toBeInTheDocument();
  });

  it("does not pretend to submit leads without an endpoint", () => {
    render(<App />);

    const submitButton = screen.getByRole("button", { name: "送出合作需求" });
    fireEvent.submit(submitButton.closest("form")!);

    expect(
      screen.getByText("目前暫時無法送出合作需求，請稍後再試。"),
    ).toBeInTheDocument();
  });
});
