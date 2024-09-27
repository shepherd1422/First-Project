import { Injectable } from "@angular/core";

@Injectable  ({providedIn: 'root'})
export class UsersService {
    private readonly api = inject(ApiService);
    private readonly usersSubject$: BehaviorSubject <UsersEntity[]> = new BehaviorSubject([])

    private users: UsersEntity[] = [];
    private oldUsers: UsersEntity[] = [];
    

    public readonly users$ = this.usersSubject$.asObservable();
    public readonly oldUsers$ = this.users$.pipe(
        map(
            (users: UsersEntity[]) => users.filter(
                user => user.age && user.age >= 50
            )
        )
    )

    constructor() {
        this.loadUsers();
    }

    private loadUsers(): void {
        this.api.get<UsersEntity[]>('/users').subscribe(
            (response: UsersEntity[]) => this.usersSubject$.next(response)
        )
    }

    private editUser(editedUser: UsersEntity): void {
        this.api.post<UsersEntity, UsersEntity>('/users', editedUser).subscribe(
            (response: UsersEntity) => {
                this.users = this.users.map(
                    user => user.id ===response.id ? response : user
                )

                this.oldUsers = this.users.filter(
                    user => user.age && user.age >= 50
                )




                this.usersSubject$.next(
                    this.usersSubject$.value.map(
                        user => user.id ===response.id ? response : user
                    }
                )
            )
        )
    }

    private addUser(userToAdd: UsersEntity): void {
        this.api.post<UsersEntity, UsersEntity>('/users', userToAdd).subscribe(
            (response: UsersEntity) => this.usersSubject$.next(
                [...this.usersSubject$.value, response]
            )
        )
    }

    private deleteUser(userToDelete: UsersEntity): void {
        this.api.post<UsersEntity, UsersEntity>(`/users/${userToDelete.id}`).subscribe(
            (response: UsersEntity) => this.usersSubject$.next(
                this.usersSubject$.value.filter(
                    user => user.id !== response.id
                )
            )
        )
    }

}