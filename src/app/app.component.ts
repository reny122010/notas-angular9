import { Component } from '@angular/core';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notas';
  data = new AppData('');
  arrayOne(): any[] {
    return Array(this.data.name);
  };
  calcule(i): number {
  	console.log(this.data.name)
  	return 10/ +this.data.name * i;
  }
}
