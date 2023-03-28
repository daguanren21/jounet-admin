import type { PiniaPluginContext } from "pinia";

/**
 * setup语法的重置状态插件
 * @param context
 * @description
 */
export function resetSetupStore(context: PiniaPluginContext) {
	const setupSyntaxIds = ['setup-store']
	if (setupSyntaxIds.includes(context.store.$id)) {
		const { $state } = context.store
		const defaultStore = cloneDeep($state);
		context.store.$reset = () => {
			context.store.$patch(defaultStore)
		}
	}
}
