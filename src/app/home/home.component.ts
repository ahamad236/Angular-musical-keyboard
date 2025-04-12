import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onClick(key: string) {
    debugger
    this.playSnd(key.toLowerCase());
  }

  onKeydown(event: any, key: string) {
    debugger
    event.preventDefault();
    this.playSnd(key.toLowerCase());

    let pressed_key = key.toLowerCase();
    const myKeys = document.querySelectorAll('.key');
    for (let i = 0; i < myKeys.length; i++) {
      myKeys[i].classList.remove('activated');
    }

    for (let i = 0; i < myKeys.length; i++) {
      if (myKeys[i].innerHTML.toLowerCase() == pressed_key) {
        myKeys[i].classList.add('activated');
      }
    }
  }

  playSnd(key: string) {
    switch (key) {
      case 'c':
        var snd = new Audio('../../assets/audio files/do.mp3');
        snd.play();
        break;
      case 'd':
        var snd = new Audio('../../assets/audio files/re.mp3');
        snd.play();
        break;
      case 'e':
        var snd = new Audio('../../assets/audio files/mi.mp3');
        snd.play();
        break;
      case 'f':
        var snd = new Audio('../../assets/audio files/fa.mp3');
        snd.play();
        break;
      case 'g':
        var snd = new Audio('../../assets/audio files/sol.mp3');
        snd.play();
        break;
      case 'a':
        var snd = new Audio('../../assets/audio files/la.mp3');
        snd.play();
        break;
      case 'b':
        var snd = new Audio('../../assets/audio files/ti.mp3');
        snd.play();
        break;
      case 'k':
        var snd = new Audio('../../assets/audio files/doh.mp3');
        snd.play();
        break;
      default:
        console.log(key)
    }
  }

}
