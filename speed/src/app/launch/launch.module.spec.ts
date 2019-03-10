import { LaunchModule } from './launch.module';

describe('LaunchModule', () => {
  let launchModule: LaunchModule;

  beforeEach(() => {
    launchModule = new LaunchModule();
  });

  it('should create an instance', () => {
    expect(launchModule).toBeTruthy();
  });
});
