import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  teams:any[]
  loading = true
  constructor( private teamService : TeamsService) { }

  ngOnInit() {
    var temp: any[]
    this.teamService.getTeams()
    .subscribe(
      data => temp = data,
      error => alert(error),
      () => {
        this.teams = temp
        this.loading = false
      }
    )
  }



}
