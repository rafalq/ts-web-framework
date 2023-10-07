export class UserForm {
	parent: Element;
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
