import { Component } from "@angular/core";
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  value: number = 5;
  content: "This is an example";
  placement: "bottom";
  tooltip: "tooltip";
  options: Options = {
    showTicksValues: false,
    stepsArray: [
      { value: 1, legend: "Very poor" },
      { value: 2 },
      { value: 3, legend: "Fair" },
      { value: 4 },
      { value: 5, legend: "Average" },
      { value: 6 },
      { value: 7, legend: "Good" },
      { value: 8 },
      { value: 9, legend: "Excellent" }
    ]
  };
}
