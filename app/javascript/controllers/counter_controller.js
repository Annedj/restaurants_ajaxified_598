import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    console.log('Hello!');
    setInterval(this.refresh, 3000);
  }

  refresh = () => {
    // console.log('Button has been clicked!!!');

    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerText = data.restaurants.length;
      });
  }
}
