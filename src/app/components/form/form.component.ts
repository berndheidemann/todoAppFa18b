import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {DataService} from '../../services/data.service';
import {Category} from '../../models/Category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  todo: Todo;

  constructor(private dataService: DataService, private router: Router) {
    this.todo = new Todo();
  }

  get categories(): Category[] {
    return this.dataService.categories;
  }

  ngOnInit() {
  }

  save() {
    this.dataService.save(this.todo);
    this.todo = new Todo();
    this.router.navigate(['/list']);
  }

  hasError(field: any) {
    return field.invalid && (field.dirty || field.touched);
  }
}
