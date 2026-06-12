"use client"
export default function Page() {
	return <div>this is the posts bilder page</div>;
}
/**
 * ReactPress dependencies
 */
// https://reactpress.github.io/gutenberg/?path=/docs/blockeditor-inserter--quick-inserter
// import React from "react";
// import { useEffect, useState } from "@reactpress/element";
// import { Inserter, BlockEditorKeyboardShortcuts, BlockEditorProvider, BlockList, BlockTools, BlockInspector, WritingFlow, ObserveTyping, BlockControls, BlockFormatControls, BlockNavigationDropdown, BlockEdit, RichText } from "@reactpress/block-editor";
// import { Popover, SlotFillProvider } from "@reactpress/components";
// import { registerCoreBlocks } from "@reactpress/block-library";
// import { ShortcutProvider } from "@reactpress/keyboard-shortcuts";
// import "@reactpress/components/build-style/style.css";
// import "@reactpress/block-editor/build-style/style.css";
// import "@reactpress/block-library/build-style/style.css";
// import "@reactpress/block-library/build-style/editor.css";
// import "@reactpress/block-library/build-style/theme.css";
// import "@reactpress/format-library/build-style/style.css";

// if (typeof window !== "undefined") {
// 	registerCoreBlocks();
// }

// export default function PostNew() {
// 	const storedBlocksJson = localStorage.getItem("blocks");
// 	const [blocks, updateBlocks] = useState(storedBlocksJson ? JSON.parse(storedBlocksJson) : []);

// 	useEffect(() => {
// 		localStorage.setItem("blocks", JSON.stringify(blocks));
// 	}, [blocks]);
// 	console.log(blocks);

