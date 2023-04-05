import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { } from './../../../assets/table.json'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data:any;
  paytypeData:any;
  providerData:any;
  employeetypeData:any;
  active:string = "payType";


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
   
  }

  activeTab(e:string){
    this.active = e; 
  }

  getData()
  {
  this.http.get('./../../../assets/table.json').subscribe((data)=>
    {
      console.log(data);
      this.data = data;
      console.log(this.data.categories.paytype_id[5])
      this.resolveData();
    });

  }
  resolveData(){

    let temp:Array<{date:string,amount:number,paytype_id:number}> = [];
    let i = 0;
    temp[0]=this.data.values[0];
    for(let j=1;j<this.data.values.length;j++)
    {
      if(temp[i].date==this.data.values[j].date && temp[i].paytype_id == this.data.values[j].paytype_id)
      {
        temp[i].amount += this.data.values[j].amount;
      }
      else{
        ++i;
        temp.push({
        paytype_id:this.data.values[j].paytype_id,
        amount:this.data.values[j].amount,
        date:this.data.values[j].date
        })
      }
    }
    
    this.paytypeData = temp;
    console.log(this.paytypeData);

    let temp1:Array<{date:string,amount:number,provider_id:string}> = [];
    i=0;
    temp1[0]=this.data.values[0];
    for(let j=1;j<this.data.values.length;j++)
    {
      if(temp1[i].date==this.data.values[j].date && temp1[i].provider_id == this.data.values[j].provider_id)
      {
        temp1[i].amount += this.data.values[j].amount;
      }
      else{
        ++i;
        temp1.push({
          provider_id:this.data.values[j].provider_id,
        amount:this.data.values[j].amount,
        date:this.data.values[j].date
        })
      }
    }

    this.providerData = temp1;

    let temp2:Array<{date:string,amount:number,employee_type_id:number}> = [];
    temp2[0]=this.data.values[0]
    i=0
    for(let j=1;j<this.data.values.length;j++)
    {
      if(temp2[i].date==this.data.values[j].date && temp2[i].employee_type_id == this.data.values[j].employee_type_id)
      {
        temp2[i].amount += this.data.values[j].amount;
      }
      else{
        ++i;
        temp2.push({
        employee_type_id:this.data.values[j].employee_type_id,
        amount:this.data.values[j].amount,
        date:this.data.values[j].date
        })

      }
    }
    this.employeetypeData = temp2;
    console.log(this.employeetypeData);

  }


}
