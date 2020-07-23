class User {

    constructor(name, gender, brith, country, email, password, photo, admin) {
        this._name = name;
        this._gender = gender;
        this._brith = brith;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
    }

    get register() {
        return this._register;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get brith() {
        return this._brith;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
    
    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }
    
    get admin() {
        return this._admin;
    }
    
}