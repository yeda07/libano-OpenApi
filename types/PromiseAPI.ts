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
import { ObservableApiabonosApi } from './ObservableAPI';

import { ApiabonosApiRequestFactory, ApiabonosApiResponseProcessor} from "../apis/ApiabonosApi";
export class PromiseApiabonosApi {
    private api: ObservableApiabonosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiabonosApiRequestFactory,
        responseProcessor?: ApiabonosApiResponseProcessor
    ) {
        this.api = new ObservableApiabonosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiabonosCreateWithHttpInfo(data: Abonos, _options?: Configuration): Promise<HttpInfo<Abonos>> {
        const result = this.api.apiabonosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiabonosCreate(data: Abonos, _options?: Configuration): Promise<Abonos> {
        const result = this.api.apiabonosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiabonosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiabonosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiabonosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Abonos>>> {
        const result = this.api.apiabonosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiabonosList(_options?: Configuration): Promise<Array<Abonos>> {
        const result = this.api.apiabonosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosPartialUpdateWithHttpInfo(id: number, data: Abonos, _options?: Configuration): Promise<HttpInfo<Abonos>> {
        const result = this.api.apiabonosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosPartialUpdate(id: number, data: Abonos, _options?: Configuration): Promise<Abonos> {
        const result = this.api.apiabonosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Abonos>> {
        const result = this.api.apiabonosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     */
    public apiabonosRead(id: number, _options?: Configuration): Promise<Abonos> {
        const result = this.api.apiabonosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosUpdateWithHttpInfo(id: number, data: Abonos, _options?: Configuration): Promise<HttpInfo<Abonos>> {
        const result = this.api.apiabonosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this abonos.
     * @param data 
     */
    public apiabonosUpdate(id: number, data: Abonos, _options?: Configuration): Promise<Abonos> {
        const result = this.api.apiabonosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiauthApi } from './ObservableAPI';

import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";
export class PromiseApiauthApi {
    private api: ObservableApiauthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiauthApiRequestFactory,
        responseProcessor?: ApiauthApiResponseProcessor
    ) {
        this.api = new ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Promise<HttpInfo<TokenObtainPair>> {
        const result = this.api.apiauthLoginCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Promise<TokenObtainPair> {
        const result = this.api.apiauthLoginCreate(data, _options);
        return result.toPromise();
    }

    /**
     */
    public apiauthMeListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiauthMeListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiauthMeList(_options?: Configuration): Promise<void> {
        const result = this.api.apiauthMeList(_options);
        return result.toPromise();
    }


}



import { ObservableApicoloresApi } from './ObservableAPI';

import { ApicoloresApiRequestFactory, ApicoloresApiResponseProcessor} from "../apis/ApicoloresApi";
export class PromiseApicoloresApi {
    private api: ObservableApicoloresApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicoloresApiRequestFactory,
        responseProcessor?: ApicoloresApiResponseProcessor
    ) {
        this.api = new ObservableApicoloresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicoloresCreateWithHttpInfo(data: Colores, _options?: Configuration): Promise<HttpInfo<Colores>> {
        const result = this.api.apicoloresCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicoloresCreate(data: Colores, _options?: Configuration): Promise<Colores> {
        const result = this.api.apicoloresCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicoloresDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicoloresDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicoloresListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Colores>>> {
        const result = this.api.apicoloresListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicoloresList(_options?: Configuration): Promise<Array<Colores>> {
        const result = this.api.apicoloresList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresPartialUpdateWithHttpInfo(id: number, data: Colores, _options?: Configuration): Promise<HttpInfo<Colores>> {
        const result = this.api.apicoloresPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresPartialUpdate(id: number, data: Colores, _options?: Configuration): Promise<Colores> {
        const result = this.api.apicoloresPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Colores>> {
        const result = this.api.apicoloresReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     */
    public apicoloresRead(id: number, _options?: Configuration): Promise<Colores> {
        const result = this.api.apicoloresRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresUpdateWithHttpInfo(id: number, data: Colores, _options?: Configuration): Promise<HttpInfo<Colores>> {
        const result = this.api.apicoloresUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this colores.
     * @param data 
     */
    public apicoloresUpdate(id: number, data: Colores, _options?: Configuration): Promise<Colores> {
        const result = this.api.apicoloresUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApicomprasApi } from './ObservableAPI';

import { ApicomprasApiRequestFactory, ApicomprasApiResponseProcessor} from "../apis/ApicomprasApi";
export class PromiseApicomprasApi {
    private api: ObservableApicomprasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasApiRequestFactory,
        responseProcessor?: ApicomprasApiResponseProcessor
    ) {
        this.api = new ObservableApicomprasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicomprasCreateWithHttpInfo(data: Compras, _options?: Configuration): Promise<HttpInfo<Compras>> {
        const result = this.api.apicomprasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicomprasCreate(data: Compras, _options?: Configuration): Promise<Compras> {
        const result = this.api.apicomprasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicomprasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicomprasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Compras>>> {
        const result = this.api.apicomprasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasList(_options?: Configuration): Promise<Array<Compras>> {
        const result = this.api.apicomprasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasPartialUpdateWithHttpInfo(id: number, data: Compras, _options?: Configuration): Promise<HttpInfo<Compras>> {
        const result = this.api.apicomprasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasPartialUpdate(id: number, data: Compras, _options?: Configuration): Promise<Compras> {
        const result = this.api.apicomprasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Compras>> {
        const result = this.api.apicomprasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     */
    public apicomprasRead(id: number, _options?: Configuration): Promise<Compras> {
        const result = this.api.apicomprasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasUpdateWithHttpInfo(id: number, data: Compras, _options?: Configuration): Promise<HttpInfo<Compras>> {
        const result = this.api.apicomprasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras.
     * @param data 
     */
    public apicomprasUpdate(id: number, data: Compras, _options?: Configuration): Promise<Compras> {
        const result = this.api.apicomprasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApicomprasTelasColoresApi } from './ObservableAPI';

import { ApicomprasTelasColoresApiRequestFactory, ApicomprasTelasColoresApiResponseProcessor} from "../apis/ApicomprasTelasColoresApi";
export class PromiseApicomprasTelasColoresApi {
    private api: ObservableApicomprasTelasColoresApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasTelasColoresApiRequestFactory,
        responseProcessor?: ApicomprasTelasColoresApiResponseProcessor
    ) {
        this.api = new ObservableApicomprasTelasColoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicomprasTelasColoresCreateWithHttpInfo(data: ComprasTelasColores, _options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        const result = this.api.apicomprasTelasColoresCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicomprasTelasColoresCreate(data: ComprasTelasColores, _options?: Configuration): Promise<ComprasTelasColores> {
        const result = this.api.apicomprasTelasColoresCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicomprasTelasColoresDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicomprasTelasColoresDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasTelasColoresListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ComprasTelasColores>>> {
        const result = this.api.apicomprasTelasColoresListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasTelasColoresList(_options?: Configuration): Promise<Array<ComprasTelasColores>> {
        const result = this.api.apicomprasTelasColoresList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresPartialUpdateWithHttpInfo(id: number, data: ComprasTelasColores, _options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        const result = this.api.apicomprasTelasColoresPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresPartialUpdate(id: number, data: ComprasTelasColores, _options?: Configuration): Promise<ComprasTelasColores> {
        const result = this.api.apicomprasTelasColoresPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        const result = this.api.apicomprasTelasColoresReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     */
    public apicomprasTelasColoresRead(id: number, _options?: Configuration): Promise<ComprasTelasColores> {
        const result = this.api.apicomprasTelasColoresRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresUpdateWithHttpInfo(id: number, data: ComprasTelasColores, _options?: Configuration): Promise<HttpInfo<ComprasTelasColores>> {
        const result = this.api.apicomprasTelasColoresUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras telas colores.
     * @param data 
     */
    public apicomprasTelasColoresUpdate(id: number, data: ComprasTelasColores, _options?: Configuration): Promise<ComprasTelasColores> {
        const result = this.api.apicomprasTelasColoresUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApicomprasTiposEspumillasApi } from './ObservableAPI';

import { ApicomprasTiposEspumillasApiRequestFactory, ApicomprasTiposEspumillasApiResponseProcessor} from "../apis/ApicomprasTiposEspumillasApi";
export class PromiseApicomprasTiposEspumillasApi {
    private api: ObservableApicomprasTiposEspumillasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasTiposEspumillasApiRequestFactory,
        responseProcessor?: ApicomprasTiposEspumillasApiResponseProcessor
    ) {
        this.api = new ObservableApicomprasTiposEspumillasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicomprasTiposEspumillasCreateWithHttpInfo(data: ComprasTiposEspumillas, _options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        const result = this.api.apicomprasTiposEspumillasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicomprasTiposEspumillasCreate(data: ComprasTiposEspumillas, _options?: Configuration): Promise<ComprasTiposEspumillas> {
        const result = this.api.apicomprasTiposEspumillasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicomprasTiposEspumillasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicomprasTiposEspumillasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasTiposEspumillasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ComprasTiposEspumillas>>> {
        const result = this.api.apicomprasTiposEspumillasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasTiposEspumillasList(_options?: Configuration): Promise<Array<ComprasTiposEspumillas>> {
        const result = this.api.apicomprasTiposEspumillasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasPartialUpdateWithHttpInfo(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        const result = this.api.apicomprasTiposEspumillasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasPartialUpdate(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Promise<ComprasTiposEspumillas> {
        const result = this.api.apicomprasTiposEspumillasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        const result = this.api.apicomprasTiposEspumillasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     */
    public apicomprasTiposEspumillasRead(id: number, _options?: Configuration): Promise<ComprasTiposEspumillas> {
        const result = this.api.apicomprasTiposEspumillasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasUpdateWithHttpInfo(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Promise<HttpInfo<ComprasTiposEspumillas>> {
        const result = this.api.apicomprasTiposEspumillasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos espumillas.
     * @param data 
     */
    public apicomprasTiposEspumillasUpdate(id: number, data: ComprasTiposEspumillas, _options?: Configuration): Promise<ComprasTiposEspumillas> {
        const result = this.api.apicomprasTiposEspumillasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApicomprasTiposMaterialesApi } from './ObservableAPI';

import { ApicomprasTiposMaterialesApiRequestFactory, ApicomprasTiposMaterialesApiResponseProcessor} from "../apis/ApicomprasTiposMaterialesApi";
export class PromiseApicomprasTiposMaterialesApi {
    private api: ObservableApicomprasTiposMaterialesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicomprasTiposMaterialesApiRequestFactory,
        responseProcessor?: ApicomprasTiposMaterialesApiResponseProcessor
    ) {
        this.api = new ObservableApicomprasTiposMaterialesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicomprasTiposMaterialesCreateWithHttpInfo(data: ComprasTiposMateriales, _options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        const result = this.api.apicomprasTiposMaterialesCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicomprasTiposMaterialesCreate(data: ComprasTiposMateriales, _options?: Configuration): Promise<ComprasTiposMateriales> {
        const result = this.api.apicomprasTiposMaterialesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicomprasTiposMaterialesDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicomprasTiposMaterialesDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasTiposMaterialesListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ComprasTiposMateriales>>> {
        const result = this.api.apicomprasTiposMaterialesListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicomprasTiposMaterialesList(_options?: Configuration): Promise<Array<ComprasTiposMateriales>> {
        const result = this.api.apicomprasTiposMaterialesList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesPartialUpdateWithHttpInfo(id: number, data: ComprasTiposMateriales, _options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        const result = this.api.apicomprasTiposMaterialesPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesPartialUpdate(id: number, data: ComprasTiposMateriales, _options?: Configuration): Promise<ComprasTiposMateriales> {
        const result = this.api.apicomprasTiposMaterialesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        const result = this.api.apicomprasTiposMaterialesReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     */
    public apicomprasTiposMaterialesRead(id: number, _options?: Configuration): Promise<ComprasTiposMateriales> {
        const result = this.api.apicomprasTiposMaterialesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesUpdateWithHttpInfo(id: number, data: ComprasTiposMateriales, _options?: Configuration): Promise<HttpInfo<ComprasTiposMateriales>> {
        const result = this.api.apicomprasTiposMaterialesUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this compras tipos materiales.
     * @param data 
     */
    public apicomprasTiposMaterialesUpdate(id: number, data: ComprasTiposMateriales, _options?: Configuration): Promise<ComprasTiposMateriales> {
        const result = this.api.apicomprasTiposMaterialesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApicreditosApi } from './ObservableAPI';

import { ApicreditosApiRequestFactory, ApicreditosApiResponseProcessor} from "../apis/ApicreditosApi";
export class PromiseApicreditosApi {
    private api: ObservableApicreditosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApicreditosApiRequestFactory,
        responseProcessor?: ApicreditosApiResponseProcessor
    ) {
        this.api = new ObservableApicreditosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apicreditosCreateWithHttpInfo(data: Creditos, _options?: Configuration): Promise<HttpInfo<Creditos>> {
        const result = this.api.apicreditosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apicreditosCreate(data: Creditos, _options?: Configuration): Promise<Creditos> {
        const result = this.api.apicreditosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apicreditosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apicreditosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apicreditosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Creditos>>> {
        const result = this.api.apicreditosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apicreditosList(_options?: Configuration): Promise<Array<Creditos>> {
        const result = this.api.apicreditosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosPartialUpdateWithHttpInfo(id: number, data: Creditos, _options?: Configuration): Promise<HttpInfo<Creditos>> {
        const result = this.api.apicreditosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosPartialUpdate(id: number, data: Creditos, _options?: Configuration): Promise<Creditos> {
        const result = this.api.apicreditosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Creditos>> {
        const result = this.api.apicreditosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     */
    public apicreditosRead(id: number, _options?: Configuration): Promise<Creditos> {
        const result = this.api.apicreditosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosUpdateWithHttpInfo(id: number, data: Creditos, _options?: Configuration): Promise<HttpInfo<Creditos>> {
        const result = this.api.apicreditosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this creditos.
     * @param data 
     */
    public apicreditosUpdate(id: number, data: Creditos, _options?: Configuration): Promise<Creditos> {
        const result = this.api.apicreditosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApidetallesNoTapizadosApi } from './ObservableAPI';

import { ApidetallesNoTapizadosApiRequestFactory, ApidetallesNoTapizadosApiResponseProcessor} from "../apis/ApidetallesNoTapizadosApi";
export class PromiseApidetallesNoTapizadosApi {
    private api: ObservableApidetallesNoTapizadosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetallesNoTapizadosApiRequestFactory,
        responseProcessor?: ApidetallesNoTapizadosApiResponseProcessor
    ) {
        this.api = new ObservableApidetallesNoTapizadosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apidetallesNoTapizadosCreateWithHttpInfo(data: DetallesNoTapizados, _options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        const result = this.api.apidetallesNoTapizadosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apidetallesNoTapizadosCreate(data: DetallesNoTapizados, _options?: Configuration): Promise<DetallesNoTapizados> {
        const result = this.api.apidetallesNoTapizadosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apidetallesNoTapizadosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apidetallesNoTapizadosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apidetallesNoTapizadosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetallesNoTapizados>>> {
        const result = this.api.apidetallesNoTapizadosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apidetallesNoTapizadosList(_options?: Configuration): Promise<Array<DetallesNoTapizados>> {
        const result = this.api.apidetallesNoTapizadosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosPartialUpdateWithHttpInfo(id: number, data: DetallesNoTapizados, _options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        const result = this.api.apidetallesNoTapizadosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosPartialUpdate(id: number, data: DetallesNoTapizados, _options?: Configuration): Promise<DetallesNoTapizados> {
        const result = this.api.apidetallesNoTapizadosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        const result = this.api.apidetallesNoTapizadosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     */
    public apidetallesNoTapizadosRead(id: number, _options?: Configuration): Promise<DetallesNoTapizados> {
        const result = this.api.apidetallesNoTapizadosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosUpdateWithHttpInfo(id: number, data: DetallesNoTapizados, _options?: Configuration): Promise<HttpInfo<DetallesNoTapizados>> {
        const result = this.api.apidetallesNoTapizadosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles no tapizados.
     * @param data 
     */
    public apidetallesNoTapizadosUpdate(id: number, data: DetallesNoTapizados, _options?: Configuration): Promise<DetallesNoTapizados> {
        const result = this.api.apidetallesNoTapizadosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApidetallesTapizadosApi } from './ObservableAPI';

import { ApidetallesTapizadosApiRequestFactory, ApidetallesTapizadosApiResponseProcessor} from "../apis/ApidetallesTapizadosApi";
export class PromiseApidetallesTapizadosApi {
    private api: ObservableApidetallesTapizadosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApidetallesTapizadosApiRequestFactory,
        responseProcessor?: ApidetallesTapizadosApiResponseProcessor
    ) {
        this.api = new ObservableApidetallesTapizadosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apidetallesTapizadosCreateWithHttpInfo(data: DetallesTapizados, _options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        const result = this.api.apidetallesTapizadosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apidetallesTapizadosCreate(data: DetallesTapizados, _options?: Configuration): Promise<DetallesTapizados> {
        const result = this.api.apidetallesTapizadosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apidetallesTapizadosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apidetallesTapizadosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apidetallesTapizadosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetallesTapizados>>> {
        const result = this.api.apidetallesTapizadosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apidetallesTapizadosList(_options?: Configuration): Promise<Array<DetallesTapizados>> {
        const result = this.api.apidetallesTapizadosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosPartialUpdateWithHttpInfo(id: number, data: DetallesTapizados, _options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        const result = this.api.apidetallesTapizadosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosPartialUpdate(id: number, data: DetallesTapizados, _options?: Configuration): Promise<DetallesTapizados> {
        const result = this.api.apidetallesTapizadosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        const result = this.api.apidetallesTapizadosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     */
    public apidetallesTapizadosRead(id: number, _options?: Configuration): Promise<DetallesTapizados> {
        const result = this.api.apidetallesTapizadosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosUpdateWithHttpInfo(id: number, data: DetallesTapizados, _options?: Configuration): Promise<HttpInfo<DetallesTapizados>> {
        const result = this.api.apidetallesTapizadosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalles tapizados.
     * @param data 
     */
    public apidetallesTapizadosUpdate(id: number, data: DetallesTapizados, _options?: Configuration): Promise<DetallesTapizados> {
        const result = this.api.apidetallesTapizadosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiexistenciasEspumillasApi } from './ObservableAPI';

import { ApiexistenciasEspumillasApiRequestFactory, ApiexistenciasEspumillasApiResponseProcessor} from "../apis/ApiexistenciasEspumillasApi";
export class PromiseApiexistenciasEspumillasApi {
    private api: ObservableApiexistenciasEspumillasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasEspumillasApiRequestFactory,
        responseProcessor?: ApiexistenciasEspumillasApiResponseProcessor
    ) {
        this.api = new ObservableApiexistenciasEspumillasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiexistenciasEspumillasCreateWithHttpInfo(data: ExistenciasEspumillas, _options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        const result = this.api.apiexistenciasEspumillasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiexistenciasEspumillasCreate(data: ExistenciasEspumillas, _options?: Configuration): Promise<ExistenciasEspumillas> {
        const result = this.api.apiexistenciasEspumillasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiexistenciasEspumillasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiexistenciasEspumillasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasEspumillasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ExistenciasEspumillas>>> {
        const result = this.api.apiexistenciasEspumillasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasEspumillasList(_options?: Configuration): Promise<Array<ExistenciasEspumillas>> {
        const result = this.api.apiexistenciasEspumillasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasPartialUpdateWithHttpInfo(id: number, data: ExistenciasEspumillas, _options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        const result = this.api.apiexistenciasEspumillasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasPartialUpdate(id: number, data: ExistenciasEspumillas, _options?: Configuration): Promise<ExistenciasEspumillas> {
        const result = this.api.apiexistenciasEspumillasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        const result = this.api.apiexistenciasEspumillasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     */
    public apiexistenciasEspumillasRead(id: number, _options?: Configuration): Promise<ExistenciasEspumillas> {
        const result = this.api.apiexistenciasEspumillasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasUpdateWithHttpInfo(id: number, data: ExistenciasEspumillas, _options?: Configuration): Promise<HttpInfo<ExistenciasEspumillas>> {
        const result = this.api.apiexistenciasEspumillasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias espumillas.
     * @param data 
     */
    public apiexistenciasEspumillasUpdate(id: number, data: ExistenciasEspumillas, _options?: Configuration): Promise<ExistenciasEspumillas> {
        const result = this.api.apiexistenciasEspumillasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiexistenciasMaterialesApi } from './ObservableAPI';

import { ApiexistenciasMaterialesApiRequestFactory, ApiexistenciasMaterialesApiResponseProcessor} from "../apis/ApiexistenciasMaterialesApi";
export class PromiseApiexistenciasMaterialesApi {
    private api: ObservableApiexistenciasMaterialesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasMaterialesApiRequestFactory,
        responseProcessor?: ApiexistenciasMaterialesApiResponseProcessor
    ) {
        this.api = new ObservableApiexistenciasMaterialesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiexistenciasMaterialesCreateWithHttpInfo(data: ExistenciasMateriales, _options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        const result = this.api.apiexistenciasMaterialesCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiexistenciasMaterialesCreate(data: ExistenciasMateriales, _options?: Configuration): Promise<ExistenciasMateriales> {
        const result = this.api.apiexistenciasMaterialesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiexistenciasMaterialesDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiexistenciasMaterialesDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasMaterialesListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ExistenciasMateriales>>> {
        const result = this.api.apiexistenciasMaterialesListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasMaterialesList(_options?: Configuration): Promise<Array<ExistenciasMateriales>> {
        const result = this.api.apiexistenciasMaterialesList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesPartialUpdateWithHttpInfo(id: number, data: ExistenciasMateriales, _options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        const result = this.api.apiexistenciasMaterialesPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesPartialUpdate(id: number, data: ExistenciasMateriales, _options?: Configuration): Promise<ExistenciasMateriales> {
        const result = this.api.apiexistenciasMaterialesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        const result = this.api.apiexistenciasMaterialesReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     */
    public apiexistenciasMaterialesRead(id: number, _options?: Configuration): Promise<ExistenciasMateriales> {
        const result = this.api.apiexistenciasMaterialesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesUpdateWithHttpInfo(id: number, data: ExistenciasMateriales, _options?: Configuration): Promise<HttpInfo<ExistenciasMateriales>> {
        const result = this.api.apiexistenciasMaterialesUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias materiales.
     * @param data 
     */
    public apiexistenciasMaterialesUpdate(id: number, data: ExistenciasMateriales, _options?: Configuration): Promise<ExistenciasMateriales> {
        const result = this.api.apiexistenciasMaterialesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiexistenciasProductosApi } from './ObservableAPI';

import { ApiexistenciasProductosApiRequestFactory, ApiexistenciasProductosApiResponseProcessor} from "../apis/ApiexistenciasProductosApi";
export class PromiseApiexistenciasProductosApi {
    private api: ObservableApiexistenciasProductosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasProductosApiRequestFactory,
        responseProcessor?: ApiexistenciasProductosApiResponseProcessor
    ) {
        this.api = new ObservableApiexistenciasProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiexistenciasProductosCreateWithHttpInfo(data: ExistenciasProductos, _options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        const result = this.api.apiexistenciasProductosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiexistenciasProductosCreate(data: ExistenciasProductos, _options?: Configuration): Promise<ExistenciasProductos> {
        const result = this.api.apiexistenciasProductosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiexistenciasProductosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiexistenciasProductosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasProductosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ExistenciasProductos>>> {
        const result = this.api.apiexistenciasProductosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasProductosList(_options?: Configuration): Promise<Array<ExistenciasProductos>> {
        const result = this.api.apiexistenciasProductosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosPartialUpdateWithHttpInfo(id: number, data: ExistenciasProductos, _options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        const result = this.api.apiexistenciasProductosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosPartialUpdate(id: number, data: ExistenciasProductos, _options?: Configuration): Promise<ExistenciasProductos> {
        const result = this.api.apiexistenciasProductosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        const result = this.api.apiexistenciasProductosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     */
    public apiexistenciasProductosRead(id: number, _options?: Configuration): Promise<ExistenciasProductos> {
        const result = this.api.apiexistenciasProductosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosUpdateWithHttpInfo(id: number, data: ExistenciasProductos, _options?: Configuration): Promise<HttpInfo<ExistenciasProductos>> {
        const result = this.api.apiexistenciasProductosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias productos.
     * @param data 
     */
    public apiexistenciasProductosUpdate(id: number, data: ExistenciasProductos, _options?: Configuration): Promise<ExistenciasProductos> {
        const result = this.api.apiexistenciasProductosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiexistenciasTelasColoresApi } from './ObservableAPI';

import { ApiexistenciasTelasColoresApiRequestFactory, ApiexistenciasTelasColoresApiResponseProcessor} from "../apis/ApiexistenciasTelasColoresApi";
export class PromiseApiexistenciasTelasColoresApi {
    private api: ObservableApiexistenciasTelasColoresApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiexistenciasTelasColoresApiRequestFactory,
        responseProcessor?: ApiexistenciasTelasColoresApiResponseProcessor
    ) {
        this.api = new ObservableApiexistenciasTelasColoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiexistenciasTelasColoresCreateWithHttpInfo(data: ExistenciasTelasColores, _options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        const result = this.api.apiexistenciasTelasColoresCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiexistenciasTelasColoresCreate(data: ExistenciasTelasColores, _options?: Configuration): Promise<ExistenciasTelasColores> {
        const result = this.api.apiexistenciasTelasColoresCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiexistenciasTelasColoresDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiexistenciasTelasColoresDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasTelasColoresListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ExistenciasTelasColores>>> {
        const result = this.api.apiexistenciasTelasColoresListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiexistenciasTelasColoresList(_options?: Configuration): Promise<Array<ExistenciasTelasColores>> {
        const result = this.api.apiexistenciasTelasColoresList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresPartialUpdateWithHttpInfo(id: number, data: ExistenciasTelasColores, _options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        const result = this.api.apiexistenciasTelasColoresPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresPartialUpdate(id: number, data: ExistenciasTelasColores, _options?: Configuration): Promise<ExistenciasTelasColores> {
        const result = this.api.apiexistenciasTelasColoresPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        const result = this.api.apiexistenciasTelasColoresReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     */
    public apiexistenciasTelasColoresRead(id: number, _options?: Configuration): Promise<ExistenciasTelasColores> {
        const result = this.api.apiexistenciasTelasColoresRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresUpdateWithHttpInfo(id: number, data: ExistenciasTelasColores, _options?: Configuration): Promise<HttpInfo<ExistenciasTelasColores>> {
        const result = this.api.apiexistenciasTelasColoresUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this existencias telas colores.
     * @param data 
     */
    public apiexistenciasTelasColoresUpdate(id: number, data: ExistenciasTelasColores, _options?: Configuration): Promise<ExistenciasTelasColores> {
        const result = this.api.apiexistenciasTelasColoresUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApipagosApi } from './ObservableAPI';

import { ApipagosApiRequestFactory, ApipagosApiResponseProcessor} from "../apis/ApipagosApi";
export class PromiseApipagosApi {
    private api: ObservableApipagosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApipagosApiRequestFactory,
        responseProcessor?: ApipagosApiResponseProcessor
    ) {
        this.api = new ObservableApipagosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apipagosCreateWithHttpInfo(data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apipagosCreate(data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apipagosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apipagosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apipagosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Pagos>>> {
        const result = this.api.apipagosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apipagosList(_options?: Configuration): Promise<Array<Pagos>> {
        const result = this.api.apipagosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosPartialUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     */
    public apipagosRead(id: number, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.apipagosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pagos.
     * @param data 
     */
    public apipagosUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.apipagosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiproductosApi } from './ObservableAPI';

import { ApiproductosApiRequestFactory, ApiproductosApiResponseProcessor} from "../apis/ApiproductosApi";
export class PromiseApiproductosApi {
    private api: ObservableApiproductosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiproductosApiRequestFactory,
        responseProcessor?: ApiproductosApiResponseProcessor
    ) {
        this.api = new ObservableApiproductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiproductosCreateWithHttpInfo(data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiproductosCreate(data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiproductosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiproductosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiproductosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Productos>>> {
        const result = this.api.apiproductosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiproductosList(_options?: Configuration): Promise<Array<Productos>> {
        const result = this.api.apiproductosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosPartialUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     */
    public apiproductosRead(id: number, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.apiproductosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this productos.
     * @param data 
     */
    public apiproductosUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.apiproductosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApitelasColoresApi } from './ObservableAPI';

import { ApitelasColoresApiRequestFactory, ApitelasColoresApiResponseProcessor} from "../apis/ApitelasColoresApi";
export class PromiseApitelasColoresApi {
    private api: ObservableApitelasColoresApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitelasColoresApiRequestFactory,
        responseProcessor?: ApitelasColoresApiResponseProcessor
    ) {
        this.api = new ObservableApitelasColoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apitelasColoresCreateWithHttpInfo(data: TelasColores, _options?: Configuration): Promise<HttpInfo<TelasColores>> {
        const result = this.api.apitelasColoresCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apitelasColoresCreate(data: TelasColores, _options?: Configuration): Promise<TelasColores> {
        const result = this.api.apitelasColoresCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apitelasColoresDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apitelasColoresDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apitelasColoresListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TelasColores>>> {
        const result = this.api.apitelasColoresListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apitelasColoresList(_options?: Configuration): Promise<Array<TelasColores>> {
        const result = this.api.apitelasColoresList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresPartialUpdateWithHttpInfo(id: number, data: TelasColores, _options?: Configuration): Promise<HttpInfo<TelasColores>> {
        const result = this.api.apitelasColoresPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresPartialUpdate(id: number, data: TelasColores, _options?: Configuration): Promise<TelasColores> {
        const result = this.api.apitelasColoresPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TelasColores>> {
        const result = this.api.apitelasColoresReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     */
    public apitelasColoresRead(id: number, _options?: Configuration): Promise<TelasColores> {
        const result = this.api.apitelasColoresRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresUpdateWithHttpInfo(id: number, data: TelasColores, _options?: Configuration): Promise<HttpInfo<TelasColores>> {
        const result = this.api.apitelasColoresUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this telas colores.
     * @param data 
     */
    public apitelasColoresUpdate(id: number, data: TelasColores, _options?: Configuration): Promise<TelasColores> {
        const result = this.api.apitelasColoresUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApitiposEspumillasApi } from './ObservableAPI';

import { ApitiposEspumillasApiRequestFactory, ApitiposEspumillasApiResponseProcessor} from "../apis/ApitiposEspumillasApi";
export class PromiseApitiposEspumillasApi {
    private api: ObservableApitiposEspumillasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposEspumillasApiRequestFactory,
        responseProcessor?: ApitiposEspumillasApiResponseProcessor
    ) {
        this.api = new ObservableApitiposEspumillasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apitiposEspumillasCreateWithHttpInfo(data: TiposEspumillas, _options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        const result = this.api.apitiposEspumillasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apitiposEspumillasCreate(data: TiposEspumillas, _options?: Configuration): Promise<TiposEspumillas> {
        const result = this.api.apitiposEspumillasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apitiposEspumillasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apitiposEspumillasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apitiposEspumillasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TiposEspumillas>>> {
        const result = this.api.apitiposEspumillasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apitiposEspumillasList(_options?: Configuration): Promise<Array<TiposEspumillas>> {
        const result = this.api.apitiposEspumillasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasPartialUpdateWithHttpInfo(id: number, data: TiposEspumillas, _options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        const result = this.api.apitiposEspumillasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasPartialUpdate(id: number, data: TiposEspumillas, _options?: Configuration): Promise<TiposEspumillas> {
        const result = this.api.apitiposEspumillasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        const result = this.api.apitiposEspumillasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     */
    public apitiposEspumillasRead(id: number, _options?: Configuration): Promise<TiposEspumillas> {
        const result = this.api.apitiposEspumillasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasUpdateWithHttpInfo(id: number, data: TiposEspumillas, _options?: Configuration): Promise<HttpInfo<TiposEspumillas>> {
        const result = this.api.apitiposEspumillasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos espumillas.
     * @param data 
     */
    public apitiposEspumillasUpdate(id: number, data: TiposEspumillas, _options?: Configuration): Promise<TiposEspumillas> {
        const result = this.api.apitiposEspumillasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApitiposMaterialesApi } from './ObservableAPI';

import { ApitiposMaterialesApiRequestFactory, ApitiposMaterialesApiResponseProcessor} from "../apis/ApitiposMaterialesApi";
export class PromiseApitiposMaterialesApi {
    private api: ObservableApitiposMaterialesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposMaterialesApiRequestFactory,
        responseProcessor?: ApitiposMaterialesApiResponseProcessor
    ) {
        this.api = new ObservableApitiposMaterialesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apitiposMaterialesCreateWithHttpInfo(data: TiposMateriales, _options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        const result = this.api.apitiposMaterialesCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apitiposMaterialesCreate(data: TiposMateriales, _options?: Configuration): Promise<TiposMateriales> {
        const result = this.api.apitiposMaterialesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apitiposMaterialesDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apitiposMaterialesDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apitiposMaterialesListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TiposMateriales>>> {
        const result = this.api.apitiposMaterialesListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apitiposMaterialesList(_options?: Configuration): Promise<Array<TiposMateriales>> {
        const result = this.api.apitiposMaterialesList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesPartialUpdateWithHttpInfo(id: number, data: TiposMateriales, _options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        const result = this.api.apitiposMaterialesPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesPartialUpdate(id: number, data: TiposMateriales, _options?: Configuration): Promise<TiposMateriales> {
        const result = this.api.apitiposMaterialesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        const result = this.api.apitiposMaterialesReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     */
    public apitiposMaterialesRead(id: number, _options?: Configuration): Promise<TiposMateriales> {
        const result = this.api.apitiposMaterialesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesUpdateWithHttpInfo(id: number, data: TiposMateriales, _options?: Configuration): Promise<HttpInfo<TiposMateriales>> {
        const result = this.api.apitiposMaterialesUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos materiales.
     * @param data 
     */
    public apitiposMaterialesUpdate(id: number, data: TiposMateriales, _options?: Configuration): Promise<TiposMateriales> {
        const result = this.api.apitiposMaterialesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApitiposProductosApi } from './ObservableAPI';

import { ApitiposProductosApiRequestFactory, ApitiposProductosApiResponseProcessor} from "../apis/ApitiposProductosApi";
export class PromiseApitiposProductosApi {
    private api: ObservableApitiposProductosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposProductosApiRequestFactory,
        responseProcessor?: ApitiposProductosApiResponseProcessor
    ) {
        this.api = new ObservableApitiposProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apitiposProductosCreateWithHttpInfo(data: TiposProductos, _options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        const result = this.api.apitiposProductosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apitiposProductosCreate(data: TiposProductos, _options?: Configuration): Promise<TiposProductos> {
        const result = this.api.apitiposProductosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apitiposProductosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apitiposProductosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apitiposProductosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TiposProductos>>> {
        const result = this.api.apitiposProductosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apitiposProductosList(_options?: Configuration): Promise<Array<TiposProductos>> {
        const result = this.api.apitiposProductosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosPartialUpdateWithHttpInfo(id: number, data: TiposProductos, _options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        const result = this.api.apitiposProductosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosPartialUpdate(id: number, data: TiposProductos, _options?: Configuration): Promise<TiposProductos> {
        const result = this.api.apitiposProductosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        const result = this.api.apitiposProductosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     */
    public apitiposProductosRead(id: number, _options?: Configuration): Promise<TiposProductos> {
        const result = this.api.apitiposProductosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosUpdateWithHttpInfo(id: number, data: TiposProductos, _options?: Configuration): Promise<HttpInfo<TiposProductos>> {
        const result = this.api.apitiposProductosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos productos.
     * @param data 
     */
    public apitiposProductosUpdate(id: number, data: TiposProductos, _options?: Configuration): Promise<TiposProductos> {
        const result = this.api.apitiposProductosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApitiposTelasApi } from './ObservableAPI';

import { ApitiposTelasApiRequestFactory, ApitiposTelasApiResponseProcessor} from "../apis/ApitiposTelasApi";
export class PromiseApitiposTelasApi {
    private api: ObservableApitiposTelasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApitiposTelasApiRequestFactory,
        responseProcessor?: ApitiposTelasApiResponseProcessor
    ) {
        this.api = new ObservableApitiposTelasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apitiposTelasCreateWithHttpInfo(data: TiposTelas, _options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        const result = this.api.apitiposTelasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apitiposTelasCreate(data: TiposTelas, _options?: Configuration): Promise<TiposTelas> {
        const result = this.api.apitiposTelasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apitiposTelasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apitiposTelasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apitiposTelasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TiposTelas>>> {
        const result = this.api.apitiposTelasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apitiposTelasList(_options?: Configuration): Promise<Array<TiposTelas>> {
        const result = this.api.apitiposTelasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasPartialUpdateWithHttpInfo(id: number, data: TiposTelas, _options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        const result = this.api.apitiposTelasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasPartialUpdate(id: number, data: TiposTelas, _options?: Configuration): Promise<TiposTelas> {
        const result = this.api.apitiposTelasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        const result = this.api.apitiposTelasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     */
    public apitiposTelasRead(id: number, _options?: Configuration): Promise<TiposTelas> {
        const result = this.api.apitiposTelasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasUpdateWithHttpInfo(id: number, data: TiposTelas, _options?: Configuration): Promise<HttpInfo<TiposTelas>> {
        const result = this.api.apitiposTelasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this tipos telas.
     * @param data 
     */
    public apitiposTelasUpdate(id: number, data: TiposTelas, _options?: Configuration): Promise<TiposTelas> {
        const result = this.api.apitiposTelasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiusersApi } from './ObservableAPI';

import { ApiusersApiRequestFactory, ApiusersApiResponseProcessor} from "../apis/ApiusersApi";
export class PromiseApiusersApi {
    private api: ObservableApiusersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiusersApiRequestFactory,
        responseProcessor?: ApiusersApiResponseProcessor
    ) {
        this.api = new ObservableApiusersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiusersCreateWithHttpInfo(data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiusersCreate(data: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiusersDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiusersDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiusersListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<User>>> {
        const result = this.api.apiusersListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiusersList(_options?: Configuration): Promise<Array<User>> {
        const result = this.api.apiusersList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersPartialUpdate(id: number, data: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiusersRead(id: number, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiusersUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public apiusersUpdate(id: number, data: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiusersUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiventasApi } from './ObservableAPI';

import { ApiventasApiRequestFactory, ApiventasApiResponseProcessor} from "../apis/ApiventasApi";
export class PromiseApiventasApi {
    private api: ObservableApiventasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiventasApiRequestFactory,
        responseProcessor?: ApiventasApiResponseProcessor
    ) {
        this.api = new ObservableApiventasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiventasCreateWithHttpInfo(data: Ventas, _options?: Configuration): Promise<HttpInfo<Ventas>> {
        const result = this.api.apiventasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiventasCreate(data: Ventas, _options?: Configuration): Promise<Ventas> {
        const result = this.api.apiventasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiventasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiventasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiventasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Ventas>>> {
        const result = this.api.apiventasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiventasList(_options?: Configuration): Promise<Array<Ventas>> {
        const result = this.api.apiventasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasPartialUpdateWithHttpInfo(id: number, data: Ventas, _options?: Configuration): Promise<HttpInfo<Ventas>> {
        const result = this.api.apiventasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasPartialUpdate(id: number, data: Ventas, _options?: Configuration): Promise<Ventas> {
        const result = this.api.apiventasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Ventas>> {
        const result = this.api.apiventasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     */
    public apiventasRead(id: number, _options?: Configuration): Promise<Ventas> {
        const result = this.api.apiventasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasUpdateWithHttpInfo(id: number, data: Ventas, _options?: Configuration): Promise<HttpInfo<Ventas>> {
        const result = this.api.apiventasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas.
     * @param data 
     */
    public apiventasUpdate(id: number, data: Ventas, _options?: Configuration): Promise<Ventas> {
        const result = this.api.apiventasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableApiventasProductosApi } from './ObservableAPI';

import { ApiventasProductosApiRequestFactory, ApiventasProductosApiResponseProcessor} from "../apis/ApiventasProductosApi";
export class PromiseApiventasProductosApi {
    private api: ObservableApiventasProductosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiventasProductosApiRequestFactory,
        responseProcessor?: ApiventasProductosApiResponseProcessor
    ) {
        this.api = new ObservableApiventasProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public apiventasProductosCreateWithHttpInfo(data: VentasProductos, _options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        const result = this.api.apiventasProductosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public apiventasProductosCreate(data: VentasProductos, _options?: Configuration): Promise<VentasProductos> {
        const result = this.api.apiventasProductosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiventasProductosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiventasProductosDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiventasProductosListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<VentasProductos>>> {
        const result = this.api.apiventasProductosListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiventasProductosList(_options?: Configuration): Promise<Array<VentasProductos>> {
        const result = this.api.apiventasProductosList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosPartialUpdateWithHttpInfo(id: number, data: VentasProductos, _options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        const result = this.api.apiventasProductosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosPartialUpdate(id: number, data: VentasProductos, _options?: Configuration): Promise<VentasProductos> {
        const result = this.api.apiventasProductosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        const result = this.api.apiventasProductosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     */
    public apiventasProductosRead(id: number, _options?: Configuration): Promise<VentasProductos> {
        const result = this.api.apiventasProductosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosUpdateWithHttpInfo(id: number, data: VentasProductos, _options?: Configuration): Promise<HttpInfo<VentasProductos>> {
        const result = this.api.apiventasProductosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this ventas productos.
     * @param data 
     */
    public apiventasProductosUpdate(id: number, data: VentasProductos, _options?: Configuration): Promise<VentasProductos> {
        const result = this.api.apiventasProductosUpdate(id, data, _options);
        return result.toPromise();
    }


}



