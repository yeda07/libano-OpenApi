import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableApiabonosApi } from "./ObservableAPI";
import { ApiabonosApiRequestFactory, ApiabonosApiResponseProcessor} from "../apis/ApiabonosApi";

export interface ApiabonosApiApiabonosCreateRequest {
    /**
     * 
     * @type Abonos
     * @memberof ApiabonosApiapiabonosCreate
     */
    data: Abonos
}

export interface ApiabonosApiApiabonosDeleteRequest {
    /**
     * A unique integer value identifying this abonos.
     * @type number
     * @memberof ApiabonosApiapiabonosDelete
     */
    id: number
}

export interface ApiabonosApiApiabonosListRequest {
}

export interface ApiabonosApiApiabonosPartialUpdateRequest {
    /**
     * A unique integer value identifying this abonos.
     * @type number
     * @memberof ApiabonosApiapiabonosPartialUpdate
     */
    id: number
    /**
     * 
     * @type Abonos
     * @memberof ApiabonosApiapiabonosPartialUpdate
     */
    data: Abonos
}

export interface ApiabonosApiApiabonosReadRequest {
    /**
     * A unique integer value identifying this abonos.
     * @type number
     * @memberof ApiabonosApiapiabonosRead
     */
    id: number
}

export interface ApiabonosApiApiabonosUpdateRequest {
    /**
     * A unique integer value identifying this abonos.
     * @type number
     * @memberof ApiabonosApiapiabonosUpdate
     */
    id: number
    /**
     * 
     * @type Abonos
     * @memberof ApiabonosApiapiabonosUpdate
     */
    data: Abonos
}

export class ObjectApiabonosApi {
    private api: ObservableApiabonosApi

