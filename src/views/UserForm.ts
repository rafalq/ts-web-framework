import { User } from "../models/User";

export class UserForm {
	constructor(
		public parent: Element,
		public model: User
	) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on("change", () => {
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick,
		};
	}
	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

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
        <button class="set-age">SET RANDOM AGE</button>
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
		this.parent.innerHTML = "";
		const templateEl =
			document.createElement("template");
		templateEl.innerHTML = this.template();

		this.bindEvents(templateEl.content);

		this.parent.append(templateEl.content);
	}
}