// 	const handleOpenSettings = () => {
// 		console.log("hopfully open settings");
// 	};
// 	return (
// 		<>
// 			<ShortcutProvider>
// 				<BlockEditorProvider value={blocks} onInput={updateBlocks} onChange={updateBlocks}>
// 					<SlotFillProvider>
// 						<div className="block-editor">
// 							<div className="block-editor__container hide-if-no-js">
// 								<div className="edit-post-layout is-mode-text is-sidebar-opened interface-interface-skeleton">
// 									<div className="interface-interface-skeleton__editor">
// 										<div className="interface-interface-skeleton__header" role="region" aria-label="Editor top bar" tabIndex={-1}>
// 											<div className="edit-post-header">
// 												<div className="edit-post-header__toolbar">
// 													<div id="id-vrabev" role="toolbar" aria-orientation="horizontal" aria-label="Document tools" className="components-accessible-toolbar edit-post-header-toolbar">
// 														<div className="edit-post-header-toolbar__left">
// 															<Inserter className="components-button edit-post-header-toolbar__inserter-toggle is-primary has-icon" />
// 															<div className="components-dropdown" tabIndex={-1}>
// 																<button type="button" disabled={true} id="id-vrabev-2" aria-disabled="true" data-toolbar-item="true" aria-expanded="false" aria-haspopup="true" className="components-button has-icon" aria-label="Tools" style={{ pointerEvents: "none" }}>
// 																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false">
// 																		<path d="M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z" />
// 																	</svg>
// 																</button>
// 															</div>
// 															<button type="button" id="id-vrabev-3" tabIndex={-1} data-toolbar-item="true" aria-disabled="true" className="components-button editor-history__undo has-icon" aria-label="Undo">
// 																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false">
// 																	<path d="M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z" />
// 																</svg>
// 															</button>
// 															<button type="button" id="id-vrabev-4" tabIndex={-1} data-toolbar-item="true" aria-disabled="true" className="components-button editor-history__redo has-icon" aria-label="Redo">
// 																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false">
// 																	<path d="M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z" />
// 																</svg>
// 															</button>
// 															<div className="components-dropdown table-of-contents" tabIndex={-1}>
// 																<button type="button" id="id-vrabev-5" tabIndex={0} data-toolbar-item="true" aria-expanded="false" aria-haspopup="true" aria-disabled="false" className="components-button has-icon" aria-label="Details">
// 																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false">
// 																		<path d="M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z" />
// 																	</svg>
// 																</button>
// 															</div>
// 															<BlockNavigationDropdown className="components-button edit-post-header-toolbar__list-view-toggle has-icon" />
// 														</div>
// 													</div>
// 												</div>
// 												<div className="edit-post-header__settings">
// 													<button type="button" className="components-button editor-post-switch-to-draft is-tertiary">
// 														Switch to draft
// 													</button>
// 													<div className="components-dropdown components-dropdown-menu block-editor-post-preview__dropdown" tabIndex={-1}>
// 														<button type="button" aria-haspopup="true" aria-expanded="false" className="components-button block-editor-post-preview__button-toggle components-dropdown-menu__toggle is-tertiary">
// 															Preview
// 														</button>
// 													</div>
// 													<a href="http://localhost:3000/post/the-new-website-design-trends-overstimulation-parallax-zoom-scrolling-90s-navigation-scrapbook-aesthetic?preview=true" target="wp-preview-29" className="components-button editor-post-preview is-tertiary">
// 														Preview
// 														<span
// 															data-wp-c16t="true"
// 															data-wp-component="VisuallyHidden"
// 															className="components-visually-hidden css-0 e19lxcc00"
// 															style={{
// 																border: 0,
// 																clip: "rect(1px, 1px, 1px, 1px)",
// 																clipPath: "inset(50%)",
// 																height: 1,
// 																margin: "-1px",
// 																overflow: "hidden",
// 																padding: 0,
// 																position: "absolute",
// 																width: 1,
// 																overflowWrap: "normal",
// 															}}
// 														>
// 															(opens in a new tab)
// 														</span>
// 													</a>
// 													<button type="button" aria-disabled="true" className="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
// 														Update
// 													</button>
// 													<div className="interface-pinned-items">
// 														<button type="button" aria-pressed="true" aria-expanded="true" className="components-button is-pressed has-icon" aria-label="Settings">
// 															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false">
// 																<path
// 																	fillRule="evenodd"
// 																	d="M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z"
// 																	clipRule="evenodd"
// 																/>
// 															</svg>
// 														</button>
// 													</div>
// 													<div className="components-dropdown components-dropdown-menu interface-more-menu-dropdown" tabIndex={-1}>
// 														<button onClick={handleOpenSettings} type="button" aria-haspopup="true" aria-expanded="false" className="components-button components-dropdown-menu__toggle has-icon" aria-label="Options">
// 															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false">
// 																<path d="M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z" />
// 															</svg>
// 														</button>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="interface-interface-skeleton__body">
// 											<div className="interface-interface-skeleton__content">
// 												<div className="edit-post-text-editor">
// 													{/* <div className="edit-post-text-editor__toolbar">
// 													<h2>Editing code</h2>
// 													<button type="button" className="components-button is-tertiary">
// 														Exit code editor
// 													</button>
// 												</div> */}
// 													<div className="edit-post-text-editor__body">
// 														<BlockTools className="block-editor-block-list__block wp-block is-selected wp-block-freeform">
// 															<BlockControls />
// 															<BlockEdit />
// 															<BlockFormatControls />
// 															<BlockEditorKeyboardShortcuts />

// 															<div className="edit-post-visual-editor__post-title-wrapper">
// 																<RichText tagName="h1" placeholder="Enter a title" />
// 															</div>
// 															<WritingFlow className="editor-styles-wrapper block-editor-writing-flow">
// 																<ObserveTyping>
// 																	<BlockList className="is-root-container is-layout-flow wp-block-post-content block-editor-block-list__layout" />
// 																</ObserveTyping>
// 															</WritingFlow>
// 														</BlockTools>
// 													</div>
// 												</div>
// 												<Popover.Slot />
// 											</div>
// 											<div className="interface-interface-skeleton__sidebar">
// 												<div className="interface-complementary-area edit-post-sidebar">
// 													<BlockInspector />
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</SlotFillProvider>
// 				</BlockEditorProvider>
// 			</ShortcutProvider>
// 		</>
// 	);
// }
