console.log('Esercizio USER')
 class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    comparation = function(obj){
        if (this.age > obj.age){
            return obj.firstName + ' è più giovane di ' + this.firstName;
        }else if (this.age < obj.age) {
            return obj.firstName + ' è più vecchio di ' + this.firstName;
        } else {
            return obj.firstName + ' è vecchio come ' + this.firstName;
        }
    }
 }

 const user1 = new User ('Mario', 'Rossi', 20, 'Milano');
 const user2 = new User ('Davide', 'Bianchi', 25, 'Napoli');
 const user3 = new User ('Aldo', 'Verdi', 30, 'Bari');
 const user4 = new User ('Giovanni', 'Scem', 20, 'Palermo');
 const user5 = new User ('Dante', 'Ferro', 25, 'Firenze');
 const user6 = new User ('Virgilio', 'Impero', 30, 'Roma');

 console.log(user1.comparation(user6));

 

