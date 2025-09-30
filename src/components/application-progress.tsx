import { Check, Loader } from "lucide-react";

export default function ProgressBar() {
  const steps = [
    { id: 1, label: "Submitted" },
    { id: 2, label: "Under Review" },
    { id: 3, label: "Approved" },
    { id: 4, label: "Enrollment" },
  ];

  // The current status from your database or props
  const currentStatus = "Under Review";

  // Find the current step index based on currentStatus
  const currentStep =
    steps.findIndex((step) => step.label === currentStatus) + 1; // +1 because index starts at 0

  return (
    <div className="flex items-center justify-between w-full relative">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col items-center text-center w-full relative"
        >
          {/* Circle */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
            ${
              index + 1 <= currentStep
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1 < currentStep ? (
              <Check size={20} />
            ) : index + 1 === currentStep ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              index + 1
            )}
          </div>

          {/* Label */}
          <span className="mt-2 text-sm font-medium">{step.label}</span>

          {/* Line connector */}
          {index < steps.length && (
            <div
              className={`absolute top-5 left-1/2 w-full h-1 
                ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}
              `}
              style={{ transform: "translateX(50%)" }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
