import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-primary",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

export function LoadingPulse() {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
    </div>
  );
} 