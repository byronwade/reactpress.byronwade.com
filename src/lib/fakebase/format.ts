/** Shared formatting helpers for the admin list screens. */

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** WordPress-style date column, e.g. "2023/02/16 at 7:33 pm". */
export function wpDate(iso: string): string {
	const d = new Date(iso);
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	let h = d.getUTCHours();
	const min = String(d.getUTCMinutes()).padStart(2, "0");
	const ampm = h >= 12 ? "pm" : "am";
	h = h % 12 || 12;
	return `${y}/${m}/${day} at ${h}:${min} ${ampm}`;
}

/** "Last Modified" / "Published" month-year label, e.g. "February 2023". */
export function monthYear(iso: string): string {
	const d = new Date(iso);
	return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

const STATUS_LABELS: Record<string, string> = {
	publish: "Published",
	future: "Scheduled",
	draft: "Draft",
	pending: "Pending",
	private: "Private",
	trash: "Trash",
};

export function statusLabel(status: string): string {
	return STATUS_LABELS[status] ?? status;
}

/** Pluralize the tablenav item count, e.g. "3 items" / "1 item". */
export function items(n: number): string {
	return `${n} item${n === 1 ? "" : "s"}`;
}

/** Human-readable file size, e.g. "242 KB". */
export function fileSize(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
