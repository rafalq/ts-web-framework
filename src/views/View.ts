import { Model } from "../models/Model";
import type { HasId } from "../models/Model";
export abstract class View<
	T extends Model<K>,
	K extends HasId
> {
	constructor(
		public parent: Element,
		public model: T
	) {
		this.bindModel();
	}

	abstract eventsMap(): {
		[key: string]: () => void;
	};
	abstract template(): string;

	bindModel(): void {
		this.model.on("change", () => {
			this.render();
		});
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] =
				eventKey.split(":");

			fragment
				.querySelectorAll(selector)
				.forEach((el) =>
					el.addEventListener(
						eventName,
						eventsMap[eventKey]
					)
				);
		}
	}

	render(): void {
		this.parent.innerHTML = "";
		const templateEl =
			document.createElement("template");
		templateEl.innerHTML = this.template();

		this.bindEvents(templateEl.content);

		this.parent.append(templateEl.content);
	}
}
