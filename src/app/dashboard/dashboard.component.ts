import { Component } from '@angular/core';
import { EvtServiceService } from 'src/services/evt-service.service';
import { MemberService } from 'src/services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private Es:EvtServiceService,private MS:MemberService){}

Nb_memebers:number=0;
Nb_Events:number=0;
Nb_Tools:number=0;
Nb_Articles:number=0;
ngOnInit(){
  this.MS.getAllMembers().subscribe((data)=>
  {
    this.Nb_memebers=data.length; 

  })
  this.Es.getAllEvent().subscribe((data)=>
    {
      this.Nb_Events=data.length; 
  
    })
}
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabels: string[] = ["A","B","C","D","E","F"];
  chartOptions: ChartOptions = {};

}
