import { AUTH_TOKEN } from "../constants";

export function getProperty(key:string): string | undefined{
	if(typeof window !== 'undefined')
		return window?.localStorage.getItem(key) || undefined;
}

export function hydrateProperty(key: string, value: string): void {
	if (typeof window !== 'undefined')
		window?.localStorage?.setItem(key, value);
}