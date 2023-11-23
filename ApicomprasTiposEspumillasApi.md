# .ApicomprasTiposEspumillasApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicomprasTiposEspumillasCreate**](ApicomprasTiposEspumillasApi.md#apicomprasTiposEspumillasCreate) | **POST** /apicompras_tipos_espumillas/ | 
[**apicomprasTiposEspumillasDelete**](ApicomprasTiposEspumillasApi.md#apicomprasTiposEspumillasDelete) | **DELETE** /apicompras_tipos_espumillas/{id}/ | 
[**apicomprasTiposEspumillasList**](ApicomprasTiposEspumillasApi.md#apicomprasTiposEspumillasList) | **GET** /apicompras_tipos_espumillas/ | 
[**apicomprasTiposEspumillasPartialUpdate**](ApicomprasTiposEspumillasApi.md#apicomprasTiposEspumillasPartialUpdate) | **PATCH** /apicompras_tipos_espumillas/{id}/ | 
[**apicomprasTiposEspumillasRead**](ApicomprasTiposEspumillasApi.md#apicomprasTiposEspumillasRead) | **GET** /apicompras_tipos_espumillas/{id}/ | 
[**apicomprasTiposEspumillasUpdate**](ApicomprasTiposEspumillasApi.md#apicomprasTiposEspumillasUpdate) | **PUT** /apicompras_tipos_espumillas/{id}/ | 


# **apicomprasTiposEspumillasCreate**
> ComprasTiposEspumillas apicomprasTiposEspumillasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposEspumillasApi(configuration);

let body:.ApicomprasTiposEspumillasApiApicomprasTiposEspumillasCreateRequest = {
  // ComprasTiposEspumillas
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    tipoEspumilla: 1,
  },
};

apiInstance.apicomprasTiposEspumillasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTiposEspumillas**|  |


### Return type

**ComprasTiposEspumillas**

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

# **apicomprasTiposEspumillasDelete**
> void apicomprasTiposEspumillasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposEspumillasApi(configuration);

let body:.ApicomprasTiposEspumillasApiApicomprasTiposEspumillasDeleteRequest = {
  // number | A unique integer value identifying this compras tipos espumillas.
  id: 1,
};

apiInstance.apicomprasTiposEspumillasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras tipos espumillas. | defaults to undefined


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

# **apicomprasTiposEspumillasList**
> Array<ComprasTiposEspumillas> apicomprasTiposEspumillasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposEspumillasApi(configuration);

let body:any = {};

apiInstance.apicomprasTiposEspumillasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ComprasTiposEspumillas>**

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

# **apicomprasTiposEspumillasPartialUpdate**
> ComprasTiposEspumillas apicomprasTiposEspumillasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposEspumillasApi(configuration);

let body:.ApicomprasTiposEspumillasApiApicomprasTiposEspumillasPartialUpdateRequest = {
  // number | A unique integer value identifying this compras tipos espumillas.
  id: 1,
  // ComprasTiposEspumillas
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    tipoEspumilla: 1,
  },
};

apiInstance.apicomprasTiposEspumillasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTiposEspumillas**|  |
 **id** | [**number**] | A unique integer value identifying this compras tipos espumillas. | defaults to undefined


### Return type

**ComprasTiposEspumillas**

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

# **apicomprasTiposEspumillasRead**
> ComprasTiposEspumillas apicomprasTiposEspumillasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposEspumillasApi(configuration);

let body:.ApicomprasTiposEspumillasApiApicomprasTiposEspumillasReadRequest = {
  // number | A unique integer value identifying this compras tipos espumillas.
  id: 1,
};

apiInstance.apicomprasTiposEspumillasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras tipos espumillas. | defaults to undefined


### Return type

**ComprasTiposEspumillas**

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

# **apicomprasTiposEspumillasUpdate**
> ComprasTiposEspumillas apicomprasTiposEspumillasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposEspumillasApi(configuration);

let body:.ApicomprasTiposEspumillasApiApicomprasTiposEspumillasUpdateRequest = {
  // number | A unique integer value identifying this compras tipos espumillas.
  id: 1,
  // ComprasTiposEspumillas
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    tipoEspumilla: 1,
  },
};

apiInstance.apicomprasTiposEspumillasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTiposEspumillas**|  |
 **id** | [**number**] | A unique integer value identifying this compras tipos espumillas. | defaults to undefined


### Return type

**ComprasTiposEspumillas**

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


