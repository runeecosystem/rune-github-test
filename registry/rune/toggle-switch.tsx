"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ToggleSwitchProps = {
  defaultChecked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
};

export function ToggleSwitch({
  defaultChecked = false,
  label,
  onChange,
  className,
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  function toggle() {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  }

  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-3", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={toggle}
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors duration-200 motion-reduce:transition-none",
          checked ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-700",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform duration-200 motion-reduce:transition-none",
            checked && "translate-x-5",
          )}
        />
      </button>
      {label ? <span className="text-sm">{label}</span> : null}
    </label>
  );
}
