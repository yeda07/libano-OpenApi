# .ApiexistenciasMaterialesApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiexistenciasMaterialesCreate**](ApiexistenciasMaterialesApi.md#apiexistenciasMaterialesCreate) | **POST** /apiexistencias_materiales/ | 
[**apiexistenciasMaterialesDelete**](ApiexistenciasMaterialesApi.md#apiexistenciasMaterialesDelete) | **DELETE** /apiexistencias_materiales/{id}/ | 
[**apiexistenciasMaterialesList**](ApiexistenciasMaterialesApi.md#apiexistenciasMaterialesList) | **GET** /apiexistencias_materiales/ | 
[**apiexistenciasMaterialesPartialUpdate**](ApiexistenciasMaterialesApi.md#apiexistenciasMaterialesPartialUpdate) | **PATCH** /apiexistencias_materiales/{id}/ | 
[**apiexistenciasMaterialesRead**](ApiexistenciasMaterialesApi.md#apiexistenciasMaterialesRead) | **GET** /apiexistencias_materiales/{id}/ | 
[**apiexistenciasMaterialesUpdate**](ApiexistenciasMaterialesApi.md#apiexistenciasMaterialesUpdate) | **PUT** /apiexistencias_materiales/{id}/ | 


# **apiexistenciasMaterialesCreate**
> ExistenciasMateriales apiexistenciasMaterialesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasMaterialesApi(configuration);

let body:.ApiexistenciasMaterialesApiApiexistenciasMaterialesCreateRequest = {
  // ExistenciasMateriales
  data: {
    cantidad: -2147483648,
    tipoMaterial: 1,
  },
};

apiInstance.apiexistenciasMaterialesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasMateriales**|  |


### Return type

**ExistenciasMateriales**

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

# **apiexistenciasMaterialesDelete**
> void apiexistenciasMaterialesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasMaterialesApi(configuration);

let body:.ApiexistenciasMaterialesApiApiexistenciasMaterialesDeleteRequest = {
  // number | A unique integer value identifying this existencias materiales.
  id: 1,
};

apiInstance.apiexistenciasMaterialesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias materiales. | defaults to undefined


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

# **apiexistenciasMaterialesList**
> Array<ExistenciasMateriales> apiexistenciasMaterialesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasMaterialesApi(configuration);

let body:any = {};

apiInstance.apiexistenciasMaterialesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ExistenciasMateriales>**

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

# **apiexistenciasMaterialesPartialUpdate**
> ExistenciasMateriales apiexistenciasMaterialesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasMaterialesApi(configuration);

let body:.ApiexistenciasMaterialesApiApiexistenciasMaterialesPartialUpdateRequest = {
  // number | A unique integer value identifying this existencias materiales.
  id: 1,
  // ExistenciasMateriales
  data: {
    cantidad: -2147483648,
    tipoMaterial: 1,
  },
};

apiInstance.apiexistenciasMaterialesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasMateriales**|  |
 **id** | [**number**] | A unique integer value identifying this existencias materiales. | defaults to undefined


### Return type

**ExistenciasMateriales**

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

# **apiexistenciasMaterialesRead**
> ExistenciasMateriales apiexistenciasMaterialesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasMaterialesApi(configuration);

let body:.ApiexistenciasMaterialesApiApiexistenciasMaterialesReadRequest = {
  // number | A unique integer value identifying this existencias materiales.
  id: 1,
};

apiInstance.apiexistenciasMaterialesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias materiales. | defaults to undefined


### Return type

**ExistenciasMateriales**

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

# **apiexistenciasMaterialesUpdate**
> ExistenciasMateriales apiexistenciasMaterialesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasMaterialesApi(configuration);

let body:.ApiexistenciasMaterialesApiApiexistenciasMaterialesUpdateRequest = {
  // number | A unique integer value identifying this existencias materiales.
  id: 1,
  // ExistenciasMateriales
  data: {
    cantidad: -2147483648,
    tipoMaterial: 1,
  },
};

apiInstance.apiexistenciasMaterialesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasMateriales**|  |
 **id** | [**number**] | A unique integer value identifying this existencias materiales. | defaults to undefined


### Return type

**ExistenciasMateriales**

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


