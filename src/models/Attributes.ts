export class Attributes<T> {
	constructor(private data: T) {}

	get(key: string): number | string | boolean {
		return this.data[key];
	}

	set(update: Partial<T>): void {
		this.data = { ...this.data, ...update };
	}
}
