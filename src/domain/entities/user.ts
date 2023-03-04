type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  access_level: string;
};

export class User implements UserProps {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public access_level: string;
  public createdAt: Date;

  constructor({ email, id, name, password, access_level }: UserProps) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.access_level = access_level;
    this.createdAt = new Date();
  }

  static create(props: UserProps) {
    const user = new User(props);

    return user;
  }
}
