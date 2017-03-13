interface LocalStorage {
	getItem(key: string): StorageValueInterface | null;
	setItem(key: string, value: StorageValueInterface): boolean;
	removeItem(key: string): void;
	clear(): void;
	isEnabled(): boolean;
}

interface StorageValueInterface {
	value: string
	options: CacheOptionsInterface
}

interface CacheOptionsInterface {
	/**
	 * Expires timestamp
	 */
	expires?: number
	
	/**
	 * Max age in seconds
	 */
	maxAge?: number
	
	/**
	 * Tag for this key
	 */
	tag?: string
}