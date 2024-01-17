import { Component, inject,TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from '../../services/form.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  private modalService = inject(NgbModal);
  index : any;
  
  constructor(public dataService : DataService){
    console.log(dataService.UserList);
  }
  onDelete(index : any){
    this.dataService.deleteData(index);
  }
	open(content: TemplateRef<any>, index : any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.index = index;
	}
}
