import { Component, OnInit, Input } from "@angular/core";

@Component({
    moduleId: "loginLogsId",
    selector: "az-login-logs",
    template: `<ul class="az-login-log">
					<li  *ngFor="let log  of logs;">{{log}}</li>
			   </ul>`,
	styleUrls: ["login-logs.scss"],
})
export class LoginLogsComponent implements OnInit {
	@Input()
	public logs: Array<string>;

    ngOnInit() {
    	this.logs = (!this.logs)? [] : this.logs;
    }
    
}