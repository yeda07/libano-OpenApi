import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Abonos } from '../models/Abonos';
import { Colores } from '../models/Colores';
import { Compras } from '../models/Compras';
import { ComprasTelasColores } from '../models/ComprasTelasColores';
import { ComprasTiposEspumillas } from '../models/ComprasTiposEspumillas';
import { ComprasTiposMateriales } from '../models/ComprasTiposMateriales';
import { Creditos } from '../models/Creditos';
import { DetallesNoTapizados } from '../models/DetallesNoTapizados';
import { DetallesTapizados } from '../models/DetallesTapizados';
import { ExistenciasEspumillas } from '../models/ExistenciasEspumillas';
import { ExistenciasMateriales } from '../models/ExistenciasMateriales';
import { ExistenciasProductos } from '../models/ExistenciasProductos';
import { ExistenciasTelasColores } from '../models/ExistenciasTelasColores';
import { Pagos } from '../models/Pagos';
import { Productos } from '../models/Productos';
import { TelasColores } from '../models/TelasColores';
import { TiposEspumillas } from '../models/TiposEspumillas';
import { TiposMateriales } from '../models/TiposMateriales';
import { TiposProductos } from '../models/TiposProductos';
import { TiposTelas } from '../models/TiposTelas';
import { TokenObtainPair } from '../models/TokenObtainPair';
import { User } from '../models/User';
import { Ventas } from '../models/Ventas';
import { VentasProductos } from '../models/VentasProductos';

