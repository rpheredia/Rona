import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
//import { TabsPage } from '../../pages/tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  myForm: FormGroup;
  account: string;
  currBalance: Number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public atmService: AtmserviceProvider,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {

      this.account = navParams.get("acct"); 

      this.currBalance = navParams.get("currBal");

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
      title: 'Withdrawal Confirmation!',
      subTitle: 'Are you sure you want to make this withdrawal?',
      buttons: [
        {
          text : "Yes",
          handler: () => {            
            console.log("Yes");
            this.validateBalance();
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

  validateBalance() {

    this.atmService.getCurrentBalance(this.account).subscribe
  (resp => {
    if (resp.currentBalance < this.myForm.get("amount").value) {
        
    let alert = this.alertCtrl.create({
      title: 'Account does not have sufficient funds.',
      subTitle: 'Please enter a smaller amount.',
      buttons: ["OK" ]
    });
    alert.present();
    } else {
      this.performWithdraw();
    }
  });
}

  performWithdraw() {
    let loader = this.loadCtrl.create({ content: 'Processing' });
    loader.present();

    let amount = this.myForm.get("amount").value;

    this.atmService.withDraw(this.account, amount).then(
      succ => {
        loader.dismiss();
        let alerta = this.alertCtrl.create({
          title: 'Confirmation',
          message: 'Withdrawal Successful! ' +
                  'New Balance is: ' + succ.currentBalance,
          buttons: [{
            text:'OK',
          handler: ()=> {
            this.navCtrl.pop();
          }
          }]
        });
        alerta.present();
        //this.navCtrl.push(LoginPage);
      }).catch (err => {
        let alerta = this.alertCtrl.create({
          title: 'Invalid Operation',
          message: 'Withdrawal was not completed!',
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
    console.log('ionViewDidLoad WithdrawPage');
  }

}
