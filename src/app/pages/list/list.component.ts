import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from 'src/app/service/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';

export interface Data {
  participantId: string;
  username: string;
  alert: string;
  attackDate: string,
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private http: HttpService, private router: Router, private msg: NzMessageService) { }

  loading = true;
  listOfData: readonly Data[] = [];
 
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.http.getParticipants({})
      .subscribe((res: any) => {
        this.loading = false;
        this.listOfData = res.data;
      })
  }

  
  goDetail(id: any): void {
    this.router.navigate(['/detail',id])
  }
  
}
