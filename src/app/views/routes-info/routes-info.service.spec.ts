import { defer, of } from 'rxjs';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

import { ApiRoutesService } from '@api/api-routes';

import { RoutesInfoService } from './routes-info.service';

describe('RoutesInfoService', () => {
  let routesInfoService: RoutesInfoService;
  let apiRoutesSpy: jasmine.SpyObj<ApiRoutesService>;

  beforeEach(() => {
    apiRoutesSpy = jasmine.createSpyObj<ApiRoutesService>(['getRoutes']);

    apiRoutesSpy.getRoutes.and.returnValue(of({ count: 0, data: [] }));

    routesInfoService = new RoutesInfoService(apiRoutesSpy);
  });

  it('Should make request for route if page was not loaded before', async () => {
    const routes$ = routesInfoService.getPage(0);

    await subscribeSpyTo(routes$).onComplete();

    expect(apiRoutesSpy.getRoutes).toHaveBeenCalledTimes(1);
  });

  it('Should not make request if page was already loaded', async () => {
    const routes1$ = routesInfoService.getPage(0);

    await subscribeSpyTo(routes1$).onComplete();

    const routes2$ = routesInfoService.getPage(0);

    await subscribeSpyTo(routes2$).onComplete();

    expect(apiRoutesSpy.getRoutes).toHaveBeenCalledTimes(1);
  });

  it('Should make only one request if getPage is called several times in row with same page index', async () => {
    let amountOfSubscriptions = 0;

    apiRoutesSpy.getRoutes.and.returnValue(
      defer(() => {
        amountOfSubscriptions++;

        return of({ count: 0, data: [] });
      }),
    );

    const route1$ = routesInfoService.getPage(0);
    const route2$ = routesInfoService.getPage(0);

    await subscribeSpyTo(route1$).onComplete();
    await subscribeSpyTo(route2$).onComplete();

    expect(amountOfSubscriptions).toEqual(1);
  });
});
