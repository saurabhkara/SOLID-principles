class BaseUser {
    getRole() {
        console.log('Base User')
    }
}

class User extends BaseUser {

    getAccessLevel() {
        console.log('User access level')
    }

    getRole() {
        console.log('User');
    }
}


class Admin extends User {
    getAccessLevel(): void {
        console.log('Admin access level');
    }

    getRole(): void {
        console.log('Admin')
    }
}

class Manager extends User {
    getAccessLevel(): void {
        console.log('Manager access level');
    }

    getRole(): void {
        console.log('Manager')
    }
}


class Customer extends BaseUser {


    getRole(): void {
        console.log('Customer')
    }
}

function getUserAccessLevel(user: BaseUser) {
    user.getRole();
}

getUserAccessLevel(new Customer())