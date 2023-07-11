import { Component, Input } from '@angular/core';

@Component({
  selector: 'dynamic-script',
  templateUrl: './dynamic-script.component.html',
  styles: [
  ]
})
export class DynamicScriptComponent {



  scriptUrl: string = '';

  @Input() set Script(script: string) {

    if (script && script != "") {

      this.scriptUrl = script;
    }

  }

}
