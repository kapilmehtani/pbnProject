import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  } from './../../../assets/actions.json';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  actions:any;
  pending:any;
  ignored:any;
  completed:any;
  constructor(public http:HttpClient) { }



  ngOnInit(): void {
    this.http.get('./../../../assets/actions.json').subscribe((data)=>{
      this.actions=data;
      this.filtering();
      console.log(data);
    })
  }

  filtering(){
    this.pending = this.actions;
    this.ignored = [];
    this.completed = [];
  }





  // APPT_REQUEST: { text: "Appt Request", filters: ["AR", "AC", "ASF"] },
  // FORM: { text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"] },
  // APPOINTMENT: { text: "Appointment", filters: ["CR", "UMR"] },
  // PAYMENT: { text: "Payment", filters: ["PR"] },
  // REVIEW: { text: "Review", filters: ["URR"] },
  // FEEDBACK: { text: "Feedback", filters: ["FR"] }
}