import { ApiabonosApiRequestFactory, ApiabonosApiResponseProcessor} from "../apis/ApiabonosApi";
export class ObservableApiabonosApi {
    private requestFactory: ApiabonosApiRequestFactory;
    private responseProcessor: ApiabonosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiabonosApiRequestFactory,
        responseProcessor?: ApiabonosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiabonosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiabonosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiabonosCreateWithHttpInfo(data: Abonos, _options?: Configuration): Observable<HttpInfo<Abonos>> {
        const requestContextPromise = this.requestFactory.apiabonosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiabonosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiabonosCreate(data: Abonos, _options?: Configuration): Observable<Abonos> {
        return this.apiabonosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Abonos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiabonosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiabonosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiabonosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiabonosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Abonos>>> {
        const requestContextPromise = this.requestFactory.apiabonosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiabonosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiabonosList(_options?: Configuration): Observable<Array<Abonos>> {
        return this.apiabonosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Abonos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosPartialUpdateWithHttpInfo(id: number, data: Abonos, _options?: Configuration): Observable<HttpInfo<Abonos>> {
        const requestContextPromise = this.requestFactory.apiabonosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiabonosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosPartialUpdate(id: number, data: Abonos, _options?: Configuration): Observable<Abonos> {
        return this.apiabonosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Abonos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Abonos>> {
        const requestContextPromise = this.requestFactory.apiabonosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiabonosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosRead(id: number, _options?: Configuration): Observable<Abonos> {
        return this.apiabonosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Abonos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosUpdateWithHttpInfo(id: number, data: Abonos, _options?: Configuration): Observable<HttpInfo<Abonos>> {
        const requestContextPromise = this.requestFactory.apiabonosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiabonosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosUpdate(id: number, data: Abonos, _options?: Configuration): Observable<Abonos> {
        return this.apiabonosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Abonos>) => apiResponse.data));
    }

}

import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";
export class ObservableApiauthApi {
    private requestFactory: ApiauthApiRequestFactory;
    private responseProcessor: ApiauthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiauthApiRequestFactory,
        responseProcessor?: ApiauthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiauthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiauthApiResponseProcessor();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Observable<HttpInfo<TokenObtainPair>> {
        const requestContextPromise = this.requestFactory.apiauthLoginCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiauthLoginCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Observable<TokenObtainPair> {
        return this.apiauthLoginCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TokenObtainPair>) => apiResponse.data));
    }

    /**
     */
    public apiauthMeListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiauthMeList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiauthMeListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiauthMeList(_options?: Configuration): Observable<void> {
        return this.apiauthMeListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ApicoloresApiRequestFactory, ApicoloresApiResponseProcessor} from "../apis/ApicoloresApi";
export class ObservableApicoloresApi {
    private requestFactory: ApicoloresApiRequestFactory;
    private responseProcessor: ApicoloresApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicoloresApiRequestFactory,
        responseProcessor?: ApicoloresApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicoloresApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicoloresApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicoloresCreateWithHttpInfo(data: Colores, _options?: Configuration): Observable<HttpInfo<Colores>> {
        const requestContextPromise = this.requestFactory.apicoloresCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicoloresCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicoloresCreate(data: Colores, _options?: Configuration): Observable<Colores> {
        return this.apicoloresCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Colores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicoloresDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicoloresDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicoloresDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicoloresListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Colores>>> {
        const requestContextPromise = this.requestFactory.apicoloresList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicoloresListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicoloresList(_options?: Configuration): Observable<Array<Colores>> {
        return this.apicoloresListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Colores>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresPartialUpdateWithHttpInfo(id: number, data: Colores, _options?: Configuration): Observable<HttpInfo<Colores>> {
        const requestContextPromise = this.requestFactory.apicoloresPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicoloresPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresPartialUpdate(id: number, data: Colores, _options?: Configuration): Observable<Colores> {
        return this.apicoloresPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Colores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Colores>> {
        const requestContextPromise = this.requestFactory.apicoloresRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicoloresReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresRead(id: number, _options?: Configuration): Observable<Colores> {
        return this.apicoloresReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Colores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresUpdateWithHttpInfo(id: number, data: Colores, _options?: Configuration): Observable<HttpInfo<Colores>> {
        const requestContextPromise = this.requestFactory.apicoloresUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicoloresUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresUpdate(id: number, data: Colores, _options?: Configuration): Observable<Colores> {
        return this.apicoloresUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Colores>) => apiResponse.data));
    }

}

import { ApicomprasApiRequestFactory, ApicomprasApiResponseProcessor} from "../apis/ApicomprasApi";
export class ObservableApicomprasApi {
    private requestFactory: ApicomprasApiRequestFactory;
    private responseProcessor: ApicomprasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasApiRequestFactory,
        responseProcessor?: ApicomprasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicomprasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicomprasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicomprasCreateWithHttpInfo(data: Compras, _options?: Configuration): Observable<HttpInfo<Compras>> {
        const requestContextPromise = this.requestFactory.apicomprasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicomprasCreate(data: Compras, _options?: Configuration): Observable<Compras> {
        return this.apicomprasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Compras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicomprasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicomprasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicomprasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Compras>>> {
        const requestContextPromise = this.requestFactory.apicomprasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicomprasList(_options?: Configuration): Observable<Array<Compras>> {
        return this.apicomprasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Compras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasPartialUpdateWithHttpInfo(id: number, data: Compras, _options?: Configuration): Observable<HttpInfo<Compras>> {
        const requestContextPromise = this.requestFactory.apicomprasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasPartialUpdate(id: number, data: Compras, _options?: Configuration): Observable<Compras> {
        return this.apicomprasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Compras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Compras>> {
        const requestContextPromise = this.requestFactory.apicomprasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasRead(id: number, _options?: Configuration): Observable<Compras> {
        return this.apicomprasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Compras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasUpdateWithHttpInfo(id: number, data: Compras, _options?: Configuration): Observable<HttpInfo<Compras>> {
        const requestContextPromise = this.requestFactory.apicomprasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasUpdate(id: number, data: Compras, _options?: Configuration): Observable<Compras> {
        return this.apicomprasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Compras>) => apiResponse.data));
    }

}

import { ApicomprasTelasColoresApiRequestFactory, ApicomprasTelasColoresApiResponseProcessor} from "../apis/ApicomprasTelasColoresApi";
export class ObservableApicomprasTelasColoresApi {
    private requestFactory: ApicomprasTelasColoresApiRequestFactory;
    private responseProcessor: ApicomprasTelasColoresApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasTelasColoresApiRequestFactory,
        responseProcessor?: ApicomprasTelasColoresApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicomprasTelasColoresApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicomprasTelasColoresApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicomprasTelasColoresCreateWithHttpInfo(data: ComprasTelasColores, _options?: Configuration): Observable<HttpInfo<ComprasTelasColores>> {
        const requestContextPromise = this.requestFactory.apicomprasTelasColoresCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTelasColoresCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicomprasTelasColoresCreate(data: ComprasTelasColores, _options?: Configuration): Observable<ComprasTelasColores> {
        return this.apicomprasTelasColoresCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ComprasTelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicomprasTelasColoresDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTelasColoresDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicomprasTelasColoresDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicomprasTelasColoresListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ComprasTelasColores>>> {
        const requestContextPromise = this.requestFactory.apicomprasTelasColoresList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTelasColoresListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicomprasTelasColoresList(_options?: Configuration): Observable<Array<ComprasTelasColores>> {
        return this.apicomprasTelasColoresListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ComprasTelasColores>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresPartialUpdateWithHttpInfo(id: number, data: ComprasTelasColores, _options?: Configuration): Observable<HttpInfo<ComprasTelasColores>> {
        const requestContextPromise = this.requestFactory.apicomprasTelasColoresPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTelasColoresPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresPartialUpdate(id: number, data: ComprasTelasColores, _options?: Configuration): Observable<ComprasTelasColores> {
        return this.apicomprasTelasColoresPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ComprasTelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ComprasTelasColores>> {
        const requestContextPromise = this.requestFactory.apicomprasTelasColoresRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTelasColoresReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresRead(id: number, _options?: Configuration): Observable<ComprasTelasColores> {
        return this.apicomprasTelasColoresReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ComprasTelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresUpdateWithHttpInfo(id: number, data: ComprasTelasColores, _options?: Configuration): Observable<HttpInfo<ComprasTelasColores>> {
        const requestContextPromise = this.requestFactory.apicomprasTelasColoresUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTelasColoresUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresUpdate(id: number, data: ComprasTelasColores, _options?: Configuration): Observable<ComprasTelasColores> {
        return this.apicomprasTelasColoresUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ComprasTelasColores>) => apiResponse.data));
    }

}

import { ApicomprasTiposEspumillasApiRequestFactory, ApicomprasTiposEspumillasApiResponseProcessor} from "../apis/ApicomprasTiposEspumillasApi";
export class ObservableApicomprasTiposEspumillasApi {
    private requestFactory: ApicomprasTiposEspumillasApiRequestFactory;
    private responseProcessor: ApicomprasTiposEspumillasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasTiposEspumillasApiRequestFactory,
        responseProcessor?: ApicomprasTiposEspumillasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicomprasTiposEspumillasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicomprasTiposEspumillasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicomprasTiposEspumillasCreateWithHttpInfo(data: ComprasTiposEspumillas, _options?: Configuration): Observable<HttpInfo<ComprasTiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposEspumillasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposEspumillasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicomprasTiposEspumillasCreate(data: ComprasTiposEspumillas, _options?: Configuration): Observable<ComprasTiposEspumillas> {
        return this.apicomprasTiposEspumillasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposEspumillasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposEspumillasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicomprasTiposEspumillasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicomprasTiposEspumillasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ComprasTiposEspumillas>>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposEspumillasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposEspumillasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicomprasTiposEspumillasList(_options?: Configuration): Observable<Array<ComprasTiposEspumillas>> {
        return this.apicomprasTiposEspumillasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ComprasTiposEspumillas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasPartialUpdateWithHttpInfo(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Observable<HttpInfo<ComprasTiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposEspumillasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposEspumillasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasPartialUpdate(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Observable<ComprasTiposEspumillas> {
        return this.apicomprasTiposEspumillasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ComprasTiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposEspumillasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposEspumillasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasRead(id: number, _options?: Configuration): Observable<ComprasTiposEspumillas> {
        return this.apicomprasTiposEspumillasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasUpdateWithHttpInfo(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Observable<HttpInfo<ComprasTiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposEspumillasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposEspumillasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasUpdate(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Observable<ComprasTiposEspumillas> {
        return this.apicomprasTiposEspumillasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposEspumillas>) => apiResponse.data));
    }

}

import { ApicomprasTiposMaterialesApiRequestFactory, ApicomprasTiposMaterialesApiResponseProcessor} from "../apis/ApicomprasTiposMaterialesApi";
export class ObservableApicomprasTiposMaterialesApi {
    private requestFactory: ApicomprasTiposMaterialesApiRequestFactory;
    private responseProcessor: ApicomprasTiposMaterialesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasTiposMaterialesApiRequestFactory,
        responseProcessor?: ApicomprasTiposMaterialesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicomprasTiposMaterialesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicomprasTiposMaterialesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicomprasTiposMaterialesCreateWithHttpInfo(data: ComprasTiposMateriales, _options?: Configuration): Observable<HttpInfo<ComprasTiposMateriales>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposMaterialesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposMaterialesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicomprasTiposMaterialesCreate(data: ComprasTiposMateriales, _options?: Configuration): Observable<ComprasTiposMateriales> {
        return this.apicomprasTiposMaterialesCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposMaterialesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposMaterialesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicomprasTiposMaterialesDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicomprasTiposMaterialesListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ComprasTiposMateriales>>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposMaterialesList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposMaterialesListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicomprasTiposMaterialesList(_options?: Configuration): Observable<Array<ComprasTiposMateriales>> {
        return this.apicomprasTiposMaterialesListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ComprasTiposMateriales>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesPartialUpdateWithHttpInfo(id: number, data: ComprasTiposMateriales, _options?: Configuration): Observable<HttpInfo<ComprasTiposMateriales>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposMaterialesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposMaterialesPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesPartialUpdate(id: number, data: ComprasTiposMateriales, _options?: Configuration): Observable<ComprasTiposMateriales> {
        return this.apicomprasTiposMaterialesPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ComprasTiposMateriales>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposMaterialesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposMaterialesReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesRead(id: number, _options?: Configuration): Observable<ComprasTiposMateriales> {
        return this.apicomprasTiposMaterialesReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesUpdateWithHttpInfo(id: number, data: ComprasTiposMateriales, _options?: Configuration): Observable<HttpInfo<ComprasTiposMateriales>> {
        const requestContextPromise = this.requestFactory.apicomprasTiposMaterialesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicomprasTiposMaterialesUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesUpdate(id: number, data: ComprasTiposMateriales, _options?: Configuration): Observable<ComprasTiposMateriales> {
        return this.apicomprasTiposMaterialesUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ComprasTiposMateriales>) => apiResponse.data));
    }

}

import { ApicreditosApiRequestFactory, ApicreditosApiResponseProcessor} from "../apis/ApicreditosApi";
export class ObservableApicreditosApi {
    private requestFactory: ApicreditosApiRequestFactory;
    private responseProcessor: ApicreditosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicreditosApiRequestFactory,
        responseProcessor?: ApicreditosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApicreditosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApicreditosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apicreditosCreateWithHttpInfo(data: Creditos, _options?: Configuration): Observable<HttpInfo<Creditos>> {
        const requestContextPromise = this.requestFactory.apicreditosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicreditosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apicreditosCreate(data: Creditos, _options?: Configuration): Observable<Creditos> {
        return this.apicreditosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Creditos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apicreditosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicreditosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apicreditosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apicreditosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Creditos>>> {
        const requestContextPromise = this.requestFactory.apicreditosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicreditosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apicreditosList(_options?: Configuration): Observable<Array<Creditos>> {
        return this.apicreditosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Creditos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosPartialUpdateWithHttpInfo(id: number, data: Creditos, _options?: Configuration): Observable<HttpInfo<Creditos>> {
        const requestContextPromise = this.requestFactory.apicreditosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicreditosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosPartialUpdate(id: number, data: Creditos, _options?: Configuration): Observable<Creditos> {
        return this.apicreditosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Creditos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Creditos>> {
        const requestContextPromise = this.requestFactory.apicreditosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicreditosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosRead(id: number, _options?: Configuration): Observable<Creditos> {
        return this.apicreditosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Creditos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosUpdateWithHttpInfo(id: number, data: Creditos, _options?: Configuration): Observable<HttpInfo<Creditos>> {
        const requestContextPromise = this.requestFactory.apicreditosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apicreditosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosUpdate(id: number, data: Creditos, _options?: Configuration): Observable<Creditos> {
        return this.apicreditosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Creditos>) => apiResponse.data));
    }

}

import { ApidetallesNoTapizadosApiRequestFactory, ApidetallesNoTapizadosApiResponseProcessor} from "../apis/ApidetallesNoTapizadosApi";
export class ObservableApidetallesNoTapizadosApi {
    private requestFactory: ApidetallesNoTapizadosApiRequestFactory;
    private responseProcessor: ApidetallesNoTapizadosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetallesNoTapizadosApiRequestFactory,
        responseProcessor?: ApidetallesNoTapizadosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApidetallesNoTapizadosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApidetallesNoTapizadosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apidetallesNoTapizadosCreateWithHttpInfo(data: DetallesNoTapizados, _options?: Configuration): Observable<HttpInfo<DetallesNoTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesNoTapizadosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesNoTapizadosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apidetallesNoTapizadosCreate(data: DetallesNoTapizados, _options?: Configuration): Observable<DetallesNoTapizados> {
        return this.apidetallesNoTapizadosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<DetallesNoTapizados>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apidetallesNoTapizadosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesNoTapizadosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apidetallesNoTapizadosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apidetallesNoTapizadosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetallesNoTapizados>>> {
        const requestContextPromise = this.requestFactory.apidetallesNoTapizadosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesNoTapizadosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apidetallesNoTapizadosList(_options?: Configuration): Observable<Array<DetallesNoTapizados>> {
        return this.apidetallesNoTapizadosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DetallesNoTapizados>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosPartialUpdateWithHttpInfo(id: number, data: DetallesNoTapizados, _options?: Configuration): Observable<HttpInfo<DetallesNoTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesNoTapizadosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesNoTapizadosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosPartialUpdate(id: number, data: DetallesNoTapizados, _options?: Configuration): Observable<DetallesNoTapizados> {
        return this.apidetallesNoTapizadosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetallesNoTapizados>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetallesNoTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesNoTapizadosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesNoTapizadosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosRead(id: number, _options?: Configuration): Observable<DetallesNoTapizados> {
        return this.apidetallesNoTapizadosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetallesNoTapizados>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosUpdateWithHttpInfo(id: number, data: DetallesNoTapizados, _options?: Configuration): Observable<HttpInfo<DetallesNoTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesNoTapizadosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesNoTapizadosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosUpdate(id: number, data: DetallesNoTapizados, _options?: Configuration): Observable<DetallesNoTapizados> {
        return this.apidetallesNoTapizadosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetallesNoTapizados>) => apiResponse.data));
    }

}

import { ApidetallesTapizadosApiRequestFactory, ApidetallesTapizadosApiResponseProcessor} from "../apis/ApidetallesTapizadosApi";
export class ObservableApidetallesTapizadosApi {
    private requestFactory: ApidetallesTapizadosApiRequestFactory;
    private responseProcessor: ApidetallesTapizadosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetallesTapizadosApiRequestFactory,
        responseProcessor?: ApidetallesTapizadosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApidetallesTapizadosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApidetallesTapizadosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apidetallesTapizadosCreateWithHttpInfo(data: DetallesTapizados, _options?: Configuration): Observable<HttpInfo<DetallesTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesTapizadosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesTapizadosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apidetallesTapizadosCreate(data: DetallesTapizados, _options?: Configuration): Observable<DetallesTapizados> {
        return this.apidetallesTapizadosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<DetallesTapizados>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apidetallesTapizadosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesTapizadosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apidetallesTapizadosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apidetallesTapizadosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetallesTapizados>>> {
        const requestContextPromise = this.requestFactory.apidetallesTapizadosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesTapizadosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apidetallesTapizadosList(_options?: Configuration): Observable<Array<DetallesTapizados>> {
        return this.apidetallesTapizadosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DetallesTapizados>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosPartialUpdateWithHttpInfo(id: number, data: DetallesTapizados, _options?: Configuration): Observable<HttpInfo<DetallesTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesTapizadosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesTapizadosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosPartialUpdate(id: number, data: DetallesTapizados, _options?: Configuration): Observable<DetallesTapizados> {
        return this.apidetallesTapizadosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetallesTapizados>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetallesTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesTapizadosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesTapizadosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosRead(id: number, _options?: Configuration): Observable<DetallesTapizados> {
        return this.apidetallesTapizadosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetallesTapizados>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosUpdateWithHttpInfo(id: number, data: DetallesTapizados, _options?: Configuration): Observable<HttpInfo<DetallesTapizados>> {
        const requestContextPromise = this.requestFactory.apidetallesTapizadosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apidetallesTapizadosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosUpdate(id: number, data: DetallesTapizados, _options?: Configuration): Observable<DetallesTapizados> {
        return this.apidetallesTapizadosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetallesTapizados>) => apiResponse.data));
    }

}

import { ApiexistenciasEspumillasApiRequestFactory, ApiexistenciasEspumillasApiResponseProcessor} from "../apis/ApiexistenciasEspumillasApi";
export class ObservableApiexistenciasEspumillasApi {
    private requestFactory: ApiexistenciasEspumillasApiRequestFactory;
    private responseProcessor: ApiexistenciasEspumillasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasEspumillasApiRequestFactory,
        responseProcessor?: ApiexistenciasEspumillasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiexistenciasEspumillasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiexistenciasEspumillasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiexistenciasEspumillasCreateWithHttpInfo(data: ExistenciasEspumillas, _options?: Configuration): Observable<HttpInfo<ExistenciasEspumillas>> {
        const requestContextPromise = this.requestFactory.apiexistenciasEspumillasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasEspumillasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiexistenciasEspumillasCreate(data: ExistenciasEspumillas, _options?: Configuration): Observable<ExistenciasEspumillas> {
        return this.apiexistenciasEspumillasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiexistenciasEspumillasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasEspumillasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiexistenciasEspumillasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiexistenciasEspumillasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ExistenciasEspumillas>>> {
        const requestContextPromise = this.requestFactory.apiexistenciasEspumillasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasEspumillasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiexistenciasEspumillasList(_options?: Configuration): Observable<Array<ExistenciasEspumillas>> {
        return this.apiexistenciasEspumillasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ExistenciasEspumillas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasPartialUpdateWithHttpInfo(id: number, data: ExistenciasEspumillas, _options?: Configuration): Observable<HttpInfo<ExistenciasEspumillas>> {
        const requestContextPromise = this.requestFactory.apiexistenciasEspumillasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasEspumillasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasPartialUpdate(id: number, data: ExistenciasEspumillas, _options?: Configuration): Observable<ExistenciasEspumillas> {
        return this.apiexistenciasEspumillasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ExistenciasEspumillas>> {
        const requestContextPromise = this.requestFactory.apiexistenciasEspumillasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasEspumillasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasRead(id: number, _options?: Configuration): Observable<ExistenciasEspumillas> {
        return this.apiexistenciasEspumillasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ExistenciasEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasUpdateWithHttpInfo(id: number, data: ExistenciasEspumillas, _options?: Configuration): Observable<HttpInfo<ExistenciasEspumillas>> {
        const requestContextPromise = this.requestFactory.apiexistenciasEspumillasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasEspumillasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasUpdate(id: number, data: ExistenciasEspumillas, _options?: Configuration): Observable<ExistenciasEspumillas> {
        return this.apiexistenciasEspumillasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasEspumillas>) => apiResponse.data));
    }

}

import { ApiexistenciasMaterialesApiRequestFactory, ApiexistenciasMaterialesApiResponseProcessor} from "../apis/ApiexistenciasMaterialesApi";
export class ObservableApiexistenciasMaterialesApi {
    private requestFactory: ApiexistenciasMaterialesApiRequestFactory;
    private responseProcessor: ApiexistenciasMaterialesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasMaterialesApiRequestFactory,
        responseProcessor?: ApiexistenciasMaterialesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiexistenciasMaterialesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiexistenciasMaterialesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiexistenciasMaterialesCreateWithHttpInfo(data: ExistenciasMateriales, _options?: Configuration): Observable<HttpInfo<ExistenciasMateriales>> {
        const requestContextPromise = this.requestFactory.apiexistenciasMaterialesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasMaterialesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiexistenciasMaterialesCreate(data: ExistenciasMateriales, _options?: Configuration): Observable<ExistenciasMateriales> {
        return this.apiexistenciasMaterialesCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiexistenciasMaterialesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasMaterialesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiexistenciasMaterialesDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiexistenciasMaterialesListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ExistenciasMateriales>>> {
        const requestContextPromise = this.requestFactory.apiexistenciasMaterialesList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasMaterialesListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiexistenciasMaterialesList(_options?: Configuration): Observable<Array<ExistenciasMateriales>> {
        return this.apiexistenciasMaterialesListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ExistenciasMateriales>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesPartialUpdateWithHttpInfo(id: number, data: ExistenciasMateriales, _options?: Configuration): Observable<HttpInfo<ExistenciasMateriales>> {
        const requestContextPromise = this.requestFactory.apiexistenciasMaterialesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasMaterialesPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesPartialUpdate(id: number, data: ExistenciasMateriales, _options?: Configuration): Observable<ExistenciasMateriales> {
        return this.apiexistenciasMaterialesPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ExistenciasMateriales>> {
        const requestContextPromise = this.requestFactory.apiexistenciasMaterialesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasMaterialesReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesRead(id: number, _options?: Configuration): Observable<ExistenciasMateriales> {
        return this.apiexistenciasMaterialesReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ExistenciasMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesUpdateWithHttpInfo(id: number, data: ExistenciasMateriales, _options?: Configuration): Observable<HttpInfo<ExistenciasMateriales>> {
        const requestContextPromise = this.requestFactory.apiexistenciasMaterialesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasMaterialesUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesUpdate(id: number, data: ExistenciasMateriales, _options?: Configuration): Observable<ExistenciasMateriales> {
        return this.apiexistenciasMaterialesUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasMateriales>) => apiResponse.data));
    }

}

import { ApiexistenciasProductosApiRequestFactory, ApiexistenciasProductosApiResponseProcessor} from "../apis/ApiexistenciasProductosApi";
export class ObservableApiexistenciasProductosApi {
    private requestFactory: ApiexistenciasProductosApiRequestFactory;
    private responseProcessor: ApiexistenciasProductosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasProductosApiRequestFactory,
        responseProcessor?: ApiexistenciasProductosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiexistenciasProductosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiexistenciasProductosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiexistenciasProductosCreateWithHttpInfo(data: ExistenciasProductos, _options?: Configuration): Observable<HttpInfo<ExistenciasProductos>> {
        const requestContextPromise = this.requestFactory.apiexistenciasProductosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasProductosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiexistenciasProductosCreate(data: ExistenciasProductos, _options?: Configuration): Observable<ExistenciasProductos> {
        return this.apiexistenciasProductosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiexistenciasProductosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasProductosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiexistenciasProductosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiexistenciasProductosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ExistenciasProductos>>> {
        const requestContextPromise = this.requestFactory.apiexistenciasProductosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasProductosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiexistenciasProductosList(_options?: Configuration): Observable<Array<ExistenciasProductos>> {
        return this.apiexistenciasProductosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ExistenciasProductos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosPartialUpdateWithHttpInfo(id: number, data: ExistenciasProductos, _options?: Configuration): Observable<HttpInfo<ExistenciasProductos>> {
        const requestContextPromise = this.requestFactory.apiexistenciasProductosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasProductosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosPartialUpdate(id: number, data: ExistenciasProductos, _options?: Configuration): Observable<ExistenciasProductos> {
        return this.apiexistenciasProductosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ExistenciasProductos>> {
        const requestContextPromise = this.requestFactory.apiexistenciasProductosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasProductosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosRead(id: number, _options?: Configuration): Observable<ExistenciasProductos> {
        return this.apiexistenciasProductosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ExistenciasProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosUpdateWithHttpInfo(id: number, data: ExistenciasProductos, _options?: Configuration): Observable<HttpInfo<ExistenciasProductos>> {
        const requestContextPromise = this.requestFactory.apiexistenciasProductosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasProductosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosUpdate(id: number, data: ExistenciasProductos, _options?: Configuration): Observable<ExistenciasProductos> {
        return this.apiexistenciasProductosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasProductos>) => apiResponse.data));
    }

}

import { ApiexistenciasTelasColoresApiRequestFactory, ApiexistenciasTelasColoresApiResponseProcessor} from "../apis/ApiexistenciasTelasColoresApi";
export class ObservableApiexistenciasTelasColoresApi {
    private requestFactory: ApiexistenciasTelasColoresApiRequestFactory;
    private responseProcessor: ApiexistenciasTelasColoresApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasTelasColoresApiRequestFactory,
        responseProcessor?: ApiexistenciasTelasColoresApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiexistenciasTelasColoresApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiexistenciasTelasColoresApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiexistenciasTelasColoresCreateWithHttpInfo(data: ExistenciasTelasColores, _options?: Configuration): Observable<HttpInfo<ExistenciasTelasColores>> {
        const requestContextPromise = this.requestFactory.apiexistenciasTelasColoresCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasTelasColoresCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiexistenciasTelasColoresCreate(data: ExistenciasTelasColores, _options?: Configuration): Observable<ExistenciasTelasColores> {
        return this.apiexistenciasTelasColoresCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasTelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiexistenciasTelasColoresDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasTelasColoresDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiexistenciasTelasColoresDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiexistenciasTelasColoresListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ExistenciasTelasColores>>> {
        const requestContextPromise = this.requestFactory.apiexistenciasTelasColoresList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasTelasColoresListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiexistenciasTelasColoresList(_options?: Configuration): Observable<Array<ExistenciasTelasColores>> {
        return this.apiexistenciasTelasColoresListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ExistenciasTelasColores>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresPartialUpdateWithHttpInfo(id: number, data: ExistenciasTelasColores, _options?: Configuration): Observable<HttpInfo<ExistenciasTelasColores>> {
        const requestContextPromise = this.requestFactory.apiexistenciasTelasColoresPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasTelasColoresPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresPartialUpdate(id: number, data: ExistenciasTelasColores, _options?: Configuration): Observable<ExistenciasTelasColores> {
        return this.apiexistenciasTelasColoresPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasTelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ExistenciasTelasColores>> {
        const requestContextPromise = this.requestFactory.apiexistenciasTelasColoresRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasTelasColoresReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresRead(id: number, _options?: Configuration): Observable<ExistenciasTelasColores> {
        return this.apiexistenciasTelasColoresReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ExistenciasTelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresUpdateWithHttpInfo(id: number, data: ExistenciasTelasColores, _options?: Configuration): Observable<HttpInfo<ExistenciasTelasColores>> {
        const requestContextPromise = this.requestFactory.apiexistenciasTelasColoresUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiexistenciasTelasColoresUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresUpdate(id: number, data: ExistenciasTelasColores, _options?: Configuration): Observable<ExistenciasTelasColores> {
        return this.apiexistenciasTelasColoresUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<ExistenciasTelasColores>) => apiResponse.data));
    }

}

import { ApipagosApiRequestFactory, ApipagosApiResponseProcessor} from "../apis/ApipagosApi";
export class ObservableApipagosApi {
    private requestFactory: ApipagosApiRequestFactory;
    private responseProcessor: ApipagosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApipagosApiRequestFactory,
        responseProcessor?: ApipagosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApipagosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApipagosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apipagosCreateWithHttpInfo(data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apipagosCreate(data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.apipagosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apipagosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apipagosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apipagosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Pagos>>> {
        const requestContextPromise = this.requestFactory.apipagosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apipagosList(_options?: Configuration): Observable<Array<Pagos>> {
        return this.apipagosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Pagos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosPartialUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.apipagosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosRead(id: number, _options?: Configuration): Observable<Pagos> {
        return this.apipagosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.apipagosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apipagosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.apipagosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

}

import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor} from "../apis/ApiproductosApi";
export class ObservableApiproductosApi {
    private requestFactory: ApiproductosApiRequestFactory;
    private responseProcessor: ApiproductosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiproductosApiRequestFactory,
        responseProcessor?: ApiproductosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiproductosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiproductosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiproductosCreateWithHttpInfo(data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiproductosCreate(data: Productos, _options?: Configuration): Observable<Productos> {
        return this.apiproductosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiproductosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiproductosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiproductosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Productos>>> {
        const requestContextPromise = this.requestFactory.apiproductosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiproductosList(_options?: Configuration): Observable<Array<Productos>> {
        return this.apiproductosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Productos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos> {
        return this.apiproductosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosRead(id: number, _options?: Configuration): Observable<Productos> {
        return this.apiproductosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.apiproductosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiproductosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos> {
        return this.apiproductosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

}

import { ApitelasColoresApiRequestFactory, ApitelasColoresApiResponseProcessor} from "../apis/ApitelasColoresApi";
export class ObservableApitelasColoresApi {
    private requestFactory: ApitelasColoresApiRequestFactory;
    private responseProcessor: ApitelasColoresApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitelasColoresApiRequestFactory,
        responseProcessor?: ApitelasColoresApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApitelasColoresApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApitelasColoresApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apitelasColoresCreateWithHttpInfo(data: TelasColores, _options?: Configuration): Observable<HttpInfo<TelasColores>> {
        const requestContextPromise = this.requestFactory.apitelasColoresCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitelasColoresCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apitelasColoresCreate(data: TelasColores, _options?: Configuration): Observable<TelasColores> {
        return this.apitelasColoresCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apitelasColoresDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitelasColoresDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apitelasColoresDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apitelasColoresListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TelasColores>>> {
        const requestContextPromise = this.requestFactory.apitelasColoresList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitelasColoresListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apitelasColoresList(_options?: Configuration): Observable<Array<TelasColores>> {
        return this.apitelasColoresListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TelasColores>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresPartialUpdateWithHttpInfo(id: number, data: TelasColores, _options?: Configuration): Observable<HttpInfo<TelasColores>> {
        const requestContextPromise = this.requestFactory.apitelasColoresPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitelasColoresPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresPartialUpdate(id: number, data: TelasColores, _options?: Configuration): Observable<TelasColores> {
        return this.apitelasColoresPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TelasColores>> {
        const requestContextPromise = this.requestFactory.apitelasColoresRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitelasColoresReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresRead(id: number, _options?: Configuration): Observable<TelasColores> {
        return this.apitelasColoresReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TelasColores>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresUpdateWithHttpInfo(id: number, data: TelasColores, _options?: Configuration): Observable<HttpInfo<TelasColores>> {
        const requestContextPromise = this.requestFactory.apitelasColoresUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitelasColoresUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresUpdate(id: number, data: TelasColores, _options?: Configuration): Observable<TelasColores> {
        return this.apitelasColoresUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TelasColores>) => apiResponse.data));
    }

}

import { ApitiposEspumillasApiRequestFactory, ApitiposEspumillasApiResponseProcessor} from "../apis/ApitiposEspumillasApi";
export class ObservableApitiposEspumillasApi {
    private requestFactory: ApitiposEspumillasApiRequestFactory;
    private responseProcessor: ApitiposEspumillasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposEspumillasApiRequestFactory,
        responseProcessor?: ApitiposEspumillasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApitiposEspumillasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApitiposEspumillasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apitiposEspumillasCreateWithHttpInfo(data: TiposEspumillas, _options?: Configuration): Observable<HttpInfo<TiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apitiposEspumillasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposEspumillasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apitiposEspumillasCreate(data: TiposEspumillas, _options?: Configuration): Observable<TiposEspumillas> {
        return this.apitiposEspumillasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TiposEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apitiposEspumillasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposEspumillasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apitiposEspumillasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apitiposEspumillasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TiposEspumillas>>> {
        const requestContextPromise = this.requestFactory.apitiposEspumillasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposEspumillasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apitiposEspumillasList(_options?: Configuration): Observable<Array<TiposEspumillas>> {
        return this.apitiposEspumillasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TiposEspumillas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasPartialUpdateWithHttpInfo(id: number, data: TiposEspumillas, _options?: Configuration): Observable<HttpInfo<TiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apitiposEspumillasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposEspumillasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasPartialUpdate(id: number, data: TiposEspumillas, _options?: Configuration): Observable<TiposEspumillas> {
        return this.apitiposEspumillasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apitiposEspumillasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposEspumillasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasRead(id: number, _options?: Configuration): Observable<TiposEspumillas> {
        return this.apitiposEspumillasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TiposEspumillas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasUpdateWithHttpInfo(id: number, data: TiposEspumillas, _options?: Configuration): Observable<HttpInfo<TiposEspumillas>> {
        const requestContextPromise = this.requestFactory.apitiposEspumillasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposEspumillasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasUpdate(id: number, data: TiposEspumillas, _options?: Configuration): Observable<TiposEspumillas> {
        return this.apitiposEspumillasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposEspumillas>) => apiResponse.data));
    }

}

import { ApitiposMaterialesApiRequestFactory, ApitiposMaterialesApiResponseProcessor} from "../apis/ApitiposMaterialesApi";
export class ObservableApitiposMaterialesApi {
    private requestFactory: ApitiposMaterialesApiRequestFactory;
    private responseProcessor: ApitiposMaterialesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposMaterialesApiRequestFactory,
        responseProcessor?: ApitiposMaterialesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApitiposMaterialesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApitiposMaterialesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apitiposMaterialesCreateWithHttpInfo(data: TiposMateriales, _options?: Configuration): Observable<HttpInfo<TiposMateriales>> {
        const requestContextPromise = this.requestFactory.apitiposMaterialesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposMaterialesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apitiposMaterialesCreate(data: TiposMateriales, _options?: Configuration): Observable<TiposMateriales> {
        return this.apitiposMaterialesCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TiposMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apitiposMaterialesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposMaterialesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apitiposMaterialesDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apitiposMaterialesListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TiposMateriales>>> {
        const requestContextPromise = this.requestFactory.apitiposMaterialesList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposMaterialesListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apitiposMaterialesList(_options?: Configuration): Observable<Array<TiposMateriales>> {
        return this.apitiposMaterialesListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TiposMateriales>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesPartialUpdateWithHttpInfo(id: number, data: TiposMateriales, _options?: Configuration): Observable<HttpInfo<TiposMateriales>> {
        const requestContextPromise = this.requestFactory.apitiposMaterialesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposMaterialesPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesPartialUpdate(id: number, data: TiposMateriales, _options?: Configuration): Observable<TiposMateriales> {
        return this.apitiposMaterialesPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TiposMateriales>> {
        const requestContextPromise = this.requestFactory.apitiposMaterialesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposMaterialesReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesRead(id: number, _options?: Configuration): Observable<TiposMateriales> {
        return this.apitiposMaterialesReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TiposMateriales>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesUpdateWithHttpInfo(id: number, data: TiposMateriales, _options?: Configuration): Observable<HttpInfo<TiposMateriales>> {
        const requestContextPromise = this.requestFactory.apitiposMaterialesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposMaterialesUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesUpdate(id: number, data: TiposMateriales, _options?: Configuration): Observable<TiposMateriales> {
        return this.apitiposMaterialesUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposMateriales>) => apiResponse.data));
    }

}

import { ApitiposProductosApiRequestFactory, ApitiposProductosApiResponseProcessor} from "../apis/ApitiposProductosApi";
export class ObservableApitiposProductosApi {
    private requestFactory: ApitiposProductosApiRequestFactory;
    private responseProcessor: ApitiposProductosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposProductosApiRequestFactory,
        responseProcessor?: ApitiposProductosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApitiposProductosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApitiposProductosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apitiposProductosCreateWithHttpInfo(data: TiposProductos, _options?: Configuration): Observable<HttpInfo<TiposProductos>> {
        const requestContextPromise = this.requestFactory.apitiposProductosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposProductosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apitiposProductosCreate(data: TiposProductos, _options?: Configuration): Observable<TiposProductos> {
        return this.apitiposProductosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TiposProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apitiposProductosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposProductosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apitiposProductosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apitiposProductosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TiposProductos>>> {
        const requestContextPromise = this.requestFactory.apitiposProductosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposProductosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apitiposProductosList(_options?: Configuration): Observable<Array<TiposProductos>> {
        return this.apitiposProductosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TiposProductos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosPartialUpdateWithHttpInfo(id: number, data: TiposProductos, _options?: Configuration): Observable<HttpInfo<TiposProductos>> {
        const requestContextPromise = this.requestFactory.apitiposProductosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposProductosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosPartialUpdate(id: number, data: TiposProductos, _options?: Configuration): Observable<TiposProductos> {
        return this.apitiposProductosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TiposProductos>> {
        const requestContextPromise = this.requestFactory.apitiposProductosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposProductosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosRead(id: number, _options?: Configuration): Observable<TiposProductos> {
        return this.apitiposProductosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TiposProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosUpdateWithHttpInfo(id: number, data: TiposProductos, _options?: Configuration): Observable<HttpInfo<TiposProductos>> {
        const requestContextPromise = this.requestFactory.apitiposProductosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposProductosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosUpdate(id: number, data: TiposProductos, _options?: Configuration): Observable<TiposProductos> {
        return this.apitiposProductosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposProductos>) => apiResponse.data));
    }

}

import { ApitiposTelasApiRequestFactory, ApitiposTelasApiResponseProcessor} from "../apis/ApitiposTelasApi";
export class ObservableApitiposTelasApi {
    private requestFactory: ApitiposTelasApiRequestFactory;
    private responseProcessor: ApitiposTelasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposTelasApiRequestFactory,
        responseProcessor?: ApitiposTelasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApitiposTelasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApitiposTelasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apitiposTelasCreateWithHttpInfo(data: TiposTelas, _options?: Configuration): Observable<HttpInfo<TiposTelas>> {
        const requestContextPromise = this.requestFactory.apitiposTelasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposTelasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apitiposTelasCreate(data: TiposTelas, _options?: Configuration): Observable<TiposTelas> {
        return this.apitiposTelasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TiposTelas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apitiposTelasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposTelasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apitiposTelasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apitiposTelasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TiposTelas>>> {
        const requestContextPromise = this.requestFactory.apitiposTelasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposTelasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apitiposTelasList(_options?: Configuration): Observable<Array<TiposTelas>> {
        return this.apitiposTelasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TiposTelas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasPartialUpdateWithHttpInfo(id: number, data: TiposTelas, _options?: Configuration): Observable<HttpInfo<TiposTelas>> {
        const requestContextPromise = this.requestFactory.apitiposTelasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposTelasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasPartialUpdate(id: number, data: TiposTelas, _options?: Configuration): Observable<TiposTelas> {
        return this.apitiposTelasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposTelas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TiposTelas>> {
        const requestContextPromise = this.requestFactory.apitiposTelasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposTelasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasRead(id: number, _options?: Configuration): Observable<TiposTelas> {
        return this.apitiposTelasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TiposTelas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasUpdateWithHttpInfo(id: number, data: TiposTelas, _options?: Configuration): Observable<HttpInfo<TiposTelas>> {
        const requestContextPromise = this.requestFactory.apitiposTelasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apitiposTelasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasUpdate(id: number, data: TiposTelas, _options?: Configuration): Observable<TiposTelas> {
        return this.apitiposTelasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<TiposTelas>) => apiResponse.data));
    }

}

import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor} from "../apis/ApiusersApi";
export class ObservableApiusersApi {
    private requestFactory: ApiusersApiRequestFactory;
    private responseProcessor: ApiusersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiusersApiRequestFactory,
        responseProcessor?: ApiusersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiusersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiusersApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiusersCreateWithHttpInfo(data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiusersCreate(data: User, _options?: Configuration): Observable<User> {
        return this.apiusersCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiusersDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiusersDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiusersListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<User>>> {
        const requestContextPromise = this.requestFactory.apiusersList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiusersList(_options?: Configuration): Observable<Array<User>> {
        return this.apiusersListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<User>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Observable<User> {
        return this.apiusersPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersRead(id: number, _options?: Configuration): Observable<User> {
        return this.apiusersReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiusersUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiusersUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdate(id: number, data: User, _options?: Configuration): Observable<User> {
        return this.apiusersUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

import { ApiventasApiRequestFactory, ApiventasApiResponseProcessor} from "../apis/ApiventasApi";
export class ObservableApiventasApi {
    private requestFactory: ApiventasApiRequestFactory;
    private responseProcessor: ApiventasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiventasApiRequestFactory,
        responseProcessor?: ApiventasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiventasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiventasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiventasCreateWithHttpInfo(data: Ventas, _options?: Configuration): Observable<HttpInfo<Ventas>> {
        const requestContextPromise = this.requestFactory.apiventasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiventasCreate(data: Ventas, _options?: Configuration): Observable<Ventas> {
        return this.apiventasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Ventas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiventasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiventasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiventasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Ventas>>> {
        const requestContextPromise = this.requestFactory.apiventasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiventasList(_options?: Configuration): Observable<Array<Ventas>> {
        return this.apiventasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Ventas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasPartialUpdateWithHttpInfo(id: number, data: Ventas, _options?: Configuration): Observable<HttpInfo<Ventas>> {
        const requestContextPromise = this.requestFactory.apiventasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasPartialUpdate(id: number, data: Ventas, _options?: Configuration): Observable<Ventas> {
        return this.apiventasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Ventas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Ventas>> {
        const requestContextPromise = this.requestFactory.apiventasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasRead(id: number, _options?: Configuration): Observable<Ventas> {
        return this.apiventasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Ventas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasUpdateWithHttpInfo(id: number, data: Ventas, _options?: Configuration): Observable<HttpInfo<Ventas>> {
        const requestContextPromise = this.requestFactory.apiventasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasUpdate(id: number, data: Ventas, _options?: Configuration): Observable<Ventas> {
        return this.apiventasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Ventas>) => apiResponse.data));
    }

}

import { ApiventasProductosApiRequestFactory, ApiventasProductosApiResponseProcessor} from "../apis/ApiventasProductosApi";
export class ObservableApiventasProductosApi {
    private requestFactory: ApiventasProductosApiRequestFactory;
    private responseProcessor: ApiventasProductosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiventasProductosApiRequestFactory,
        responseProcessor?: ApiventasProductosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiventasProductosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiventasProductosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public apiventasProductosCreateWithHttpInfo(data: VentasProductos, _options?: Configuration): Observable<HttpInfo<VentasProductos>> {
        const requestContextPromise = this.requestFactory.apiventasProductosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasProductosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public apiventasProductosCreate(data: VentasProductos, _options?: Configuration): Observable<VentasProductos> {
        return this.apiventasProductosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<VentasProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiventasProductosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasProductosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.apiventasProductosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiventasProductosListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<VentasProductos>>> {
        const requestContextPromise = this.requestFactory.apiventasProductosList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasProductosListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiventasProductosList(_options?: Configuration): Observable<Array<VentasProductos>> {
        return this.apiventasProductosListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<VentasProductos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosPartialUpdateWithHttpInfo(id: number, data: VentasProductos, _options?: Configuration): Observable<HttpInfo<VentasProductos>> {
        const requestContextPromise = this.requestFactory.apiventasProductosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasProductosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosPartialUpdate(id: number, data: VentasProductos, _options?: Configuration): Observable<VentasProductos> {
        return this.apiventasProductosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<VentasProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<VentasProductos>> {
        const requestContextPromise = this.requestFactory.apiventasProductosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasProductosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosRead(id: number, _options?: Configuration): Observable<VentasProductos> {
        return this.apiventasProductosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<VentasProductos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosUpdateWithHttpInfo(id: number, data: VentasProductos, _options?: Configuration): Observable<HttpInfo<VentasProductos>> {
        const requestContextPromise = this.requestFactory.apiventasProductosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiventasProductosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosUpdate(id: number, data: VentasProductos, _options?: Configuration): Observable<VentasProductos> {
        return this.apiventasProductosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<VentasProductos>) => apiResponse.data));
    }

}
