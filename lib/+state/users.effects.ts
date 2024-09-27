import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";

export const loadUsers = createEffect(
    () => {
        const actions$ = inject(Actions);
        const apiService = inject(ApiService);
        const store = inject(Store);
        return actions$.pipe(
            ofType(UserActions.loadUser),
            withLatestFrom(store.select(selectRouteParams)),
            switchMap(
                ([, params]) => {
                    if (params['id']) {
                        return apiService.get<UsersDTO>(`/users/${params['id']}`)
                        .pipe(
                            map((user)) => usersDTOAdapter.DTOtoEntity(user),
                            map((UserEntity)) => UsersActions.loadUserSuccess({userData: UserEntity}),
                            catchError((error) => {
                                console.error('ERROR', error);
                                return of(UsersActions.loadUserFailed({error}))
                            })
                        )
                    }
                    return of(UsersActions.updateUserStatus({status: 'loading'}))
                }
            )
        )
    }, {functional: true}
)