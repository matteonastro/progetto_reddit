import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  addArticle(spamText: HTMLInputElement, num: HTMLInputElement): boolean {
    console.log(`spamText: ${spamText.value} and spamNum: ${num.value}`);
    let cont = Number(num.value);
    for(let i:number =0; i< cont; i++)  
 {
  this.articles.push(spamText.value);
 }

    return false;
  }

}

