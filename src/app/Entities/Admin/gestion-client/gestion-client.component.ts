import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {
 prod!:FormGroup
  public clients :any[]=[]
  constructor(private clientSer:ClientService,private formBuilder:FormBuilder) {}

  ngOnInit(): void {
   this.loadListClient();
   this.prod = this.formBuilder.group(
    { code:'', nom:'',prenom:'',poste:'' } )
  }
    loadListClient():void{
      this.clientSer.getAllClients().subscribe(data=>{
        this.clients.push(...data);
      })
}
deleteResource(code:number){
  this.clientSer.deleteClient(code)
  .subscribe();
  }
  
}