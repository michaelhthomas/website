declare namespace NodeJS {
  export interface Process extends NodeJS.Process {
    isClient: boolean;
    isServer: boolean;
  }
}
