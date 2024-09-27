class AppState {
  constructor(
    public isNotDesktop: boolean,
    public isMobile: boolean,
    public isAppInConstruction?: boolean
  ) {}
}

export default AppState;
