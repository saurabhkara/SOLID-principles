
class UserController {
    userService: UserService

    constructor(userService: UserService) {
        this.userService = userService
    }
    save() {
        this.userService.save()
    }
}

class UserService {
    userRepo: UserRepo
    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    save() {
        this.userRepo.save()
    }
}

class UserRepo {
    save() {
        console.log('User Repository')
    }
}

const userRepoObj = new UserRepo();
const userServiceObj = new UserService(userRepoObj);
const userController = new UserController(userServiceObj);

// userController.save()

// Above code voilates the Dependency inversion principal because Controller(high level code) is dependent on
// Service and service is dependent on Repo(low level code)

interface IRepo {
    save(): void;
}

interface IService {
    save(): void;
}

class UserController2 implements IService {
    service: IService
    constructor(service: IService) {
        this.service = service;
    }

    save() {
        this.service.save()
    }
}


class UserService2 implements IRepo {

    repository: IRepo
    constructor(repository: IRepo) {
        this.repository = repository
    }

    save() {
        this.repository.save()
    }
}

class UserPostgressRepo implements IRepo {

    save() {
        console.log('User date saved in Postgress database')
    }

}

class UserMongoRepo implements IRepo {

    save() {
        console.log("User data saved in mongoDb")
    }
}

const mongo = new UserMongoRepo();
const serv = new UserService2(mongo);
const control = new UserController2(serv);
control.save()