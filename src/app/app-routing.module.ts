import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {VotingSystemComponent} from "./portofolio/voting-system/voting-system.component";
import {MigrationToolComponent} from "./portofolio/migration-tool/migration-tool.component";
import {DirectorySyncComponent} from "./portofolio/directory-sync/directory-sync.component";
import {OneDirectorySyncComponent} from "./portofolio/one-directory-sync/one-directory-sync.component";
import {NotificationServiceComponent} from "./portofolio/notification-service/notification-service.component";
import {InsuranceProcessesComponent} from "./portofolio/insurance-processes/insurance-processes.component";
import {BrokerCloudComponent} from "./portofolio/broker-cloud/broker-cloud.component";

const routes: Routes = [
  {path: '', component: AboutmeComponent, pathMatch: 'full'},
  {path: 'projects/voting-system', component: VotingSystemComponent},
  {path: 'projects/migration-tool', component: MigrationToolComponent},
  {path: 'projects/directory-sync', component: DirectorySyncComponent},
  {path: 'projects/one-directory-sync', component: OneDirectorySyncComponent},
  {path: 'projects/notification-service', component: NotificationServiceComponent},
  {path: 'projects/insurance-processes', component: InsuranceProcessesComponent},
  {path: 'projects/broker-cloud', component: BrokerCloudComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
