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

    fireEvent.change(screen.getByLabelText(/店家或品牌名稱/), { target: { value: "測試品牌" } });
    fireEvent.change(screen.getByLabelText(/聯絡人姓名/), { target: { value: "陳小姐" } });
    fireEvent.change(screen.getByLabelText(/聯絡電話/), { target: { value: "02-3765-5060" } });
    fireEvent.change(screen.getByLabelText(/電子郵件/), { target: { value: "visitor@example.com" } });
    const submitButton = screen.getByRole("button", { name: "送出合作需求" });
    fireEvent.submit(submitButton.closest("form")!);

    expect(
      screen.getByText("目前暫時無法送出合作需求，請稍後再試。"),
    ).toBeInTheDocument();
  });

  it("requires only the core contact fields", () => {
    window.history.replaceState({}, "", "/");
    render(<App />);

    expect(screen.getByLabelText(/店家或品牌名稱/)).toBeRequired();
    expect(screen.getByLabelText(/聯絡人姓名/)).toBeRequired();
    expect(screen.getByLabelText(/聯絡電話/)).toBeRequired();
    expect(screen.getByLabelText(/電子郵件/)).toBeRequired();
    expect(screen.getByLabelText(/店家類型/)).not.toBeRequired();
    expect(screen.getByLabelText(/門市數量/)).not.toBeRequired();
    expect(screen.getByLabelText(/合作需求/)).not.toBeRequired();
  });

  it("shows a specific error for an invalid phone number", () => {
    window.history.replaceState({}, "", "/");
    render(<App />);

    fireEvent.change(screen.getByLabelText(/店家或品牌名稱/), { target: { value: "測試品牌" } });
    fireEvent.change(screen.getByLabelText(/聯絡人姓名/), { target: { value: "陳小姐" } });
    const phone = screen.getByLabelText(/聯絡電話/);
    fireEvent.change(phone, { target: { value: "1234" } });
    fireEvent.change(screen.getByLabelText(/電子郵件/), { target: { value: "visitor@example.com" } });
    fireEvent.submit(screen.getByRole("button", { name: "送出合作需求" }).closest("form")!);

    expect(screen.getByText(/請輸入有效的臺灣電話/)).toBeInTheDocument();
    expect(phone).toHaveAttribute("aria-invalid", "true");
    expect(phone).toHaveFocus();
  });

  it("rejects incomplete email addresses before submission", () => {
    window.history.replaceState({}, "", "/");
    render(<App />);

    fireEvent.change(screen.getByLabelText(/店家或品牌名稱/), { target: { value: "測試品牌" } });
    fireEvent.change(screen.getByLabelText(/聯絡人姓名/), { target: { value: "陳小姐" } });
    fireEvent.change(screen.getByLabelText(/聯絡電話/), { target: { value: "0912 345 678" } });
    const email = screen.getByLabelText(/電子郵件/);
    fireEvent.change(email, { target: { value: "chen@mem" } });
    fireEvent.submit(screen.getByRole("button", { name: "送出合作需求" }).closest("form")!);

    expect(screen.getByText(/請輸入完整的電子郵件/)).toBeInTheDocument();
    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveFocus();
  });
});
