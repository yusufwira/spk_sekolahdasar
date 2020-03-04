import { Component, OnInit } from '@angular/core';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-sekolah-create-b',
  templateUrl: './sekolah-create-b.component.html',
  styleUrls: ['./sekolah-create-b.component.scss'],
})
export class SekolahCreateBComponent implements OnInit {

  constructor( public sekolah:SekolahService,private route: ActivatedRoute,public ekstra:EkstrakurikulerService,public alertController: AlertController, private router: Router,public menu: MenuController) { }

  public dataEkstra:any;
  arrEks=[];
  idSekolah="";
  ngOnInit() {
    this.idSekolah =this.route.snapshot.params['id'];
    console.log(this.idSekolah);
    this.ekstra.dataEkstra().subscribe((data) => {      
          this.dataEkstra = data;   
          //console.log(data);   
     });;
    
  }

  pilih="";

  //const removeItem = (items, i) =>items.slice(0, i-1).concat(items.slice(i, items.length))
  
  getValue(value) {    
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arrEks.length; index++) {
      if(this.arrEks[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arrEks=this.arrEks.filter(item => item !== this.pilih)
    }
    else{
      this.arrEks.push(this.pilih);
    }
    console.log(this.arrEks);  
  }

  save(){
    this.sekolah.ekstra = this.arrEks;
    this.sekolah.sekolah = this.idSekolah;
    this.sekolah.AddEkstra().subscribe((data) => {      
      console.log(data);       
    });;

  }

}
