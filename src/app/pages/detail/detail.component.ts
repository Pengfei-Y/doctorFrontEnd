import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as echarts from 'echarts';
import moment from 'moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpService) { }
  total: number = 1;
  allData:any = [];
  params: any = {
    pageNum: 1,
  }
  loading = true;
  pageIndex = 1;
  listOfData: any = [];
  getList(p: any) {
    this.http.getRecord(p)
      .subscribe((res: any) => {
        this.loading = false;
        this.allData = res.data;
        this.listOfData = res.data.slice(0,10);
        this.total = res.data.length
      })
  }
  renderChart(participantId: string){
    const attackDate = moment().format('yyyy-M-DD')
    this.http.getRecordsLast7({ participantId, attackDate })
      .subscribe((res: any) => {
        const records = Object.values(res.data)
        let data = [];
        for (let i = 0; i < 7; i++) {
          const d = moment().subtract(6 - i, 'days').format('M-DD');
          data.push(d);
        }
        var myChart = echarts.init(document.getElementById('main') as HTMLElement);

        myChart.setOption({
          title: {
            text: 'the daily number of records'
          },
          tooltip: {},
          xAxis: {
            data
          },
          yAxis: {},
          series: [
            {
              name: 'number',
              type: 'bar',
              data: records
            }
          ]
        });
      })
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.params.participantId = id;
    this.getList(this.params);
    this.renderChart(id);
  }
  onQueryParamsChange(params: any): void {
    const { pageIndex } = params;
    console.log(pageIndex)
    this.pageIndex = pageIndex;
    this.listOfData = this.allData.slice(pageIndex * 10 - 10, pageIndex*10);
  }
}
