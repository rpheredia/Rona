import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthService } from './services/guard-auth.service';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { MainopComponent } from './components/mainop/mainop.component';

const myRoutes : Routes = [ 

    { path : 'auth' , component : AuthenticateComponent },
    { path : '' , redirectTo : '/auth', pathMatch : 'full' },
    { path : 'mainoperation' , component : MainopComponent, canActivate :[GuardAuthService],
             children: [ 
    { path : 'transactionlist' , component : TransactionListComponent},        
    { path : 'operations' , component : AtmoperationsComponent }  
                    ]
    }  
     
];

@NgModule({
    imports: [RouterModule.forRoot(myRoutes),RouterModule.forChild(myRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
