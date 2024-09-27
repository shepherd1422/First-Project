import { combineLatest, map, withLatestFrom } from "rxjs"
 
public readonly isMobile2$ = combineLatest([this.handset$, this.handsetLandscape$]).pipe(
    map(([handset, handsetLandscape]) => !!(handset.matches && !handsetLandscape.matches))
)

public readonly isMobile$ = this.handset$.pipe(
    withLatestFrom(this.handsetLandscape$),
    map(([handset, handsetLandscape])  => !!(handset.matches && !handsetLandscape.matches))
)

opened!: boolean;