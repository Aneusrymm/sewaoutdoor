"use client";

interface StepIndicatorProps {
  currentStep: "cart" | "checkout" | "confirmation";
}

const steps = [
  { key: "cart", label: "Cart" },
  { key: "checkout", label: "Checkout" },
  { key: "confirmation", label: "Confirmation" },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <div className="flex items-center justify-center gap-0 py-[20px]">
      {steps.map((step, i) => {
        const isActive = i === currentIndex;
        const isDone = i < currentIndex;

        return (
          <div key={step.key} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center gap-[6px]">
              <div
                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#111] text-white"
                    : isDone
                    ? "bg-[#111] text-white"
                    : "bg-[#f0f0f0] text-[#999]"
                }`}
              >
                {isDone ? "✓" : i + 1}
              </div>
              <span
                className={`text-[12px] font-medium ${
                  isActive || isDone ? "text-[#111]" : "text-[#999]"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connecting line */}
            {i < steps.length - 1 && (
              <div
                className={`w-[60px] sm:w-[100px] h-[2px] mx-[8px] sm:mx-[12px] mb-[22px] ${
                  isDone ? "bg-[#111]" : "bg-[#e0e0e0]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
