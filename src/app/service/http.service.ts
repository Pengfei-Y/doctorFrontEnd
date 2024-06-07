import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }
    login(data:any) {
        return this.http.post('http://127.0.0.1:8088/renault/doctor/login',data);
    }
    getParticipants(params:any) {
        return this.http.get('http://127.0.0.1:8088/renault/doctor/attackList',{params});
    }
    getRecord(params:any) {
        return this.http.get('http://127.0.0.1:8088/renault/doctor/findAttacksByParticipantId',{params});
    }
    
    getRecordsLast7(data: any) {
        return this.http.get('http://127.0.0.1:8088/renault/attack/findSevenDay', { params: data });
    }
}
