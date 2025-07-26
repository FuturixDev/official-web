import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { OverrideProps } from "fanyucomponents";
import { useEffect, useMemo, useState } from "react";
import { Toast } from "./Toast";

export type CopyButtonProps = OverrideProps<
  React.HTMLAttributes<HTMLButtonElement>,
  {
    content: string;
  }
>;

export const CopyButton = ({
  content,
  onClick,
  children,
  ...rest
}: CopyButtonProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = useMemo(() => {
    return async () => {
      if (!navigator?.clipboard) {
        Toast.fire({ icon: "error", text: "Clipboard not supported" });
        return;
      }
      await navigator.clipboard
        .writeText(content)
        .then(() => {
          setCopied(true);
          Toast.fire({
            icon: "success",
            text: "Copy successful",
          });
        })
        .catch((err) => {
          console.error("Copy failed:", err);
          Toast.fire({ icon: "error", text: "Copy failed" });
        });
    };
  }, [content]);

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => setCopied(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <Tooltip title={copied ? "Copied" : "Copy"}>
      <button
        disabled={copied}
        aria-label={copied ? "Copied" : "Copy"}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleCopy();
          onClick?.(event);
        }}
        {...rest}
      >
        {children || (copied ? <CheckOutlined /> : <CopyOutlined />)}
      </button>
    </Tooltip>
  );
};
