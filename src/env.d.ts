/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@alpinejs/collapse" {
	import type { PluginCallback } from "alpinejs";
	const collapse: PluginCallback;
	export default collapse;
}
