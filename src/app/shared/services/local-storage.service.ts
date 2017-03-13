import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService implements LocalStorage {
	public getItem(key: string): Object | any {
		let value: string = localStorage.getItem(key);
		return value ? JSON.parse(value) : null;
	}
	
	public setItem(key: string, value: StorageValueInterface): boolean {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (e) {
			console.error(e);
			return false;
		}
	}
	
	public removeItem(key: string): void {
		localStorage.removeItem(key);
	}
	public clear(): void {
		localStorage.clear();
	}
	
	public isEnabled(): boolean {
		try {
			localStorage.setItem("test", "test");
			localStorage.removeItem("test");
			return true;
		} catch (e) {
			console.error(e);
			return false;
		}
	}
}