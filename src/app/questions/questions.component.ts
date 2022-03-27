import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  showForm:boolean = true;
  showLabel:boolean = false;
  asianDad:string = 'https://i.kym-cdn.com/entries/icons/original/000/002/635/d68.jpg';
  dadWords:string = '';
  constructor() {


  }

  ngOnInit(): void {}
  handleSubmit(form:NgForm){
    let finalGrade = 0;
    if(form.value.cigarate === 'No')
    {
      this.dadWords += 'At Least You Dont Smoke Cigarrate \n';
    }
    else{
     this.dadWords += 'What ???? You smoke Cigrate ????? \n';
    }
    if(form.value.degree === 'No')
    {
      this.dadWords += 'And you Dont Have A deegre !!! \n';
    }
    else{
      this.dadWords += 'At least You have A Degree \n';

    }
    
      this.dadWords += `You are working only ${form.value.hours} Hours . !!!!! Work Harder \n`;
    
  
    
    if(form.value.software === 'No'){
      this.dadWords += 'You Need To Study software !!!! \n';
    }
    else{
      this.dadWords += "Need to study More !!!!! \n"
    }
    this.dadWords += "What A Dissapointment.....";
    this.showForm = false;
  }
  toggleLabel(){
    this.showLabel = true;
  }
  toggleLabelOff()
  {
    this.showLabel = false;
  }
  changeForms(){
    this.showForm = true;
  }
}