    public constructor(configuration: Configuration, requestFactory?: ApiabonosApiRequestFactory, responseProcessor?: ApiabonosApiResponseProcessor) {
        this.api = new ObservableApiabonosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiabonosCreateWithHttpInfo(param: ApiabonosApiApiabonosCreateRequest, options?: Configuration): Promise<HttpInfo<Abonos>> {
        return this.api.apiabonosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosCreate(param: ApiabonosApiApiabonosCreateRequest, options?: Configuration): Promise<Abonos> {
        return this.api.apiabonosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosDeleteWithHttpInfo(param: ApiabonosApiApiabonosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiabonosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosDelete(param: ApiabonosApiApiabonosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiabonosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosListWithHttpInfo(param: ApiabonosApiApiabonosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Abonos>>> {
        return this.api.apiabonosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosList(param: ApiabonosApiApiabonosListRequest = {}, options?: Configuration): Promise<Array<Abonos>> {
        return this.api.apiabonosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosPartialUpdateWithHttpInfo(param: ApiabonosApiApiabonosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Abonos>> {
        return this.api.apiabonosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosPartialUpdate(param: ApiabonosApiApiabonosPartialUpdateRequest, options?: Configuration): Promise<Abonos> {
        return this.api.apiabonosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosReadWithHttpInfo(param: ApiabonosApiApiabonosReadRequest, options?: Configuration): Promise<HttpInfo<Abonos>> {
        return this.api.apiabonosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosRead(param: ApiabonosApiApiabonosReadRequest, options?: Configuration): Promise<Abonos> {
        return this.api.apiabonosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosUpdateWithHttpInfo(param: ApiabonosApiApiabonosUpdateRequest, options?: Configuration): Promise<HttpInfo<Abonos>> {
        return this.api.apiabonosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiabonosUpdate(param: ApiabonosApiApiabonosUpdateRequest, options?: Configuration): Promise<Abonos> {
        return this.api.apiabonosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiauthApi } from "./ObservableAPI";
import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";

export interface ApiauthApiApiauthLoginCreateRequest {
    /**
     * 
     * @type TokenObtainPair
     * @memberof ApiauthApiapiauthLoginCreate
     */
    data: TokenObtainPair
}

export interface ApiauthApiApiauthMeListRequest {
}

export class ObjectApiauthApi {
    private api: ObservableApiauthApi

    public constructor(configuration: Configuration, requestFactory?: ApiauthApiRequestFactory, responseProcessor?: ApiauthApiResponseProcessor) {
        this.api = new ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param param the request object
     */
    public apiauthLoginCreateWithHttpInfo(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<HttpInfo<TokenObtainPair>> {
        return this.api.apiauthLoginCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param param the request object
     */
    public apiauthLoginCreate(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<TokenObtainPair> {
        return this.api.apiauthLoginCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiauthMeListWithHttpInfo(param: ApiauthApiApiauthMeListRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiauthMeListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiauthMeList(param: ApiauthApiApiauthMeListRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiauthMeList( options).toPromise();
    }

}

import { ObservableApicoloresApi } from "./ObservableAPI";
import { ApicoloresApiRequestFactory, ApicoloresApiResponseProcessor} from "../apis/ApicoloresApi";

export interface ApicoloresApiApicoloresCreateRequest {
    /**
     * 
     * @type Colores
     * @memberof ApicoloresApiapicoloresCreate
     */
    data: Colores
}

export interface ApicoloresApiApicoloresDeleteRequest {
    /**
     * A unique integer value identifying this colores.
     * @type number
     * @memberof ApicoloresApiapicoloresDelete
     */
    id: number
}

export interface ApicoloresApiApicoloresListRequest {
}

export interface ApicoloresApiApicoloresPartialUpdateRequest {
    /**
     * A unique integer value identifying this colores.
     * @type number
     * @memberof ApicoloresApiapicoloresPartialUpdate
     */
    id: number
    /**
     * 
     * @type Colores
     * @memberof ApicoloresApiapicoloresPartialUpdate
     */
    data: Colores
}

export interface ApicoloresApiApicoloresReadRequest {
    /**
     * A unique integer value identifying this colores.
     * @type number
     * @memberof ApicoloresApiapicoloresRead
     */
    id: number
}

export interface ApicoloresApiApicoloresUpdateRequest {
    /**
     * A unique integer value identifying this colores.
     * @type number
     * @memberof ApicoloresApiapicoloresUpdate
     */
    id: number
    /**
     * 
     * @type Colores
     * @memberof ApicoloresApiapicoloresUpdate
     */
    data: Colores
}

export class ObjectApicoloresApi {
    private api: ObservableApicoloresApi

    public constructor(configuration: Configuration, requestFactory?: ApicoloresApiRequestFactory, responseProcessor?: ApicoloresApiResponseProcessor) {
        this.api = new ObservableApicoloresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicoloresCreateWithHttpInfo(param: ApicoloresApiApicoloresCreateRequest, options?: Configuration): Promise<HttpInfo<Colores>> {
        return this.api.apicoloresCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresCreate(param: ApicoloresApiApicoloresCreateRequest, options?: Configuration): Promise<Colores> {
        return this.api.apicoloresCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresDeleteWithHttpInfo(param: ApicoloresApiApicoloresDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicoloresDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresDelete(param: ApicoloresApiApicoloresDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicoloresDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresListWithHttpInfo(param: ApicoloresApiApicoloresListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Colores>>> {
        return this.api.apicoloresListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresList(param: ApicoloresApiApicoloresListRequest = {}, options?: Configuration): Promise<Array<Colores>> {
        return this.api.apicoloresList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresPartialUpdateWithHttpInfo(param: ApicoloresApiApicoloresPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Colores>> {
        return this.api.apicoloresPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresPartialUpdate(param: ApicoloresApiApicoloresPartialUpdateRequest, options?: Configuration): Promise<Colores> {
        return this.api.apicoloresPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresReadWithHttpInfo(param: ApicoloresApiApicoloresReadRequest, options?: Configuration): Promise<HttpInfo<Colores>> {
        return this.api.apicoloresReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresRead(param: ApicoloresApiApicoloresReadRequest, options?: Configuration): Promise<Colores> {
        return this.api.apicoloresRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresUpdateWithHttpInfo(param: ApicoloresApiApicoloresUpdateRequest, options?: Configuration): Promise<HttpInfo<Colores>> {
        return this.api.apicoloresUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicoloresUpdate(param: ApicoloresApiApicoloresUpdateRequest, options?: Configuration): Promise<Colores> {
        return this.api.apicoloresUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApicomprasApi } from "./ObservableAPI";
import { ApicomprasApiRequestFactory, ApicomprasApiResponseProcessor} from "../apis/ApicomprasApi";

export interface ApicomprasApiApicomprasCreateRequest {
    /**
     * 
     * @type Compras
     * @memberof ApicomprasApiapicomprasCreate
     */
    data: Compras
}

export interface ApicomprasApiApicomprasDeleteRequest {
    /**
     * A unique integer value identifying this compras.
     * @type number
     * @memberof ApicomprasApiapicomprasDelete
     */
    id: number
}

export interface ApicomprasApiApicomprasListRequest {
}

export interface ApicomprasApiApicomprasPartialUpdateRequest {
    /**
     * A unique integer value identifying this compras.
     * @type number
     * @memberof ApicomprasApiapicomprasPartialUpdate
     */
    id: number
    /**
     * 
     * @type Compras
     * @memberof ApicomprasApiapicomprasPartialUpdate
     */
    data: Compras
}

export interface ApicomprasApiApicomprasReadRequest {
    /**
     * A unique integer value identifying this compras.
     * @type number
     * @memberof ApicomprasApiapicomprasRead
     */
    id: number
}

export interface ApicomprasApiApicomprasUpdateRequest {
    /**
     * A unique integer value identifying this compras.
     * @type number
     * @memberof ApicomprasApiapicomprasUpdate
     */
    id: number
    /**
     * 
     * @type Compras
     * @memberof ApicomprasApiapicomprasUpdate
     */
    data: Compras
}

export class ObjectApicomprasApi {
    private api: ObservableApicomprasApi

    public constructor(configuration: Configuration, requestFactory?: ApicomprasApiRequestFactory, responseProcessor?: ApicomprasApiResponseProcessor) {
        this.api = new ObservableApicomprasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicomprasCreateWithHttpInfo(param: ApicomprasApiApicomprasCreateRequest, options?: Configuration): Promise<HttpInfo<Compras>> {
        return this.api.apicomprasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasCreate(param: ApicomprasApiApicomprasCreateRequest, options?: Configuration): Promise<Compras> {
        return this.api.apicomprasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasDeleteWithHttpInfo(param: ApicomprasApiApicomprasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicomprasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasDelete(param: ApicomprasApiApicomprasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicomprasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasListWithHttpInfo(param: ApicomprasApiApicomprasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Compras>>> {
        return this.api.apicomprasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasList(param: ApicomprasApiApicomprasListRequest = {}, options?: Configuration): Promise<Array<Compras>> {
        return this.api.apicomprasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasPartialUpdateWithHttpInfo(param: ApicomprasApiApicomprasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Compras>> {
        return this.api.apicomprasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasPartialUpdate(param: ApicomprasApiApicomprasPartialUpdateRequest, options?: Configuration): Promise<Compras> {
        return this.api.apicomprasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasReadWithHttpInfo(param: ApicomprasApiApicomprasReadRequest, options?: Configuration): Promise<HttpInfo<Compras>> {
        return this.api.apicomprasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasRead(param: ApicomprasApiApicomprasReadRequest, options?: Configuration): Promise<Compras> {
        return this.api.apicomprasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasUpdateWithHttpInfo(param: ApicomprasApiApicomprasUpdateRequest, options?: Configuration): Promise<HttpInfo<Compras>> {
        return this.api.apicomprasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasUpdate(param: ApicomprasApiApicomprasUpdateRequest, options?: Configuration): Promise<Compras> {
        return this.api.apicomprasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApicomprasTelasColoresApi } from "./ObservableAPI";
import { ApicomprasTelasColoresApiRequestFactory, ApicomprasTelasColoresApiResponseProcessor} from "../apis/ApicomprasTelasColoresApi";

export interface ApicomprasTelasColoresApiApicomprasTelasColoresCreateRequest {
    /**
     * 
     * @type ComprasTelasColores
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresCreate
     */
    data: ComprasTelasColores
}

export interface ApicomprasTelasColoresApiApicomprasTelasColoresDeleteRequest {
    /**
     * A unique integer value identifying this compras telas colores.
     * @type number
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresDelete
     */
    id: number
}

export interface ApicomprasTelasColoresApiApicomprasTelasColoresListRequest {
}

export interface ApicomprasTelasColoresApiApicomprasTelasColoresPartialUpdateRequest {
    /**
     * A unique integer value identifying this compras telas colores.
     * @type number
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresPartialUpdate
     */
    id: number
    /**
     * 
     * @type ComprasTelasColores
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresPartialUpdate
     */
    data: ComprasTelasColores
}

export interface ApicomprasTelasColoresApiApicomprasTelasColoresReadRequest {
    /**
     * A unique integer value identifying this compras telas colores.
     * @type number
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresRead
     */
    id: number
}

export interface ApicomprasTelasColoresApiApicomprasTelasColoresUpdateRequest {
    /**
     * A unique integer value identifying this compras telas colores.
     * @type number
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresUpdate
     */
    id: number
    /**
     * 
     * @type ComprasTelasColores
     * @memberof ApicomprasTelasColoresApiapicomprasTelasColoresUpdate
     */
    data: ComprasTelasColores
}

export class ObjectApicomprasTelasColoresApi {
    private api: ObservableApicomprasTelasColoresApi

    public constructor(configuration: Configuration, requestFactory?: ApicomprasTelasColoresApiRequestFactory, responseProcessor?: ApicomprasTelasColoresApiResponseProcessor) {
        this.api = new ObservableApicomprasTelasColoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresCreateWithHttpInfo(param: ApicomprasTelasColoresApiApicomprasTelasColoresCreateRequest, options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        return this.api.apicomprasTelasColoresCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresCreate(param: ApicomprasTelasColoresApiApicomprasTelasColoresCreateRequest, options?: Configuration): Promise<ComprasTelasColores> {
        return this.api.apicomprasTelasColoresCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresDeleteWithHttpInfo(param: ApicomprasTelasColoresApiApicomprasTelasColoresDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicomprasTelasColoresDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresDelete(param: ApicomprasTelasColoresApiApicomprasTelasColoresDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicomprasTelasColoresDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresListWithHttpInfo(param: ApicomprasTelasColoresApiApicomprasTelasColoresListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ComprasTelasColores>>> {
        return this.api.apicomprasTelasColoresListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresList(param: ApicomprasTelasColoresApiApicomprasTelasColoresListRequest = {}, options?: Configuration): Promise<Array<ComprasTelasColores>> {
        return this.api.apicomprasTelasColoresList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresPartialUpdateWithHttpInfo(param: ApicomprasTelasColoresApiApicomprasTelasColoresPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        return this.api.apicomprasTelasColoresPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresPartialUpdate(param: ApicomprasTelasColoresApiApicomprasTelasColoresPartialUpdateRequest, options?: Configuration): Promise<ComprasTelasColores> {
        return this.api.apicomprasTelasColoresPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresReadWithHttpInfo(param: ApicomprasTelasColoresApiApicomprasTelasColoresReadRequest, options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        return this.api.apicomprasTelasColoresReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresRead(param: ApicomprasTelasColoresApiApicomprasTelasColoresReadRequest, options?: Configuration): Promise<ComprasTelasColores> {
        return this.api.apicomprasTelasColoresRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresUpdateWithHttpInfo(param: ApicomprasTelasColoresApiApicomprasTelasColoresUpdateRequest, options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        return this.api.apicomprasTelasColoresUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTelasColoresUpdate(param: ApicomprasTelasColoresApiApicomprasTelasColoresUpdateRequest, options?: Configuration): Promise<ComprasTelasColores> {
        return this.api.apicomprasTelasColoresUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApicomprasTiposEspumillasApi } from "./ObservableAPI";
import { ApicomprasTiposEspumillasApiRequestFactory, ApicomprasTiposEspumillasApiResponseProcessor} from "../apis/ApicomprasTiposEspumillasApi";

export interface ApicomprasTiposEspumillasApiApicomprasTiposEspumillasCreateRequest {
    /**
     * 
     * @type ComprasTiposEspumillas
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasCreate
     */
    data: ComprasTiposEspumillas
}

export interface ApicomprasTiposEspumillasApiApicomprasTiposEspumillasDeleteRequest {
    /**
     * A unique integer value identifying this compras tipos espumillas.
     * @type number
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasDelete
     */
    id: number
}

export interface ApicomprasTiposEspumillasApiApicomprasTiposEspumillasListRequest {
}

export interface ApicomprasTiposEspumillasApiApicomprasTiposEspumillasPartialUpdateRequest {
    /**
     * A unique integer value identifying this compras tipos espumillas.
     * @type number
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasPartialUpdate
     */
    id: number
    /**
     * 
     * @type ComprasTiposEspumillas
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasPartialUpdate
     */
    data: ComprasTiposEspumillas
}

export interface ApicomprasTiposEspumillasApiApicomprasTiposEspumillasReadRequest {
    /**
     * A unique integer value identifying this compras tipos espumillas.
     * @type number
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasRead
     */
    id: number
}

export interface ApicomprasTiposEspumillasApiApicomprasTiposEspumillasUpdateRequest {
    /**
     * A unique integer value identifying this compras tipos espumillas.
     * @type number
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasUpdate
     */
    id: number
    /**
     * 
     * @type ComprasTiposEspumillas
     * @memberof ApicomprasTiposEspumillasApiapicomprasTiposEspumillasUpdate
     */
    data: ComprasTiposEspumillas
}

export class ObjectApicomprasTiposEspumillasApi {
    private api: ObservableApicomprasTiposEspumillasApi

    public constructor(configuration: Configuration, requestFactory?: ApicomprasTiposEspumillasApiRequestFactory, responseProcessor?: ApicomprasTiposEspumillasApiResponseProcessor) {
        this.api = new ObservableApicomprasTiposEspumillasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasCreateWithHttpInfo(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasCreateRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        return this.api.apicomprasTiposEspumillasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasCreate(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasCreateRequest, options?: Configuration): Promise<ComprasTiposEspumillas> {
        return this.api.apicomprasTiposEspumillasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasDeleteWithHttpInfo(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicomprasTiposEspumillasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasDelete(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicomprasTiposEspumillasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasListWithHttpInfo(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ComprasTiposEspumillas>>> {
        return this.api.apicomprasTiposEspumillasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasList(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasListRequest = {}, options?: Configuration): Promise<Array<ComprasTiposEspumillas>> {
        return this.api.apicomprasTiposEspumillasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasPartialUpdateWithHttpInfo(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        return this.api.apicomprasTiposEspumillasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasPartialUpdate(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasPartialUpdateRequest, options?: Configuration): Promise<ComprasTiposEspumillas> {
        return this.api.apicomprasTiposEspumillasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasReadWithHttpInfo(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasReadRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        return this.api.apicomprasTiposEspumillasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasRead(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasReadRequest, options?: Configuration): Promise<ComprasTiposEspumillas> {
        return this.api.apicomprasTiposEspumillasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasUpdateWithHttpInfo(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasUpdateRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        return this.api.apicomprasTiposEspumillasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposEspumillasUpdate(param: ApicomprasTiposEspumillasApiApicomprasTiposEspumillasUpdateRequest, options?: Configuration): Promise<ComprasTiposEspumillas> {
        return this.api.apicomprasTiposEspumillasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApicomprasTiposMaterialesApi } from "./ObservableAPI";
import { ApicomprasTiposMaterialesApiRequestFactory, ApicomprasTiposMaterialesApiResponseProcessor} from "../apis/ApicomprasTiposMaterialesApi";

export interface ApicomprasTiposMaterialesApiApicomprasTiposMaterialesCreateRequest {
    /**
     * 
     * @type ComprasTiposMateriales
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesCreate
     */
    data: ComprasTiposMateriales
}

export interface ApicomprasTiposMaterialesApiApicomprasTiposMaterialesDeleteRequest {
    /**
     * A unique integer value identifying this compras tipos materiales.
     * @type number
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesDelete
     */
    id: number
}

export interface ApicomprasTiposMaterialesApiApicomprasTiposMaterialesListRequest {
}

export interface ApicomprasTiposMaterialesApiApicomprasTiposMaterialesPartialUpdateRequest {
    /**
     * A unique integer value identifying this compras tipos materiales.
     * @type number
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesPartialUpdate
     */
    id: number
    /**
     * 
     * @type ComprasTiposMateriales
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesPartialUpdate
     */
    data: ComprasTiposMateriales
}

export interface ApicomprasTiposMaterialesApiApicomprasTiposMaterialesReadRequest {
    /**
     * A unique integer value identifying this compras tipos materiales.
     * @type number
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesRead
     */
    id: number
}

export interface ApicomprasTiposMaterialesApiApicomprasTiposMaterialesUpdateRequest {
    /**
     * A unique integer value identifying this compras tipos materiales.
     * @type number
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesUpdate
     */
    id: number
    /**
     * 
     * @type ComprasTiposMateriales
     * @memberof ApicomprasTiposMaterialesApiapicomprasTiposMaterialesUpdate
     */
    data: ComprasTiposMateriales
}

export class ObjectApicomprasTiposMaterialesApi {
    private api: ObservableApicomprasTiposMaterialesApi

    public constructor(configuration: Configuration, requestFactory?: ApicomprasTiposMaterialesApiRequestFactory, responseProcessor?: ApicomprasTiposMaterialesApiResponseProcessor) {
        this.api = new ObservableApicomprasTiposMaterialesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesCreateWithHttpInfo(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesCreateRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        return this.api.apicomprasTiposMaterialesCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesCreate(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesCreateRequest, options?: Configuration): Promise<ComprasTiposMateriales> {
        return this.api.apicomprasTiposMaterialesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesDeleteWithHttpInfo(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicomprasTiposMaterialesDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesDelete(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicomprasTiposMaterialesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesListWithHttpInfo(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ComprasTiposMateriales>>> {
        return this.api.apicomprasTiposMaterialesListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesList(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesListRequest = {}, options?: Configuration): Promise<Array<ComprasTiposMateriales>> {
        return this.api.apicomprasTiposMaterialesList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesPartialUpdateWithHttpInfo(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        return this.api.apicomprasTiposMaterialesPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesPartialUpdate(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesPartialUpdateRequest, options?: Configuration): Promise<ComprasTiposMateriales> {
        return this.api.apicomprasTiposMaterialesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesReadWithHttpInfo(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesReadRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        return this.api.apicomprasTiposMaterialesReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesRead(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesReadRequest, options?: Configuration): Promise<ComprasTiposMateriales> {
        return this.api.apicomprasTiposMaterialesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesUpdateWithHttpInfo(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesUpdateRequest, options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        return this.api.apicomprasTiposMaterialesUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicomprasTiposMaterialesUpdate(param: ApicomprasTiposMaterialesApiApicomprasTiposMaterialesUpdateRequest, options?: Configuration): Promise<ComprasTiposMateriales> {
        return this.api.apicomprasTiposMaterialesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApicreditosApi } from "./ObservableAPI";
import { ApicreditosApiRequestFactory, ApicreditosApiResponseProcessor} from "../apis/ApicreditosApi";

export interface ApicreditosApiApicreditosCreateRequest {
    /**
     * 
     * @type Creditos
     * @memberof ApicreditosApiapicreditosCreate
     */
    data: Creditos
}

export interface ApicreditosApiApicreditosDeleteRequest {
    /**
     * A unique integer value identifying this creditos.
     * @type number
     * @memberof ApicreditosApiapicreditosDelete
     */
    id: number
}

export interface ApicreditosApiApicreditosListRequest {
}

export interface ApicreditosApiApicreditosPartialUpdateRequest {
    /**
     * A unique integer value identifying this creditos.
     * @type number
     * @memberof ApicreditosApiapicreditosPartialUpdate
     */
    id: number
    /**
     * 
     * @type Creditos
     * @memberof ApicreditosApiapicreditosPartialUpdate
     */
    data: Creditos
}

export interface ApicreditosApiApicreditosReadRequest {
    /**
     * A unique integer value identifying this creditos.
     * @type number
     * @memberof ApicreditosApiapicreditosRead
     */
    id: number
}

export interface ApicreditosApiApicreditosUpdateRequest {
    /**
     * A unique integer value identifying this creditos.
     * @type number
     * @memberof ApicreditosApiapicreditosUpdate
     */
    id: number
    /**
     * 
     * @type Creditos
     * @memberof ApicreditosApiapicreditosUpdate
     */
    data: Creditos
}

export class ObjectApicreditosApi {
    private api: ObservableApicreditosApi

    public constructor(configuration: Configuration, requestFactory?: ApicreditosApiRequestFactory, responseProcessor?: ApicreditosApiResponseProcessor) {
        this.api = new ObservableApicreditosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apicreditosCreateWithHttpInfo(param: ApicreditosApiApicreditosCreateRequest, options?: Configuration): Promise<HttpInfo<Creditos>> {
        return this.api.apicreditosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosCreate(param: ApicreditosApiApicreditosCreateRequest, options?: Configuration): Promise<Creditos> {
        return this.api.apicreditosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosDeleteWithHttpInfo(param: ApicreditosApiApicreditosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apicreditosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosDelete(param: ApicreditosApiApicreditosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apicreditosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosListWithHttpInfo(param: ApicreditosApiApicreditosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Creditos>>> {
        return this.api.apicreditosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosList(param: ApicreditosApiApicreditosListRequest = {}, options?: Configuration): Promise<Array<Creditos>> {
        return this.api.apicreditosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosPartialUpdateWithHttpInfo(param: ApicreditosApiApicreditosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Creditos>> {
        return this.api.apicreditosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosPartialUpdate(param: ApicreditosApiApicreditosPartialUpdateRequest, options?: Configuration): Promise<Creditos> {
        return this.api.apicreditosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosReadWithHttpInfo(param: ApicreditosApiApicreditosReadRequest, options?: Configuration): Promise<HttpInfo<Creditos>> {
        return this.api.apicreditosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosRead(param: ApicreditosApiApicreditosReadRequest, options?: Configuration): Promise<Creditos> {
        return this.api.apicreditosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosUpdateWithHttpInfo(param: ApicreditosApiApicreditosUpdateRequest, options?: Configuration): Promise<HttpInfo<Creditos>> {
        return this.api.apicreditosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apicreditosUpdate(param: ApicreditosApiApicreditosUpdateRequest, options?: Configuration): Promise<Creditos> {
        return this.api.apicreditosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApidetallesNoTapizadosApi } from "./ObservableAPI";
import { ApidetallesNoTapizadosApiRequestFactory, ApidetallesNoTapizadosApiResponseProcessor} from "../apis/ApidetallesNoTapizadosApi";

export interface ApidetallesNoTapizadosApiApidetallesNoTapizadosCreateRequest {
    /**
     * 
     * @type DetallesNoTapizados
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosCreate
     */
    data: DetallesNoTapizados
}

export interface ApidetallesNoTapizadosApiApidetallesNoTapizadosDeleteRequest {
    /**
     * A unique integer value identifying this detalles no tapizados.
     * @type number
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosDelete
     */
    id: number
}

export interface ApidetallesNoTapizadosApiApidetallesNoTapizadosListRequest {
}

export interface ApidetallesNoTapizadosApiApidetallesNoTapizadosPartialUpdateRequest {
    /**
     * A unique integer value identifying this detalles no tapizados.
     * @type number
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosPartialUpdate
     */
    id: number
    /**
     * 
     * @type DetallesNoTapizados
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosPartialUpdate
     */
    data: DetallesNoTapizados
}

export interface ApidetallesNoTapizadosApiApidetallesNoTapizadosReadRequest {
    /**
     * A unique integer value identifying this detalles no tapizados.
     * @type number
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosRead
     */
    id: number
}

export interface ApidetallesNoTapizadosApiApidetallesNoTapizadosUpdateRequest {
    /**
     * A unique integer value identifying this detalles no tapizados.
     * @type number
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosUpdate
     */
    id: number
    /**
     * 
     * @type DetallesNoTapizados
     * @memberof ApidetallesNoTapizadosApiapidetallesNoTapizadosUpdate
     */
    data: DetallesNoTapizados
}

export class ObjectApidetallesNoTapizadosApi {
    private api: ObservableApidetallesNoTapizadosApi

    public constructor(configuration: Configuration, requestFactory?: ApidetallesNoTapizadosApiRequestFactory, responseProcessor?: ApidetallesNoTapizadosApiResponseProcessor) {
        this.api = new ObservableApidetallesNoTapizadosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosCreateWithHttpInfo(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosCreateRequest, options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        return this.api.apidetallesNoTapizadosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosCreate(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosCreateRequest, options?: Configuration): Promise<DetallesNoTapizados> {
        return this.api.apidetallesNoTapizadosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosDeleteWithHttpInfo(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apidetallesNoTapizadosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosDelete(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apidetallesNoTapizadosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosListWithHttpInfo(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DetallesNoTapizados>>> {
        return this.api.apidetallesNoTapizadosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosList(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosListRequest = {}, options?: Configuration): Promise<Array<DetallesNoTapizados>> {
        return this.api.apidetallesNoTapizadosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosPartialUpdateWithHttpInfo(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        return this.api.apidetallesNoTapizadosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosPartialUpdate(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosPartialUpdateRequest, options?: Configuration): Promise<DetallesNoTapizados> {
        return this.api.apidetallesNoTapizadosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosReadWithHttpInfo(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosReadRequest, options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        return this.api.apidetallesNoTapizadosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosRead(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosReadRequest, options?: Configuration): Promise<DetallesNoTapizados> {
        return this.api.apidetallesNoTapizadosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosUpdateWithHttpInfo(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosUpdateRequest, options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        return this.api.apidetallesNoTapizadosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesNoTapizadosUpdate(param: ApidetallesNoTapizadosApiApidetallesNoTapizadosUpdateRequest, options?: Configuration): Promise<DetallesNoTapizados> {
        return this.api.apidetallesNoTapizadosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApidetallesTapizadosApi } from "./ObservableAPI";
import { ApidetallesTapizadosApiRequestFactory, ApidetallesTapizadosApiResponseProcessor} from "../apis/ApidetallesTapizadosApi";

export interface ApidetallesTapizadosApiApidetallesTapizadosCreateRequest {
    /**
     * 
     * @type DetallesTapizados
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosCreate
     */
    data: DetallesTapizados
}

export interface ApidetallesTapizadosApiApidetallesTapizadosDeleteRequest {
    /**
     * A unique integer value identifying this detalles tapizados.
     * @type number
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosDelete
     */
    id: number
}

export interface ApidetallesTapizadosApiApidetallesTapizadosListRequest {
}

export interface ApidetallesTapizadosApiApidetallesTapizadosPartialUpdateRequest {
    /**
     * A unique integer value identifying this detalles tapizados.
     * @type number
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosPartialUpdate
     */
    id: number
    /**
     * 
     * @type DetallesTapizados
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosPartialUpdate
     */
    data: DetallesTapizados
}

export interface ApidetallesTapizadosApiApidetallesTapizadosReadRequest {
    /**
     * A unique integer value identifying this detalles tapizados.
     * @type number
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosRead
     */
    id: number
}

export interface ApidetallesTapizadosApiApidetallesTapizadosUpdateRequest {
    /**
     * A unique integer value identifying this detalles tapizados.
     * @type number
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosUpdate
     */
    id: number
    /**
     * 
     * @type DetallesTapizados
     * @memberof ApidetallesTapizadosApiapidetallesTapizadosUpdate
     */
    data: DetallesTapizados
}

export class ObjectApidetallesTapizadosApi {
    private api: ObservableApidetallesTapizadosApi

    public constructor(configuration: Configuration, requestFactory?: ApidetallesTapizadosApiRequestFactory, responseProcessor?: ApidetallesTapizadosApiResponseProcessor) {
        this.api = new ObservableApidetallesTapizadosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosCreateWithHttpInfo(param: ApidetallesTapizadosApiApidetallesTapizadosCreateRequest, options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        return this.api.apidetallesTapizadosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosCreate(param: ApidetallesTapizadosApiApidetallesTapizadosCreateRequest, options?: Configuration): Promise<DetallesTapizados> {
        return this.api.apidetallesTapizadosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosDeleteWithHttpInfo(param: ApidetallesTapizadosApiApidetallesTapizadosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apidetallesTapizadosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosDelete(param: ApidetallesTapizadosApiApidetallesTapizadosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apidetallesTapizadosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosListWithHttpInfo(param: ApidetallesTapizadosApiApidetallesTapizadosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DetallesTapizados>>> {
        return this.api.apidetallesTapizadosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosList(param: ApidetallesTapizadosApiApidetallesTapizadosListRequest = {}, options?: Configuration): Promise<Array<DetallesTapizados>> {
        return this.api.apidetallesTapizadosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosPartialUpdateWithHttpInfo(param: ApidetallesTapizadosApiApidetallesTapizadosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        return this.api.apidetallesTapizadosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosPartialUpdate(param: ApidetallesTapizadosApiApidetallesTapizadosPartialUpdateRequest, options?: Configuration): Promise<DetallesTapizados> {
        return this.api.apidetallesTapizadosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosReadWithHttpInfo(param: ApidetallesTapizadosApiApidetallesTapizadosReadRequest, options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        return this.api.apidetallesTapizadosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosRead(param: ApidetallesTapizadosApiApidetallesTapizadosReadRequest, options?: Configuration): Promise<DetallesTapizados> {
        return this.api.apidetallesTapizadosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosUpdateWithHttpInfo(param: ApidetallesTapizadosApiApidetallesTapizadosUpdateRequest, options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        return this.api.apidetallesTapizadosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apidetallesTapizadosUpdate(param: ApidetallesTapizadosApiApidetallesTapizadosUpdateRequest, options?: Configuration): Promise<DetallesTapizados> {
        return this.api.apidetallesTapizadosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiexistenciasEspumillasApi } from "./ObservableAPI";
import { ApiexistenciasEspumillasApiRequestFactory, ApiexistenciasEspumillasApiResponseProcessor} from "../apis/ApiexistenciasEspumillasApi";

export interface ApiexistenciasEspumillasApiApiexistenciasEspumillasCreateRequest {
    /**
     * 
     * @type ExistenciasEspumillas
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasCreate
     */
    data: ExistenciasEspumillas
}

export interface ApiexistenciasEspumillasApiApiexistenciasEspumillasDeleteRequest {
    /**
     * A unique integer value identifying this existencias espumillas.
     * @type number
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasDelete
     */
    id: number
}

export interface ApiexistenciasEspumillasApiApiexistenciasEspumillasListRequest {
}

export interface ApiexistenciasEspumillasApiApiexistenciasEspumillasPartialUpdateRequest {
    /**
     * A unique integer value identifying this existencias espumillas.
     * @type number
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasPartialUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasEspumillas
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasPartialUpdate
     */
    data: ExistenciasEspumillas
}

export interface ApiexistenciasEspumillasApiApiexistenciasEspumillasReadRequest {
    /**
     * A unique integer value identifying this existencias espumillas.
     * @type number
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasRead
     */
    id: number
}

export interface ApiexistenciasEspumillasApiApiexistenciasEspumillasUpdateRequest {
    /**
     * A unique integer value identifying this existencias espumillas.
     * @type number
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasEspumillas
     * @memberof ApiexistenciasEspumillasApiapiexistenciasEspumillasUpdate
     */
    data: ExistenciasEspumillas
}

export class ObjectApiexistenciasEspumillasApi {
    private api: ObservableApiexistenciasEspumillasApi

    public constructor(configuration: Configuration, requestFactory?: ApiexistenciasEspumillasApiRequestFactory, responseProcessor?: ApiexistenciasEspumillasApiResponseProcessor) {
        this.api = new ObservableApiexistenciasEspumillasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasCreateWithHttpInfo(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasCreateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        return this.api.apiexistenciasEspumillasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasCreate(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasCreateRequest, options?: Configuration): Promise<ExistenciasEspumillas> {
        return this.api.apiexistenciasEspumillasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasDeleteWithHttpInfo(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiexistenciasEspumillasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasDelete(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiexistenciasEspumillasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasListWithHttpInfo(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ExistenciasEspumillas>>> {
        return this.api.apiexistenciasEspumillasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasList(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasListRequest = {}, options?: Configuration): Promise<Array<ExistenciasEspumillas>> {
        return this.api.apiexistenciasEspumillasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasPartialUpdateWithHttpInfo(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        return this.api.apiexistenciasEspumillasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasPartialUpdate(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasPartialUpdateRequest, options?: Configuration): Promise<ExistenciasEspumillas> {
        return this.api.apiexistenciasEspumillasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasReadWithHttpInfo(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasReadRequest, options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        return this.api.apiexistenciasEspumillasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasRead(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasReadRequest, options?: Configuration): Promise<ExistenciasEspumillas> {
        return this.api.apiexistenciasEspumillasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasUpdateWithHttpInfo(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        return this.api.apiexistenciasEspumillasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasEspumillasUpdate(param: ApiexistenciasEspumillasApiApiexistenciasEspumillasUpdateRequest, options?: Configuration): Promise<ExistenciasEspumillas> {
        return this.api.apiexistenciasEspumillasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiexistenciasMaterialesApi } from "./ObservableAPI";
import { ApiexistenciasMaterialesApiRequestFactory, ApiexistenciasMaterialesApiResponseProcessor} from "../apis/ApiexistenciasMaterialesApi";

export interface ApiexistenciasMaterialesApiApiexistenciasMaterialesCreateRequest {
    /**
     * 
     * @type ExistenciasMateriales
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesCreate
     */
    data: ExistenciasMateriales
}

export interface ApiexistenciasMaterialesApiApiexistenciasMaterialesDeleteRequest {
    /**
     * A unique integer value identifying this existencias materiales.
     * @type number
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesDelete
     */
    id: number
}

export interface ApiexistenciasMaterialesApiApiexistenciasMaterialesListRequest {
}

export interface ApiexistenciasMaterialesApiApiexistenciasMaterialesPartialUpdateRequest {
    /**
     * A unique integer value identifying this existencias materiales.
     * @type number
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesPartialUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasMateriales
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesPartialUpdate
     */
    data: ExistenciasMateriales
}

export interface ApiexistenciasMaterialesApiApiexistenciasMaterialesReadRequest {
    /**
     * A unique integer value identifying this existencias materiales.
     * @type number
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesRead
     */
    id: number
}

export interface ApiexistenciasMaterialesApiApiexistenciasMaterialesUpdateRequest {
    /**
     * A unique integer value identifying this existencias materiales.
     * @type number
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasMateriales
     * @memberof ApiexistenciasMaterialesApiapiexistenciasMaterialesUpdate
     */
    data: ExistenciasMateriales
}

export class ObjectApiexistenciasMaterialesApi {
    private api: ObservableApiexistenciasMaterialesApi

    public constructor(configuration: Configuration, requestFactory?: ApiexistenciasMaterialesApiRequestFactory, responseProcessor?: ApiexistenciasMaterialesApiResponseProcessor) {
        this.api = new ObservableApiexistenciasMaterialesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesCreateWithHttpInfo(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesCreateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        return this.api.apiexistenciasMaterialesCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesCreate(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesCreateRequest, options?: Configuration): Promise<ExistenciasMateriales> {
        return this.api.apiexistenciasMaterialesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesDeleteWithHttpInfo(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiexistenciasMaterialesDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesDelete(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiexistenciasMaterialesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesListWithHttpInfo(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ExistenciasMateriales>>> {
        return this.api.apiexistenciasMaterialesListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesList(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesListRequest = {}, options?: Configuration): Promise<Array<ExistenciasMateriales>> {
        return this.api.apiexistenciasMaterialesList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesPartialUpdateWithHttpInfo(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        return this.api.apiexistenciasMaterialesPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesPartialUpdate(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesPartialUpdateRequest, options?: Configuration): Promise<ExistenciasMateriales> {
        return this.api.apiexistenciasMaterialesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesReadWithHttpInfo(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesReadRequest, options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        return this.api.apiexistenciasMaterialesReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesRead(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesReadRequest, options?: Configuration): Promise<ExistenciasMateriales> {
        return this.api.apiexistenciasMaterialesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesUpdateWithHttpInfo(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        return this.api.apiexistenciasMaterialesUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasMaterialesUpdate(param: ApiexistenciasMaterialesApiApiexistenciasMaterialesUpdateRequest, options?: Configuration): Promise<ExistenciasMateriales> {
        return this.api.apiexistenciasMaterialesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiexistenciasProductosApi } from "./ObservableAPI";
import { ApiexistenciasProductosApiRequestFactory, ApiexistenciasProductosApiResponseProcessor} from "../apis/ApiexistenciasProductosApi";

export interface ApiexistenciasProductosApiApiexistenciasProductosCreateRequest {
    /**
     * 
     * @type ExistenciasProductos
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosCreate
     */
    data: ExistenciasProductos
}

export interface ApiexistenciasProductosApiApiexistenciasProductosDeleteRequest {
    /**
     * A unique integer value identifying this existencias productos.
     * @type number
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosDelete
     */
    id: number
}

export interface ApiexistenciasProductosApiApiexistenciasProductosListRequest {
}

export interface ApiexistenciasProductosApiApiexistenciasProductosPartialUpdateRequest {
    /**
     * A unique integer value identifying this existencias productos.
     * @type number
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosPartialUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasProductos
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosPartialUpdate
     */
    data: ExistenciasProductos
}

export interface ApiexistenciasProductosApiApiexistenciasProductosReadRequest {
    /**
     * A unique integer value identifying this existencias productos.
     * @type number
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosRead
     */
    id: number
}

export interface ApiexistenciasProductosApiApiexistenciasProductosUpdateRequest {
    /**
     * A unique integer value identifying this existencias productos.
     * @type number
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasProductos
     * @memberof ApiexistenciasProductosApiapiexistenciasProductosUpdate
     */
    data: ExistenciasProductos
}

export class ObjectApiexistenciasProductosApi {
    private api: ObservableApiexistenciasProductosApi

    public constructor(configuration: Configuration, requestFactory?: ApiexistenciasProductosApiRequestFactory, responseProcessor?: ApiexistenciasProductosApiResponseProcessor) {
        this.api = new ObservableApiexistenciasProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosCreateWithHttpInfo(param: ApiexistenciasProductosApiApiexistenciasProductosCreateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        return this.api.apiexistenciasProductosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosCreate(param: ApiexistenciasProductosApiApiexistenciasProductosCreateRequest, options?: Configuration): Promise<ExistenciasProductos> {
        return this.api.apiexistenciasProductosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosDeleteWithHttpInfo(param: ApiexistenciasProductosApiApiexistenciasProductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiexistenciasProductosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosDelete(param: ApiexistenciasProductosApiApiexistenciasProductosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiexistenciasProductosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosListWithHttpInfo(param: ApiexistenciasProductosApiApiexistenciasProductosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ExistenciasProductos>>> {
        return this.api.apiexistenciasProductosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosList(param: ApiexistenciasProductosApiApiexistenciasProductosListRequest = {}, options?: Configuration): Promise<Array<ExistenciasProductos>> {
        return this.api.apiexistenciasProductosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosPartialUpdateWithHttpInfo(param: ApiexistenciasProductosApiApiexistenciasProductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        return this.api.apiexistenciasProductosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosPartialUpdate(param: ApiexistenciasProductosApiApiexistenciasProductosPartialUpdateRequest, options?: Configuration): Promise<ExistenciasProductos> {
        return this.api.apiexistenciasProductosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosReadWithHttpInfo(param: ApiexistenciasProductosApiApiexistenciasProductosReadRequest, options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        return this.api.apiexistenciasProductosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosRead(param: ApiexistenciasProductosApiApiexistenciasProductosReadRequest, options?: Configuration): Promise<ExistenciasProductos> {
        return this.api.apiexistenciasProductosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosUpdateWithHttpInfo(param: ApiexistenciasProductosApiApiexistenciasProductosUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        return this.api.apiexistenciasProductosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasProductosUpdate(param: ApiexistenciasProductosApiApiexistenciasProductosUpdateRequest, options?: Configuration): Promise<ExistenciasProductos> {
        return this.api.apiexistenciasProductosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiexistenciasTelasColoresApi } from "./ObservableAPI";
import { ApiexistenciasTelasColoresApiRequestFactory, ApiexistenciasTelasColoresApiResponseProcessor} from "../apis/ApiexistenciasTelasColoresApi";

export interface ApiexistenciasTelasColoresApiApiexistenciasTelasColoresCreateRequest {
    /**
     * 
     * @type ExistenciasTelasColores
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresCreate
     */
    data: ExistenciasTelasColores
}

export interface ApiexistenciasTelasColoresApiApiexistenciasTelasColoresDeleteRequest {
    /**
     * A unique integer value identifying this existencias telas colores.
     * @type number
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresDelete
     */
    id: number
}

export interface ApiexistenciasTelasColoresApiApiexistenciasTelasColoresListRequest {
}

export interface ApiexistenciasTelasColoresApiApiexistenciasTelasColoresPartialUpdateRequest {
    /**
     * A unique integer value identifying this existencias telas colores.
     * @type number
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresPartialUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasTelasColores
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresPartialUpdate
     */
    data: ExistenciasTelasColores
}

export interface ApiexistenciasTelasColoresApiApiexistenciasTelasColoresReadRequest {
    /**
     * A unique integer value identifying this existencias telas colores.
     * @type number
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresRead
     */
    id: number
}

export interface ApiexistenciasTelasColoresApiApiexistenciasTelasColoresUpdateRequest {
    /**
     * A unique integer value identifying this existencias telas colores.
     * @type number
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresUpdate
     */
    id: number
    /**
     * 
     * @type ExistenciasTelasColores
     * @memberof ApiexistenciasTelasColoresApiapiexistenciasTelasColoresUpdate
     */
    data: ExistenciasTelasColores
}

export class ObjectApiexistenciasTelasColoresApi {
    private api: ObservableApiexistenciasTelasColoresApi

    public constructor(configuration: Configuration, requestFactory?: ApiexistenciasTelasColoresApiRequestFactory, responseProcessor?: ApiexistenciasTelasColoresApiResponseProcessor) {
        this.api = new ObservableApiexistenciasTelasColoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresCreateWithHttpInfo(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresCreateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        return this.api.apiexistenciasTelasColoresCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresCreate(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresCreateRequest, options?: Configuration): Promise<ExistenciasTelasColores> {
        return this.api.apiexistenciasTelasColoresCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresDeleteWithHttpInfo(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiexistenciasTelasColoresDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresDelete(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiexistenciasTelasColoresDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresListWithHttpInfo(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ExistenciasTelasColores>>> {
        return this.api.apiexistenciasTelasColoresListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresList(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresListRequest = {}, options?: Configuration): Promise<Array<ExistenciasTelasColores>> {
        return this.api.apiexistenciasTelasColoresList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresPartialUpdateWithHttpInfo(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        return this.api.apiexistenciasTelasColoresPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresPartialUpdate(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresPartialUpdateRequest, options?: Configuration): Promise<ExistenciasTelasColores> {
        return this.api.apiexistenciasTelasColoresPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresReadWithHttpInfo(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresReadRequest, options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        return this.api.apiexistenciasTelasColoresReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresRead(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresReadRequest, options?: Configuration): Promise<ExistenciasTelasColores> {
        return this.api.apiexistenciasTelasColoresRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresUpdateWithHttpInfo(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresUpdateRequest, options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        return this.api.apiexistenciasTelasColoresUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiexistenciasTelasColoresUpdate(param: ApiexistenciasTelasColoresApiApiexistenciasTelasColoresUpdateRequest, options?: Configuration): Promise<ExistenciasTelasColores> {
        return this.api.apiexistenciasTelasColoresUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApipagosApi } from "./ObservableAPI";
import { ApipagosApiRequestFactory, ApipagosApiResponseProcessor} from "../apis/ApipagosApi";

export interface ApipagosApiApipagosCreateRequest {
    /**
     * 
     * @type Pagos
     * @memberof ApipagosApiapipagosCreate
     */
    data: Pagos
}

export interface ApipagosApiApipagosDeleteRequest {
    /**
     * A unique integer value identifying this pagos.
     * @type number
     * @memberof ApipagosApiapipagosDelete
     */
    id: number
}

export interface ApipagosApiApipagosListRequest {
}

export interface ApipagosApiApipagosPartialUpdateRequest {
    /**
     * A unique integer value identifying this pagos.
     * @type number
     * @memberof ApipagosApiapipagosPartialUpdate
     */
    id: number
    /**
     * 
     * @type Pagos
     * @memberof ApipagosApiapipagosPartialUpdate
     */
    data: Pagos
}

export interface ApipagosApiApipagosReadRequest {
    /**
     * A unique integer value identifying this pagos.
     * @type number
     * @memberof ApipagosApiapipagosRead
     */
    id: number
}

export interface ApipagosApiApipagosUpdateRequest {
    /**
     * A unique integer value identifying this pagos.
     * @type number
     * @memberof ApipagosApiapipagosUpdate
     */
    id: number
    /**
     * 
     * @type Pagos
     * @memberof ApipagosApiapipagosUpdate
     */
    data: Pagos
}

export class ObjectApipagosApi {
    private api: ObservableApipagosApi

    public constructor(configuration: Configuration, requestFactory?: ApipagosApiRequestFactory, responseProcessor?: ApipagosApiResponseProcessor) {
        this.api = new ObservableApipagosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apipagosCreateWithHttpInfo(param: ApipagosApiApipagosCreateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosCreate(param: ApipagosApiApipagosCreateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosDeleteWithHttpInfo(param: ApipagosApiApipagosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apipagosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosDelete(param: ApipagosApiApipagosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apipagosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosListWithHttpInfo(param: ApipagosApiApipagosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Pagos>>> {
        return this.api.apipagosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosList(param: ApipagosApiApipagosListRequest = {}, options?: Configuration): Promise<Array<Pagos>> {
        return this.api.apipagosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosPartialUpdateWithHttpInfo(param: ApipagosApiApipagosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosPartialUpdate(param: ApipagosApiApipagosPartialUpdateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosReadWithHttpInfo(param: ApipagosApiApipagosReadRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosRead(param: ApipagosApiApipagosReadRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosUpdateWithHttpInfo(param: ApipagosApiApipagosUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.apipagosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apipagosUpdate(param: ApipagosApiApipagosUpdateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.apipagosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiproductosApi } from "./ObservableAPI";
import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor} from "../apis/ApiproductosApi";

export interface ApiproductosApiApiproductosCreateRequest {
    /**
     * 
     * @type Productos
     * @memberof ApiproductosApiapiproductosCreate
     */
    data: Productos
}

export interface ApiproductosApiApiproductosDeleteRequest {
    /**
     * A unique integer value identifying this productos.
     * @type number
     * @memberof ApiproductosApiapiproductosDelete
     */
    id: number
}

export interface ApiproductosApiApiproductosListRequest {
}

export interface ApiproductosApiApiproductosPartialUpdateRequest {
    /**
     * A unique integer value identifying this productos.
     * @type number
     * @memberof ApiproductosApiapiproductosPartialUpdate
     */
    id: number
    /**
     * 
     * @type Productos
     * @memberof ApiproductosApiapiproductosPartialUpdate
     */
    data: Productos
}

export interface ApiproductosApiApiproductosReadRequest {
    /**
     * A unique integer value identifying this productos.
     * @type number
     * @memberof ApiproductosApiapiproductosRead
     */
    id: number
}

export interface ApiproductosApiApiproductosUpdateRequest {
    /**
     * A unique integer value identifying this productos.
     * @type number
     * @memberof ApiproductosApiapiproductosUpdate
     */
    id: number
    /**
     * 
     * @type Productos
     * @memberof ApiproductosApiapiproductosUpdate
     */
    data: Productos
}

export class ObjectApiproductosApi {
    private api: ObservableApiproductosApi

    public constructor(configuration: Configuration, requestFactory?: ApiproductosApiRequestFactory, responseProcessor?: ApiproductosApiResponseProcessor) {
        this.api = new ObservableApiproductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiproductosCreateWithHttpInfo(param: ApiproductosApiApiproductosCreateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosCreate(param: ApiproductosApiApiproductosCreateRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosDeleteWithHttpInfo(param: ApiproductosApiApiproductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiproductosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosDelete(param: ApiproductosApiApiproductosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiproductosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosListWithHttpInfo(param: ApiproductosApiApiproductosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Productos>>> {
        return this.api.apiproductosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosList(param: ApiproductosApiApiproductosListRequest = {}, options?: Configuration): Promise<Array<Productos>> {
        return this.api.apiproductosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosPartialUpdateWithHttpInfo(param: ApiproductosApiApiproductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosPartialUpdate(param: ApiproductosApiApiproductosPartialUpdateRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosReadWithHttpInfo(param: ApiproductosApiApiproductosReadRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosRead(param: ApiproductosApiApiproductosReadRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosUpdateWithHttpInfo(param: ApiproductosApiApiproductosUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.apiproductosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiproductosUpdate(param: ApiproductosApiApiproductosUpdateRequest, options?: Configuration): Promise<Productos> {
        return this.api.apiproductosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApitelasColoresApi } from "./ObservableAPI";
import { ApitelasColoresApiRequestFactory, ApitelasColoresApiResponseProcessor} from "../apis/ApitelasColoresApi";

export interface ApitelasColoresApiApitelasColoresCreateRequest {
    /**
     * 
     * @type TelasColores
     * @memberof ApitelasColoresApiapitelasColoresCreate
     */
    data: TelasColores
}

export interface ApitelasColoresApiApitelasColoresDeleteRequest {
    /**
     * A unique integer value identifying this telas colores.
     * @type number
     * @memberof ApitelasColoresApiapitelasColoresDelete
     */
    id: number
}

export interface ApitelasColoresApiApitelasColoresListRequest {
}

export interface ApitelasColoresApiApitelasColoresPartialUpdateRequest {
    /**
     * A unique integer value identifying this telas colores.
     * @type number
     * @memberof ApitelasColoresApiapitelasColoresPartialUpdate
     */
    id: number
    /**
     * 
     * @type TelasColores
     * @memberof ApitelasColoresApiapitelasColoresPartialUpdate
     */
    data: TelasColores
}

export interface ApitelasColoresApiApitelasColoresReadRequest {
    /**
     * A unique integer value identifying this telas colores.
     * @type number
     * @memberof ApitelasColoresApiapitelasColoresRead
     */
    id: number
}

export interface ApitelasColoresApiApitelasColoresUpdateRequest {
    /**
     * A unique integer value identifying this telas colores.
     * @type number
     * @memberof ApitelasColoresApiapitelasColoresUpdate
     */
    id: number
    /**
     * 
     * @type TelasColores
     * @memberof ApitelasColoresApiapitelasColoresUpdate
     */
    data: TelasColores
}

export class ObjectApitelasColoresApi {
    private api: ObservableApitelasColoresApi

    public constructor(configuration: Configuration, requestFactory?: ApitelasColoresApiRequestFactory, responseProcessor?: ApitelasColoresApiResponseProcessor) {
        this.api = new ObservableApitelasColoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apitelasColoresCreateWithHttpInfo(param: ApitelasColoresApiApitelasColoresCreateRequest, options?: Configuration): Promise<HttpInfo<TelasColores>> {
        return this.api.apitelasColoresCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresCreate(param: ApitelasColoresApiApitelasColoresCreateRequest, options?: Configuration): Promise<TelasColores> {
        return this.api.apitelasColoresCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresDeleteWithHttpInfo(param: ApitelasColoresApiApitelasColoresDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apitelasColoresDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresDelete(param: ApitelasColoresApiApitelasColoresDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apitelasColoresDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresListWithHttpInfo(param: ApitelasColoresApiApitelasColoresListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TelasColores>>> {
        return this.api.apitelasColoresListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresList(param: ApitelasColoresApiApitelasColoresListRequest = {}, options?: Configuration): Promise<Array<TelasColores>> {
        return this.api.apitelasColoresList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresPartialUpdateWithHttpInfo(param: ApitelasColoresApiApitelasColoresPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<TelasColores>> {
        return this.api.apitelasColoresPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresPartialUpdate(param: ApitelasColoresApiApitelasColoresPartialUpdateRequest, options?: Configuration): Promise<TelasColores> {
        return this.api.apitelasColoresPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresReadWithHttpInfo(param: ApitelasColoresApiApitelasColoresReadRequest, options?: Configuration): Promise<HttpInfo<TelasColores>> {
        return this.api.apitelasColoresReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresRead(param: ApitelasColoresApiApitelasColoresReadRequest, options?: Configuration): Promise<TelasColores> {
        return this.api.apitelasColoresRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresUpdateWithHttpInfo(param: ApitelasColoresApiApitelasColoresUpdateRequest, options?: Configuration): Promise<HttpInfo<TelasColores>> {
        return this.api.apitelasColoresUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitelasColoresUpdate(param: ApitelasColoresApiApitelasColoresUpdateRequest, options?: Configuration): Promise<TelasColores> {
        return this.api.apitelasColoresUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApitiposEspumillasApi } from "./ObservableAPI";
import { ApitiposEspumillasApiRequestFactory, ApitiposEspumillasApiResponseProcessor} from "../apis/ApitiposEspumillasApi";

export interface ApitiposEspumillasApiApitiposEspumillasCreateRequest {
    /**
     * 
     * @type TiposEspumillas
     * @memberof ApitiposEspumillasApiapitiposEspumillasCreate
     */
    data: TiposEspumillas
}

export interface ApitiposEspumillasApiApitiposEspumillasDeleteRequest {
    /**
     * A unique integer value identifying this tipos espumillas.
     * @type number
     * @memberof ApitiposEspumillasApiapitiposEspumillasDelete
     */
    id: number
}

export interface ApitiposEspumillasApiApitiposEspumillasListRequest {
}

export interface ApitiposEspumillasApiApitiposEspumillasPartialUpdateRequest {
    /**
     * A unique integer value identifying this tipos espumillas.
     * @type number
     * @memberof ApitiposEspumillasApiapitiposEspumillasPartialUpdate
     */
    id: number
    /**
     * 
     * @type TiposEspumillas
     * @memberof ApitiposEspumillasApiapitiposEspumillasPartialUpdate
     */
    data: TiposEspumillas
}

export interface ApitiposEspumillasApiApitiposEspumillasReadRequest {
    /**
     * A unique integer value identifying this tipos espumillas.
     * @type number
     * @memberof ApitiposEspumillasApiapitiposEspumillasRead
     */
    id: number
}

export interface ApitiposEspumillasApiApitiposEspumillasUpdateRequest {
    /**
     * A unique integer value identifying this tipos espumillas.
     * @type number
     * @memberof ApitiposEspumillasApiapitiposEspumillasUpdate
     */
    id: number
    /**
     * 
     * @type TiposEspumillas
     * @memberof ApitiposEspumillasApiapitiposEspumillasUpdate
     */
    data: TiposEspumillas
}

export class ObjectApitiposEspumillasApi {
    private api: ObservableApitiposEspumillasApi

    public constructor(configuration: Configuration, requestFactory?: ApitiposEspumillasApiRequestFactory, responseProcessor?: ApitiposEspumillasApiResponseProcessor) {
        this.api = new ObservableApitiposEspumillasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasCreateWithHttpInfo(param: ApitiposEspumillasApiApitiposEspumillasCreateRequest, options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        return this.api.apitiposEspumillasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasCreate(param: ApitiposEspumillasApiApitiposEspumillasCreateRequest, options?: Configuration): Promise<TiposEspumillas> {
        return this.api.apitiposEspumillasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasDeleteWithHttpInfo(param: ApitiposEspumillasApiApitiposEspumillasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apitiposEspumillasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasDelete(param: ApitiposEspumillasApiApitiposEspumillasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apitiposEspumillasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasListWithHttpInfo(param: ApitiposEspumillasApiApitiposEspumillasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TiposEspumillas>>> {
        return this.api.apitiposEspumillasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasList(param: ApitiposEspumillasApiApitiposEspumillasListRequest = {}, options?: Configuration): Promise<Array<TiposEspumillas>> {
        return this.api.apitiposEspumillasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasPartialUpdateWithHttpInfo(param: ApitiposEspumillasApiApitiposEspumillasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        return this.api.apitiposEspumillasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasPartialUpdate(param: ApitiposEspumillasApiApitiposEspumillasPartialUpdateRequest, options?: Configuration): Promise<TiposEspumillas> {
        return this.api.apitiposEspumillasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasReadWithHttpInfo(param: ApitiposEspumillasApiApitiposEspumillasReadRequest, options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        return this.api.apitiposEspumillasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasRead(param: ApitiposEspumillasApiApitiposEspumillasReadRequest, options?: Configuration): Promise<TiposEspumillas> {
        return this.api.apitiposEspumillasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasUpdateWithHttpInfo(param: ApitiposEspumillasApiApitiposEspumillasUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        return this.api.apitiposEspumillasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposEspumillasUpdate(param: ApitiposEspumillasApiApitiposEspumillasUpdateRequest, options?: Configuration): Promise<TiposEspumillas> {
        return this.api.apitiposEspumillasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApitiposMaterialesApi } from "./ObservableAPI";
import { ApitiposMaterialesApiRequestFactory, ApitiposMaterialesApiResponseProcessor} from "../apis/ApitiposMaterialesApi";

export interface ApitiposMaterialesApiApitiposMaterialesCreateRequest {
    /**
     * 
     * @type TiposMateriales
     * @memberof ApitiposMaterialesApiapitiposMaterialesCreate
     */
    data: TiposMateriales
}

export interface ApitiposMaterialesApiApitiposMaterialesDeleteRequest {
    /**
     * A unique integer value identifying this tipos materiales.
     * @type number
     * @memberof ApitiposMaterialesApiapitiposMaterialesDelete
     */
    id: number
}

export interface ApitiposMaterialesApiApitiposMaterialesListRequest {
}

export interface ApitiposMaterialesApiApitiposMaterialesPartialUpdateRequest {
    /**
     * A unique integer value identifying this tipos materiales.
     * @type number
     * @memberof ApitiposMaterialesApiapitiposMaterialesPartialUpdate
     */
    id: number
    /**
     * 
     * @type TiposMateriales
     * @memberof ApitiposMaterialesApiapitiposMaterialesPartialUpdate
     */
    data: TiposMateriales
}

export interface ApitiposMaterialesApiApitiposMaterialesReadRequest {
    /**
     * A unique integer value identifying this tipos materiales.
     * @type number
     * @memberof ApitiposMaterialesApiapitiposMaterialesRead
     */
    id: number
}

export interface ApitiposMaterialesApiApitiposMaterialesUpdateRequest {
    /**
     * A unique integer value identifying this tipos materiales.
     * @type number
     * @memberof ApitiposMaterialesApiapitiposMaterialesUpdate
     */
    id: number
    /**
     * 
     * @type TiposMateriales
     * @memberof ApitiposMaterialesApiapitiposMaterialesUpdate
     */
    data: TiposMateriales
}

export class ObjectApitiposMaterialesApi {
    private api: ObservableApitiposMaterialesApi

    public constructor(configuration: Configuration, requestFactory?: ApitiposMaterialesApiRequestFactory, responseProcessor?: ApitiposMaterialesApiResponseProcessor) {
        this.api = new ObservableApitiposMaterialesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesCreateWithHttpInfo(param: ApitiposMaterialesApiApitiposMaterialesCreateRequest, options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        return this.api.apitiposMaterialesCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesCreate(param: ApitiposMaterialesApiApitiposMaterialesCreateRequest, options?: Configuration): Promise<TiposMateriales> {
        return this.api.apitiposMaterialesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesDeleteWithHttpInfo(param: ApitiposMaterialesApiApitiposMaterialesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apitiposMaterialesDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesDelete(param: ApitiposMaterialesApiApitiposMaterialesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apitiposMaterialesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesListWithHttpInfo(param: ApitiposMaterialesApiApitiposMaterialesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TiposMateriales>>> {
        return this.api.apitiposMaterialesListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesList(param: ApitiposMaterialesApiApitiposMaterialesListRequest = {}, options?: Configuration): Promise<Array<TiposMateriales>> {
        return this.api.apitiposMaterialesList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesPartialUpdateWithHttpInfo(param: ApitiposMaterialesApiApitiposMaterialesPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        return this.api.apitiposMaterialesPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesPartialUpdate(param: ApitiposMaterialesApiApitiposMaterialesPartialUpdateRequest, options?: Configuration): Promise<TiposMateriales> {
        return this.api.apitiposMaterialesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesReadWithHttpInfo(param: ApitiposMaterialesApiApitiposMaterialesReadRequest, options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        return this.api.apitiposMaterialesReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesRead(param: ApitiposMaterialesApiApitiposMaterialesReadRequest, options?: Configuration): Promise<TiposMateriales> {
        return this.api.apitiposMaterialesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesUpdateWithHttpInfo(param: ApitiposMaterialesApiApitiposMaterialesUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        return this.api.apitiposMaterialesUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposMaterialesUpdate(param: ApitiposMaterialesApiApitiposMaterialesUpdateRequest, options?: Configuration): Promise<TiposMateriales> {
        return this.api.apitiposMaterialesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApitiposProductosApi } from "./ObservableAPI";
import { ApitiposProductosApiRequestFactory, ApitiposProductosApiResponseProcessor} from "../apis/ApitiposProductosApi";

export interface ApitiposProductosApiApitiposProductosCreateRequest {
    /**
     * 
     * @type TiposProductos
     * @memberof ApitiposProductosApiapitiposProductosCreate
     */
    data: TiposProductos
}

export interface ApitiposProductosApiApitiposProductosDeleteRequest {
    /**
     * A unique integer value identifying this tipos productos.
     * @type number
     * @memberof ApitiposProductosApiapitiposProductosDelete
     */
    id: number
}

export interface ApitiposProductosApiApitiposProductosListRequest {
}

export interface ApitiposProductosApiApitiposProductosPartialUpdateRequest {
    /**
     * A unique integer value identifying this tipos productos.
     * @type number
     * @memberof ApitiposProductosApiapitiposProductosPartialUpdate
     */
    id: number
    /**
     * 
     * @type TiposProductos
     * @memberof ApitiposProductosApiapitiposProductosPartialUpdate
     */
    data: TiposProductos
}

export interface ApitiposProductosApiApitiposProductosReadRequest {
    /**
     * A unique integer value identifying this tipos productos.
     * @type number
     * @memberof ApitiposProductosApiapitiposProductosRead
     */
    id: number
}

export interface ApitiposProductosApiApitiposProductosUpdateRequest {
    /**
     * A unique integer value identifying this tipos productos.
     * @type number
     * @memberof ApitiposProductosApiapitiposProductosUpdate
     */
    id: number
    /**
     * 
     * @type TiposProductos
     * @memberof ApitiposProductosApiapitiposProductosUpdate
     */
    data: TiposProductos
}

export class ObjectApitiposProductosApi {
    private api: ObservableApitiposProductosApi

    public constructor(configuration: Configuration, requestFactory?: ApitiposProductosApiRequestFactory, responseProcessor?: ApitiposProductosApiResponseProcessor) {
        this.api = new ObservableApitiposProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apitiposProductosCreateWithHttpInfo(param: ApitiposProductosApiApitiposProductosCreateRequest, options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        return this.api.apitiposProductosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosCreate(param: ApitiposProductosApiApitiposProductosCreateRequest, options?: Configuration): Promise<TiposProductos> {
        return this.api.apitiposProductosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosDeleteWithHttpInfo(param: ApitiposProductosApiApitiposProductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apitiposProductosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosDelete(param: ApitiposProductosApiApitiposProductosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apitiposProductosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosListWithHttpInfo(param: ApitiposProductosApiApitiposProductosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TiposProductos>>> {
        return this.api.apitiposProductosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosList(param: ApitiposProductosApiApitiposProductosListRequest = {}, options?: Configuration): Promise<Array<TiposProductos>> {
        return this.api.apitiposProductosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosPartialUpdateWithHttpInfo(param: ApitiposProductosApiApitiposProductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        return this.api.apitiposProductosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosPartialUpdate(param: ApitiposProductosApiApitiposProductosPartialUpdateRequest, options?: Configuration): Promise<TiposProductos> {
        return this.api.apitiposProductosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosReadWithHttpInfo(param: ApitiposProductosApiApitiposProductosReadRequest, options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        return this.api.apitiposProductosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosRead(param: ApitiposProductosApiApitiposProductosReadRequest, options?: Configuration): Promise<TiposProductos> {
        return this.api.apitiposProductosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosUpdateWithHttpInfo(param: ApitiposProductosApiApitiposProductosUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        return this.api.apitiposProductosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposProductosUpdate(param: ApitiposProductosApiApitiposProductosUpdateRequest, options?: Configuration): Promise<TiposProductos> {
        return this.api.apitiposProductosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApitiposTelasApi } from "./ObservableAPI";
import { ApitiposTelasApiRequestFactory, ApitiposTelasApiResponseProcessor} from "../apis/ApitiposTelasApi";

export interface ApitiposTelasApiApitiposTelasCreateRequest {
    /**
     * 
     * @type TiposTelas
     * @memberof ApitiposTelasApiapitiposTelasCreate
     */
    data: TiposTelas
}

export interface ApitiposTelasApiApitiposTelasDeleteRequest {
    /**
     * A unique integer value identifying this tipos telas.
     * @type number
     * @memberof ApitiposTelasApiapitiposTelasDelete
     */
    id: number
}

export interface ApitiposTelasApiApitiposTelasListRequest {
}

export interface ApitiposTelasApiApitiposTelasPartialUpdateRequest {
    /**
     * A unique integer value identifying this tipos telas.
     * @type number
     * @memberof ApitiposTelasApiapitiposTelasPartialUpdate
     */
    id: number
    /**
     * 
     * @type TiposTelas
     * @memberof ApitiposTelasApiapitiposTelasPartialUpdate
     */
    data: TiposTelas
}

export interface ApitiposTelasApiApitiposTelasReadRequest {
    /**
     * A unique integer value identifying this tipos telas.
     * @type number
     * @memberof ApitiposTelasApiapitiposTelasRead
     */
    id: number
}

export interface ApitiposTelasApiApitiposTelasUpdateRequest {
    /**
     * A unique integer value identifying this tipos telas.
     * @type number
     * @memberof ApitiposTelasApiapitiposTelasUpdate
     */
    id: number
    /**
     * 
     * @type TiposTelas
     * @memberof ApitiposTelasApiapitiposTelasUpdate
     */
    data: TiposTelas
}

export class ObjectApitiposTelasApi {
    private api: ObservableApitiposTelasApi

    public constructor(configuration: Configuration, requestFactory?: ApitiposTelasApiRequestFactory, responseProcessor?: ApitiposTelasApiResponseProcessor) {
        this.api = new ObservableApitiposTelasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apitiposTelasCreateWithHttpInfo(param: ApitiposTelasApiApitiposTelasCreateRequest, options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        return this.api.apitiposTelasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasCreate(param: ApitiposTelasApiApitiposTelasCreateRequest, options?: Configuration): Promise<TiposTelas> {
        return this.api.apitiposTelasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasDeleteWithHttpInfo(param: ApitiposTelasApiApitiposTelasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apitiposTelasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasDelete(param: ApitiposTelasApiApitiposTelasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apitiposTelasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasListWithHttpInfo(param: ApitiposTelasApiApitiposTelasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TiposTelas>>> {
        return this.api.apitiposTelasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasList(param: ApitiposTelasApiApitiposTelasListRequest = {}, options?: Configuration): Promise<Array<TiposTelas>> {
        return this.api.apitiposTelasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasPartialUpdateWithHttpInfo(param: ApitiposTelasApiApitiposTelasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        return this.api.apitiposTelasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasPartialUpdate(param: ApitiposTelasApiApitiposTelasPartialUpdateRequest, options?: Configuration): Promise<TiposTelas> {
        return this.api.apitiposTelasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasReadWithHttpInfo(param: ApitiposTelasApiApitiposTelasReadRequest, options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        return this.api.apitiposTelasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasRead(param: ApitiposTelasApiApitiposTelasReadRequest, options?: Configuration): Promise<TiposTelas> {
        return this.api.apitiposTelasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasUpdateWithHttpInfo(param: ApitiposTelasApiApitiposTelasUpdateRequest, options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        return this.api.apitiposTelasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apitiposTelasUpdate(param: ApitiposTelasApiApitiposTelasUpdateRequest, options?: Configuration): Promise<TiposTelas> {
        return this.api.apitiposTelasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiusersApi } from "./ObservableAPI";
import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor} from "../apis/ApiusersApi";

export interface ApiusersApiApiusersCreateRequest {
    /**
     * 
     * @type User
     * @memberof ApiusersApiapiusersCreate
     */
    data: User
}

export interface ApiusersApiApiusersDeleteRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersDelete
     */
    id: number
}

export interface ApiusersApiApiusersListRequest {
}

export interface ApiusersApiApiusersPartialUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersPartialUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof ApiusersApiapiusersPartialUpdate
     */
    data: User
}

export interface ApiusersApiApiusersReadRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersRead
     */
    id: number
}

export interface ApiusersApiApiusersUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiusersApiapiusersUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof ApiusersApiapiusersUpdate
     */
    data: User
}

export class ObjectApiusersApi {
    private api: ObservableApiusersApi

    public constructor(configuration: Configuration, requestFactory?: ApiusersApiRequestFactory, responseProcessor?: ApiusersApiResponseProcessor) {
        this.api = new ObservableApiusersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiusersCreateWithHttpInfo(param: ApiusersApiApiusersCreateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersCreate(param: ApiusersApiApiusersCreateRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersDeleteWithHttpInfo(param: ApiusersApiApiusersDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiusersDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersDelete(param: ApiusersApiApiusersDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiusersDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersListWithHttpInfo(param: ApiusersApiApiusersListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<User>>> {
        return this.api.apiusersListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersList(param: ApiusersApiApiusersListRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.apiusersList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersPartialUpdateWithHttpInfo(param: ApiusersApiApiusersPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersPartialUpdate(param: ApiusersApiApiusersPartialUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersReadWithHttpInfo(param: ApiusersApiApiusersReadRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersRead(param: ApiusersApiApiusersReadRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersUpdateWithHttpInfo(param: ApiusersApiApiusersUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiusersUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiusersUpdate(param: ApiusersApiApiusersUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.apiusersUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiventasApi } from "./ObservableAPI";
import { ApiventasApiRequestFactory, ApiventasApiResponseProcessor} from "../apis/ApiventasApi";

export interface ApiventasApiApiventasCreateRequest {
    /**
     * 
     * @type Ventas
     * @memberof ApiventasApiapiventasCreate
     */
    data: Ventas
}

export interface ApiventasApiApiventasDeleteRequest {
    /**
     * A unique integer value identifying this ventas.
     * @type number
     * @memberof ApiventasApiapiventasDelete
     */
    id: number
}

export interface ApiventasApiApiventasListRequest {
}

export interface ApiventasApiApiventasPartialUpdateRequest {
    /**
     * A unique integer value identifying this ventas.
     * @type number
     * @memberof ApiventasApiapiventasPartialUpdate
     */
    id: number
    /**
     * 
     * @type Ventas
     * @memberof ApiventasApiapiventasPartialUpdate
     */
    data: Ventas
}

export interface ApiventasApiApiventasReadRequest {
    /**
     * A unique integer value identifying this ventas.
     * @type number
     * @memberof ApiventasApiapiventasRead
     */
    id: number
}

export interface ApiventasApiApiventasUpdateRequest {
    /**
     * A unique integer value identifying this ventas.
     * @type number
     * @memberof ApiventasApiapiventasUpdate
     */
    id: number
    /**
     * 
     * @type Ventas
     * @memberof ApiventasApiapiventasUpdate
     */
    data: Ventas
}

export class ObjectApiventasApi {
    private api: ObservableApiventasApi

    public constructor(configuration: Configuration, requestFactory?: ApiventasApiRequestFactory, responseProcessor?: ApiventasApiResponseProcessor) {
        this.api = new ObservableApiventasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiventasCreateWithHttpInfo(param: ApiventasApiApiventasCreateRequest, options?: Configuration): Promise<HttpInfo<Ventas>> {
        return this.api.apiventasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasCreate(param: ApiventasApiApiventasCreateRequest, options?: Configuration): Promise<Ventas> {
        return this.api.apiventasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasDeleteWithHttpInfo(param: ApiventasApiApiventasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiventasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasDelete(param: ApiventasApiApiventasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiventasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasListWithHttpInfo(param: ApiventasApiApiventasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Ventas>>> {
        return this.api.apiventasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasList(param: ApiventasApiApiventasListRequest = {}, options?: Configuration): Promise<Array<Ventas>> {
        return this.api.apiventasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasPartialUpdateWithHttpInfo(param: ApiventasApiApiventasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Ventas>> {
        return this.api.apiventasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasPartialUpdate(param: ApiventasApiApiventasPartialUpdateRequest, options?: Configuration): Promise<Ventas> {
        return this.api.apiventasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasReadWithHttpInfo(param: ApiventasApiApiventasReadRequest, options?: Configuration): Promise<HttpInfo<Ventas>> {
        return this.api.apiventasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasRead(param: ApiventasApiApiventasReadRequest, options?: Configuration): Promise<Ventas> {
        return this.api.apiventasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasUpdateWithHttpInfo(param: ApiventasApiApiventasUpdateRequest, options?: Configuration): Promise<HttpInfo<Ventas>> {
        return this.api.apiventasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasUpdate(param: ApiventasApiApiventasUpdateRequest, options?: Configuration): Promise<Ventas> {
        return this.api.apiventasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableApiventasProductosApi } from "./ObservableAPI";
import { ApiventasProductosApiRequestFactory, ApiventasProductosApiResponseProcessor} from "../apis/ApiventasProductosApi";

export interface ApiventasProductosApiApiventasProductosCreateRequest {
    /**
     * 
     * @type VentasProductos
     * @memberof ApiventasProductosApiapiventasProductosCreate
     */
    data: VentasProductos
}

export interface ApiventasProductosApiApiventasProductosDeleteRequest {
    /**
     * A unique integer value identifying this ventas productos.
     * @type number
     * @memberof ApiventasProductosApiapiventasProductosDelete
     */
    id: number
}

export interface ApiventasProductosApiApiventasProductosListRequest {
}

export interface ApiventasProductosApiApiventasProductosPartialUpdateRequest {
    /**
     * A unique integer value identifying this ventas productos.
     * @type number
     * @memberof ApiventasProductosApiapiventasProductosPartialUpdate
     */
    id: number
    /**
     * 
     * @type VentasProductos
     * @memberof ApiventasProductosApiapiventasProductosPartialUpdate
     */
    data: VentasProductos
}

export interface ApiventasProductosApiApiventasProductosReadRequest {
    /**
     * A unique integer value identifying this ventas productos.
     * @type number
     * @memberof ApiventasProductosApiapiventasProductosRead
     */
    id: number
}

export interface ApiventasProductosApiApiventasProductosUpdateRequest {
    /**
     * A unique integer value identifying this ventas productos.
     * @type number
     * @memberof ApiventasProductosApiapiventasProductosUpdate
     */
    id: number
    /**
     * 
     * @type VentasProductos
     * @memberof ApiventasProductosApiapiventasProductosUpdate
     */
    data: VentasProductos
}

export class ObjectApiventasProductosApi {
    private api: ObservableApiventasProductosApi

    public constructor(configuration: Configuration, requestFactory?: ApiventasProductosApiRequestFactory, responseProcessor?: ApiventasProductosApiResponseProcessor) {
        this.api = new ObservableApiventasProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiventasProductosCreateWithHttpInfo(param: ApiventasProductosApiApiventasProductosCreateRequest, options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        return this.api.apiventasProductosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosCreate(param: ApiventasProductosApiApiventasProductosCreateRequest, options?: Configuration): Promise<VentasProductos> {
        return this.api.apiventasProductosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosDeleteWithHttpInfo(param: ApiventasProductosApiApiventasProductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiventasProductosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosDelete(param: ApiventasProductosApiApiventasProductosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiventasProductosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosListWithHttpInfo(param: ApiventasProductosApiApiventasProductosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<VentasProductos>>> {
        return this.api.apiventasProductosListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosList(param: ApiventasProductosApiApiventasProductosListRequest = {}, options?: Configuration): Promise<Array<VentasProductos>> {
        return this.api.apiventasProductosList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosPartialUpdateWithHttpInfo(param: ApiventasProductosApiApiventasProductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        return this.api.apiventasProductosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosPartialUpdate(param: ApiventasProductosApiApiventasProductosPartialUpdateRequest, options?: Configuration): Promise<VentasProductos> {
        return this.api.apiventasProductosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosReadWithHttpInfo(param: ApiventasProductosApiApiventasProductosReadRequest, options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        return this.api.apiventasProductosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosRead(param: ApiventasProductosApiApiventasProductosReadRequest, options?: Configuration): Promise<VentasProductos> {
        return this.api.apiventasProductosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosUpdateWithHttpInfo(param: ApiventasProductosApiApiventasProductosUpdateRequest, options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        return this.api.apiventasProductosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiventasProductosUpdate(param: ApiventasProductosApiApiventasProductosUpdateRequest, options?: Configuration): Promise<VentasProductos> {
        return this.api.apiventasProductosUpdate(param.id, param.data,  options).toPromise();
    }

}
