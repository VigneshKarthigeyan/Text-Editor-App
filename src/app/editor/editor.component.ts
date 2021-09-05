import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormCanDeactivate } from '../form-can-deactivate/form-can-deactivate';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent extends FormCanDeactivate implements OnInit,OnDestroy  {

  previousData="";


  @ViewChild('form')
  form: NgForm;

  ngOnDestroy(){
    this.saveChanges();
  }

  ngOnInit(){
    this.previousData=localStorage.getItem("previousData");
    if(this.previousData==null){
      localStorage.setItem('previousData',"");
    }
  }

  saveChanges(){
    console.log(this.form.submitted);
    localStorage.setItem('previousData',this.previousData);
  }

  // checkForChanges():boolean{
  //   console.log("check");

  //   let localStorageData=localStorage.getItem("previousData");
  //   if(localStorageData===this.previousData){
  //     return false;
  //   }
  //   return true;
  // }


}
