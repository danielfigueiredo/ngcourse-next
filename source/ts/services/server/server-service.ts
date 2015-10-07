import {Inject} from '../../utils/di';

export class ServerService {

  constructor(
    @Inject('$http') 
      private $http: ng.IHttpService,
    @Inject('API_BASE_URL') 
      private API_BASE_URL: string) { }

  public get(path) {
    return this.$http.get(this.API_BASE_URL + path)
      .then(response => response.data);
  }
}
