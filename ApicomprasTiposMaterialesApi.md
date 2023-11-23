# .ApicomprasTiposMaterialesApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicomprasTiposMaterialesCreate**](ApicomprasTiposMaterialesApi.md#apicomprasTiposMaterialesCreate) | **POST** /apicompras_tipos_materiales/ | 
[**apicomprasTiposMaterialesDelete**](ApicomprasTiposMaterialesApi.md#apicomprasTiposMaterialesDelete) | **DELETE** /apicompras_tipos_materiales/{id}/ | 
[**apicomprasTiposMaterialesList**](ApicomprasTiposMaterialesApi.md#apicomprasTiposMaterialesList) | **GET** /apicompras_tipos_materiales/ | 
[**apicomprasTiposMaterialesPartialUpdate**](ApicomprasTiposMaterialesApi.md#apicomprasTiposMaterialesPartialUpdate) | **PATCH** /apicompras_tipos_materiales/{id}/ | 
[**apicomprasTiposMaterialesRead**](ApicomprasTiposMaterialesApi.md#apicomprasTiposMaterialesRead) | **GET** /apicompras_tipos_materiales/{id}/ | 
[**apicomprasTiposMaterialesUpdate**](ApicomprasTiposMaterialesApi.md#apicomprasTiposMaterialesUpdate) | **PUT** /apicompras_tipos_materiales/{id}/ | 


# **apicomprasTiposMaterialesCreate**
> ComprasTiposMateriales apicomprasTiposMaterialesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposMaterialesApi(configuration);

let body:.ApicomprasTiposMaterialesApiApicomprasTiposMaterialesCreateRequest = {
  // ComprasTiposMateriales
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    tipoMaterial: 1,
  },
};

apiInstance.apicomprasTiposMaterialesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTiposMateriales**|  |


### Return type

**ComprasTiposMateriales**

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

# **apicomprasTiposMaterialesDelete**
> void apicomprasTiposMaterialesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposMaterialesApi(configuration);

let body:.ApicomprasTiposMaterialesApiApicomprasTiposMaterialesDeleteRequest = {
  // number | A unique integer value identifying this compras tipos materiales.
  id: 1,
};

apiInstance.apicomprasTiposMaterialesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras tipos materiales. | defaults to undefined


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

# **apicomprasTiposMaterialesList**
> Array<ComprasTiposMateriales> apicomprasTiposMaterialesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposMaterialesApi(configuration);

let body:any = {};

apiInstance.apicomprasTiposMaterialesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ComprasTiposMateriales>**

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

# **apicomprasTiposMaterialesPartialUpdate**
> ComprasTiposMateriales apicomprasTiposMaterialesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposMaterialesApi(configuration);

let body:.ApicomprasTiposMaterialesApiApicomprasTiposMaterialesPartialUpdateRequest = {
  // number | A unique integer value identifying this compras tipos materiales.
  id: 1,
  // ComprasTiposMateriales
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    tipoMaterial: 1,
  },
};

apiInstance.apicomprasTiposMaterialesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTiposMateriales**|  |
 **id** | [**number**] | A unique integer value identifying this compras tipos materiales. | defaults to undefined


### Return type

**ComprasTiposMateriales**

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

# **apicomprasTiposMaterialesRead**
> ComprasTiposMateriales apicomprasTiposMaterialesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposMaterialesApi(configuration);

let body:.ApicomprasTiposMaterialesApiApicomprasTiposMaterialesReadRequest = {
  // number | A unique integer value identifying this compras tipos materiales.
  id: 1,
};

apiInstance.apicomprasTiposMaterialesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras tipos materiales. | defaults to undefined


### Return type

**ComprasTiposMateriales**

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

# **apicomprasTiposMaterialesUpdate**
> ComprasTiposMateriales apicomprasTiposMaterialesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTiposMaterialesApi(configuration);

let body:.ApicomprasTiposMaterialesApiApicomprasTiposMaterialesUpdateRequest = {
  // number | A unique integer value identifying this compras tipos materiales.
  id: 1,
  // ComprasTiposMateriales
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    tipoMaterial: 1,
  },
};

apiInstance.apicomprasTiposMaterialesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTiposMateriales**|  |
 **id** | [**number**] | A unique integer value identifying this compras tipos materiales. | defaults to undefined


### Return type

**ComprasTiposMateriales**

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


