import {Component} from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {

  projects = [
    {title: 'Digital Document Signing Process', image: 'assets/images/projects/signatureProcess/overview.png', projectNameRoute: "signing-process"},
    {title: 'Insurance Processes', image: 'assets/images/projects/insurance/overview.png', projectNameRoute: "insurance-processes"},
    {title: 'One Directory Sync', image: 'assets/images/projects/ods/overview.png', projectNameRoute: "one-directory-sync"},
    {title: 'Notification Service', image: 'assets/images/projects/notificationService/overview.png', projectNameRoute: "notification-service"},
    {title: 'Broker Cloud', image: 'assets/images/projects/brokerCloud/overview.png', projectNameRoute: "broker-cloud"},
    {title: 'Directory Sync', image: 'assets/images/projects/directorySync/directory.png', projectNameRoute: "directory-sync"},
    {title: 'Migration Tool', image: 'assets/images/projects/migrationTool/overview.png', projectNameRoute: "migration-tool"},
    {title: 'SecureVote', image: 'assets/images/projects/votingSystem/blockchain-voting.png', projectNameRoute: "voting-system"}
  ];
}
