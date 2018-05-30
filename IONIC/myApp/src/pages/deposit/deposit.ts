import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';



@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {

  myForm: FormGroup;
  account: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,              
              public atmService: AtmserviceProvider,
              public loadCtrl: LoadingController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {


    this.account = navParams.get("acct");

  }

  ngOnInit(){

    this.myForm = new FormGroup(
      {
        amount: new FormControl(0, Validators.required)
      }
    );
  }

  submitTheValue(){
    let alert = this.alertCtrl.create({
      title: 'Deposit Confirmation!',
      subTitle: 'Are you sure you want to make this deposit?',
      buttons: [
        {
          text : "Yes",
          handler: () => {            
            console.log("Yes");
            this.performDeposit();
          }
        },
        {
          text: "No",
          handler: () => {
            console.log("No, not at this time");
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
    console.log("CLICKED yes");
  }


  performDeposit() {

    let loader = this.loadCtrl.create({ content: 'Processing' });
    loader.present();

    let amount = this.myForm.get("amount").value;

    this.atmService.deposit(this.account, amount).then(
      succ => {
        loader.dismiss();
        let alerta = this.alertCtrl.create({
          title: 'Confirmation',
          message: 'Deposit Successful!' +
                  ' New Balance is: ' + succ.currentBalance,
          buttons: [{
            text:'OK',
          handler: ()=> {
            this.navCtrl.pop();
          }
          }]
        });
        alerta.present();
       // this.navCtrl.push(LoginPage);
      }).catch (err => {
        let alerta = this.alertCtrl.create({
          title: 'Invalid Operation',
          message: 'Deposit was not completed!',
          buttons: [{
            text: "Ok",
            handler: () => {
              this.navCtrl.pop();
            }
          }]
        });
          
        alerta.present();
        //bad news
        //let toast = this.toastCtrl.create({ message: 'Deposit Failed' + err, duration: 3000 });
        //loader.dismiss();
        //toast.present();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

}
