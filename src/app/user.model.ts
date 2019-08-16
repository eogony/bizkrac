export class User {
    public firstname: string;
    public lastname: string;
    public address: any[] = []; // <- Initializing
    public profile: Array<any>;
    public email: any;
    public avator: any;
    public username: any;
    public phone: any;

  constructor(firstname, lastname, address, profile, email, avator, username, phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address.push(address);
    this.profile.push(profile);
    this.email = email;
    this.avator = avator;
    this.username = username;
    this.phone = phone;
  }
}
