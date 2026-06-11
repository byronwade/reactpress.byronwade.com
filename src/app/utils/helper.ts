import type { MouseEvent } from "react";

/**
 * Adds the WordPress `.hover` class to an admin-bar menu item while the pointer
 * is over it. Mirrors WordPress's `hoverIntent` behavior closely enough for the
 * admin bar dropdowns to open on hover.
 */
export function addClassOnHover(event: MouseEvent<HTMLElement>) {
	event.currentTarget.classList.add("hover");
}

/** Removes the `.hover` class added by {@link addClassOnHover}. */
export function removeClassOnHover(event: MouseEvent<HTMLElement>) {
	event.currentTarget.classList.remove("hover");
}
