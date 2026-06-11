import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Tailwind utilities are prefixed `tw-` (see tailwind.config.js), so
// tailwind-merge must be told the prefix to dedupe conflicting classes.
const twMerge = extendTailwindMerge({ prefix: "tw-" });

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
