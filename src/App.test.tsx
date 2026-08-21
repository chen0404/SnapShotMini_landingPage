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

  it("provides the V5 header navigation on desktop and mobile", () => {
    window.history.replaceState({}, "", "/");
    render(<App />);

    expect(screen.getByRole("navigation", { name: "主要導覽" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "洽談客製合作" })[0]).toHaveAttribute("href", "#v5-contact");

    fireEvent.click(screen.getByLabelText("開啟導覽選單"));
    expect(screen.getByRole("navigation", { name: "手機導覽" })).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("關閉導覽選單"));
    expect(screen.queryByRole("navigation", { name: "手機導覽" })).not.toBeInTheDocument();
  });

  it("shows verified company, contact, social, and privacy information", () => {
    window.history.replaceState({}, "", "/");
    render(<App />);

    expect(screen.getByText("享印生活股份有限公司")).toBeInTheDocument();
    expect(screen.getByText("統一編號 90334859")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /02-3765-5060/ })).toHaveAttribute("href", "tel:+886237655060");
    expect(screen.getByRole("link", { name: /chen@snapfoto.co/ })).toHaveAttribute("href", "mailto:chen@snapfoto.co");
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute("href", "https://www.instagram.com/snapshot.tw/");
    expect(screen.getAllByRole("link", { name: "隱私權政策" })[0]).toHaveAttribute("href", expect.stringContaining("snapfoto.co"));
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
