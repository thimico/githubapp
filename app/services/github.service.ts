import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
	private username='thimico';
	private client_id = 'c0efa0190d76c26f4f45';
	private client_secret= '56ec34511a2d4333d7e1273fbdf2153af1c87f3b';


	constructor(private _http: Http){

		console.log('-->Servico GitHubService Iniciado');
	}

	getUser(){
		return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	getRepos(){
		return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}
	updateUsername(username:any){
			this.username = username;
	}
}