export class UserForm {
	constructor(public parent: Element) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			"click:button": this.onButtonClick,
		};
	}

	onButtonClick(): void {
		console.log("button clicked");
	}

	template(): string {
		return `
      <div>
        <h1>UserForm</h1>
        <input />
      </div>
      `;
	}

	render(): void {
		const templateEl =
			document.createElement("template");
		templateEl.innerHTML = this.template();

		this.parent.append(templateEl.content);
	}
}
