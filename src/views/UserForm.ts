import { User } from "../models/User";

export class UserForm {
	constructor(
		public parent: Element,
		public model: User
	) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			"click:button": this.onButtonClick,
			"mouseenter:h1": this.onHeaderHover,
		};
	}

	onButtonClick(): void {
		console.log("button clicked");
	}

	onHeaderHover(): void {
		console.log("h1 hovered over");
	}

	template(): string {
		return `
      <div>
        <h1>UserForm</h1>
        <p>User: ${this.model.get("name")} ${
			this.model.get("id") === undefined
				? ""
				: `#${this.model.get("id")}`
		}</p>
        <p>User Age: ${this.model.get("age")}</p>
        <input />
        <button>CLICK</button>
      </div>
      `;
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
		const templateEl =
			document.createElement("template");
		templateEl.innerHTML = this.template();

		this.bindEvents(templateEl.content);

		this.parent.append(templateEl.content);
	}
}
