export class ServerService {

  static $inject = ['$http', 'API_BASE_URL'];

  constructor(
    private $http: ng.IHttpService, 
    private API_BASE_URL: string) { }

  get(path) {
    return this.$http.get(this.API_BASE_URL + path)
      .then(response => response.data);
  }
  
  post(path, data) {
    return this.$http.post(this.API_BASE_URL + path, data)
      .then(response => response.data);
  }
}
