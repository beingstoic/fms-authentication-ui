import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouterAuthenticationService {

  constructor(private tokenStorage: TokenStorageService) { }
    public isAdminAuthenticated(): boolean {
      
      if(this.tokenStorage.getUser().roles[0] === 'ADMIN'){
        return true;
      }
      else{
        return false;
      }
  }
 
  public isCoordinatorAuthenticated(): boolean {
    
      if(this.tokenStorage.getUser().roles[0] === 'COORDINATOR'){
        return true;
      }
      else{
        return false;
      }
    
  }
  public isParticipantAuthenticated(): boolean {
      
      if(this.tokenStorage.getUser().roles[0] === 'PARTICIPANT'){
        return true;
      }
      else{
        return false;
      }
    
  }
}

