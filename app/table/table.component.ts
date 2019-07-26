import { Component, OnInit } from '@angular/core';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  empId: number = 0;
  empName: string = "";
  empSalary: number = 0;
  empDepartment: string = "";
  showUpdate: boolean = false;
check:boolean=true;
  emp = [
    {
      id: 1, name: "prakhar", salary: 100, department: "java"
    }
  ];
  onADD() {
    this.emp.push({ id: this.empId, name: this.empName, salary: this.empSalary, department: this.empDepartment });
  }
  onRemove(emp1) {
    let index: number = this.emp.indexOf(emp1);
    this.emp.splice(index, 1);
  }
  onUpdate(emp1) {
    if(this.check==true){
      this.check=false;
    }

  }
  update(emp1) {
    alert("sjkdfhjk");
    let ind: number = this.emp.indexOf(emp1);
    this.emp.splice(ind, 1);
    this.emp.push({ id: this.empId, name: this.empName, salary: this.empSalary, department: this.empDepartment });
    this.check=false;
  }
  ngOnInit() {

  }

}
