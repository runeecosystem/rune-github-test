import { ToggleSwitch } from "@/registry/rune/toggle-switch";

export default function ToggleSwitchDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleSwitch label="Email updates" defaultChecked />
      <ToggleSwitch label="Dark mode" />
    </div>
  );
}
