import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(
		public rootUrl: string,
		public deserialize: (json: K) => T
	) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios
			.get(this.rootUrl)
			.then((response: AxiosResponse) =>
				response.data.forEach((val: K) => {
					this.models.push(this.deserialize(val));
				})
			);
		this.trigger("change");
	}
}
function AxiosResponse(
	reason: any
): PromiseLike<never> {
	throw new Error("Function not implemented.");
}
