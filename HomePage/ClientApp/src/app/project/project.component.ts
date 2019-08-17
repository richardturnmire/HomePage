import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ButtonClick(e: Event) {
     
      // if (!e.) return e.preventDefault() 
     var button = e.currentTarget
      var txt = button[0].innerText;
      var test = button[0].dataset.whatever!;
     

      //  var recipient = button.data("whatever"); // ('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      const modal = document.querySelector('#modalPDFDisplay')!;

      var title = modal.querySelector(".modal-title")! as HTMLElement;
      if (title) {
        title.innerText = txt;
      }
      var obj = modal.querySelector("object");
      if (obj) {
        // obj.data = test;
        obj.setAttribute('data', test);

      }
    }
}
