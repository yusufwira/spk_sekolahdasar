import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-sekolah-admin',
  templateUrl: './sekolah-admin.component.html',
  styleUrls: ['./sekolah-admin.component.scss'],
})
export class SekolahAdminComponent implements OnInit {

  constructor(public alertController: AlertController, public sekolah:SekolahService) { }

  public dataSekolah= [];
  public jumlah_sekolah="";
  ngOnInit() {
    this.sekolah.ListSekolah().subscribe((data) => {    
     this.dataSekolah = data;
     this.jumlah_sekolah= data[0].jumlah
     console.log(this.dataSekolah);     
     //console.log(data[0].jumlah);       
    });
  }

  peringatan(){
    const alert =  this.alertController.create({
     header: 'Peringatan Penghapusan Sekolah',
     message: 'Semua history menengenai sekolah dan hal berhubungan dengan sekolah akan terhapus',
     buttons: [
      {
        text: 'Cancel',        
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
   }).then(alert=> alert.present());;
  }

}
