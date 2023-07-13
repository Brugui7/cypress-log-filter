declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Cypress {
      env(): PluginEnvOptions;
      env<T extends keyof PluginEnvOptions>(key: T): PluginEnvOptions[T];
      env<T extends keyof PluginEnvOptions>(key: T, value: PluginEnvOptions[T]): void;
      env(object: PluginEnvOptions): void;
    }
    interface TestConfigOverrides {
      env?: PluginEnvOptions
    }
  }
}

export interface PluginEnvOptions extends Cypress.ObjectLike {
  logLevel?: string
}
