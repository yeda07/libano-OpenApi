# .ApidetallesTapizadosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apidetallesTapizadosCreate**](ApidetallesTapizadosApi.md#apidetallesTapizadosCreate) | **POST** /apidetallesTapizados/ | 
[**apidetallesTapizadosDelete**](ApidetallesTapizadosApi.md#apidetallesTapizadosDelete) | **DELETE** /apidetallesTapizados/{id}/ | 
[**apidetallesTapizadosList**](ApidetallesTapizadosApi.md#apidetallesTapizadosList) | **GET** /apidetallesTapizados/ | 
[**apidetallesTapizadosPartialUpdate**](ApidetallesTapizadosApi.md#apidetallesTapizadosPartialUpdate) | **PATCH** /apidetallesTapizados/{id}/ | 
[**apidetallesTapizadosRead**](ApidetallesTapizadosApi.md#apidetallesTapizadosRead) | **GET** /apidetallesTapizados/{id}/ | 
[**apidetallesTapizadosUpdate**](ApidetallesTapizadosApi.md#apidetallesTapizadosUpdate) | **PUT** /apidetallesTapizados/{id}/ | 


# **apidetallesTapizadosCreate**
> DetallesTapizados apidetallesTapizadosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesTapizadosApi(configuration);

let body:.ApidetallesTapizadosApiApidetallesTapizadosCreateRequest = {
  // DetallesTapizados
  data: {
    cantidadTelasColores: -2147483648,
    cantidadTipoMaterial: -2147483648,
    tipoTela: 1,
    color: 1,
    producto: 1,
    tipoEspumilla: 1,
  },
};

apiInstance.apidetallesTapizadosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetallesTapizados**|  |


### Return type

**DetallesTapizados**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apidetallesTapizadosDelete**
> void apidetallesTapizadosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesTapizadosApi(configuration);

let body:.ApidetallesTapizadosApiApidetallesTapizadosDeleteRequest = {
  // number | A unique integer value identifying this detalles tapizados.
  id: 1,
};

apiInstance.apidetallesTapizadosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalles tapizados. | defaults to undefined


### Return type

**void**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apidetallesTapizadosList**
> Array<DetallesTapizados> apidetallesTapizadosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesTapizadosApi(configuration);

let body:any = {};

apiInstance.apidetallesTapizadosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DetallesTapizados>**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apidetallesTapizadosPartialUpdate**
> DetallesTapizados apidetallesTapizadosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesTapizadosApi(configuration);

let body:.ApidetallesTapizadosApiApidetallesTapizadosPartialUpdateRequest = {
  // number | A unique integer value identifying this detalles tapizados.
  id: 1,
  // DetallesTapizados
  data: {
    cantidadTelasColores: -2147483648,
    cantidadTipoMaterial: -2147483648,
    tipoTela: 1,
    color: 1,
    producto: 1,
    tipoEspumilla: 1,
  },
};

apiInstance.apidetallesTapizadosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetallesTapizados**|  |
 **id** | [**number**] | A unique integer value identifying this detalles tapizados. | defaults to undefined


### Return type

**DetallesTapizados**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apidetallesTapizadosRead**
> DetallesTapizados apidetallesTapizadosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesTapizadosApi(configuration);

let body:.ApidetallesTapizadosApiApidetallesTapizadosReadRequest = {
  // number | A unique integer value identifying this detalles tapizados.
  id: 1,
};

apiInstance.apidetallesTapizadosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalles tapizados. | defaults to undefined


### Return type

**DetallesTapizados**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apidetallesTapizadosUpdate**
> DetallesTapizados apidetallesTapizadosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesTapizadosApi(configuration);

let body:.ApidetallesTapizadosApiApidetallesTapizadosUpdateRequest = {
  // number | A unique integer value identifying this detalles tapizados.
  id: 1,
  // DetallesTapizados
  data: {
    cantidadTelasColores: -2147483648,
    cantidadTipoMaterial: -2147483648,
    tipoTela: 1,
    color: 1,
    producto: 1,
    tipoEspumilla: 1,
  },
};

apiInstance.apidetallesTapizadosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetallesTapizados**|  |
 **id** | [**number**] | A unique integer value identifying this detalles tapizados. | defaults to undefined


### Return type

**DetallesTapizados**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


